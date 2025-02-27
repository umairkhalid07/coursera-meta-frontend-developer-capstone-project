import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import "@testing-library/jest-dom";

describe("Booking Form", () => {
  const availableTimes = ["12:00 PM", "1:00 PM", "2:00 PM"];
  const today = new Date().toISOString().split("T")[0];
  const dispatchOnDateChange = jest.fn();
  const submitData = jest.fn();

  test("should correctly render all fields with default values", async () => {
    render(<BookingForm availableTimes={availableTimes} submitData={submitData} />);

    const dateInput = screen.getByLabelText(/Date/i);
    const timeSelect = screen.getByLabelText(/Time/i);
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const submitButton = screen.getByRole("button");

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveValue(today);

    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveValue(availableTimes[0]);

    expect(numberOfGuestsInput).toBeInTheDocument();
    expect(numberOfGuestsInput).toHaveValue(1);

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveValue("Birthday");

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeEnabled();
  });

  test("should successfully submit form with valid data", () => {
    render(<BookingForm availableTimes={availableTimes} submitData={submitData} />);

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(submitData).toHaveBeenCalledWith({
      date: today,
      time: availableTimes[0],
      numberOfGuests: 1,
      occasion: "Birthday",
    });
  });

  test("should display an error and disable submit button when date is empty", () => {
    render(<BookingForm availableTimes={availableTimes} dispatchOnDateChange={dispatchOnDateChange} submitData={submitData} />);

    const dateInput = screen.getByLabelText(/Date/i);
    fireEvent.change(dateInput, { target: { value: "" } });
    fireEvent.blur(dateInput);

    const errorMessage = screen.getByTestId("error-message");
    const submitButton = screen.getByRole("button");

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent("Please choose a valid date");
    expect(submitButton).toBeDisabled();
  });

  test("should display an error and disable submit button when number of guests is empty", () => {
    render(<BookingForm availableTimes={availableTimes} dispatchOnDateChange={dispatchOnDateChange} submitData={submitData} />);

    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/i);
    fireEvent.change(numberOfGuestsInput, { target: { value: "" } });
    fireEvent.blur(numberOfGuestsInput);

    const errorMessage = screen.getByTestId("error-message");
    const submitButton = screen.getByRole("button");

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent("Please enter a number between 1 and 10");
    expect(submitButton).toBeDisabled();
  });
});
