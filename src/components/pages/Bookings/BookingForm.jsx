import { useFormik } from "formik";
import FormField from "./FormField";
import * as Yup from "yup";

const BookingForm = ({ availableTimes, dispatchOnDateChange, submitData }) => {
  const minimumDate = new Date().toISOString().split("T")[0];
  const occasions = ["Birthday", "Anniversary", "Party", "Business", "Casual", "Romantic"];

  const validationSchema = Yup.object({
    date: Yup.string().required("Please choose a valid date"),
    time: Yup.string().required("Please choose a valid time"),
    numberOfGuests: Yup.number().min(1, "Please enter a number between 1 and 10").max(10, "Please enter a number between 1 and 10").required("Please enter a number between 1 and 10"),
    occasion: Yup.string().required("Please choose a valid occasion"),
  });

  const formik = useFormik({
    initialValues: {
      date: minimumDate,
      time: availableTimes[0] || "",
      numberOfGuests: 1,
      occasion: occasions[0],
    },
    validationSchema,
    onSubmit: (values) => submitData(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormField label="Date" htmlFor="booking-date" hasError={formik.touched.date && !!formik.errors.date} errorMessage={formik.errors.date}>
        <input
          type="date"
          id="booking-date"
          name="date"
          min={minimumDate}
          value={formik.values.date}
          onChange={(e) => {
            formik.handleChange(e);
            dispatchOnDateChange(e.target.value);
          }}
          onBlur={formik.handleBlur}
          required
        />
      </FormField>

      <FormField label="Time" htmlFor="booking-time" hasError={formik.touched.time && !!formik.errors.time} errorMessage={formik.errors.time}>
        <select id="booking-time" name="time" value={formik.values.time} onChange={formik.handleChange} onBlur={formik.handleBlur} required>
          {availableTimes.map((time) => (
            <option key={time} value={time} data-testid="booking-time-option">
              {time}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Number of guests" htmlFor="booking-number-guests" hasError={formik.touched.numberOfGuests && !!formik.errors.numberOfGuests} errorMessage={formik.errors.numberOfGuests}>
        <input
          type="number"
          id="booking-number-guests"
          name="numberOfGuests"
          value={formik.values.numberOfGuests}
          min="1"
          max="10"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
      </FormField>

      <FormField label="Occasion" htmlFor="booking-occasion" hasError={formik.touched.occasion && !!formik.errors.occasion} errorMessage={formik.errors.occasion}>
        <select id="booking-occasion" name="occasion" value={formik.values.occasion} onChange={formik.handleChange} onBlur={formik.handleBlur} required>
          {occasions.map((occasion) => (
            <option key={occasion} value={occasion} data-testid="booking-occasion-option">
              {occasion}
            </option>
          ))}
        </select>
      </FormField>

      <button className="button-primary" type="submit" disabled={!formik.isValid || !formik.dirty}>
        Make your reservation
      </button>
    </form>
  );
};

export default BookingForm;
