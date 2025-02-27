// Components
import TestimonialCard from "../TestimonialCard";
// Assets
import "./styles.scss";
import customer1Image from "../../../../assets/customer1.jpeg";
import customer2Image from "../../../../assets/customer2.jpeg";
import customer3Image from "../../../../assets/customer3.jpeg";
import customer4Image from "../../../../assets/customer4.jpeg";

const customers = [
  {
    fullName: "Olivia Parker",
    image: customer1Image,
    rating: [1, 1, 1, 1, 1],
    says: `Absolutely fantastic service! Everything was smooth, and I couldn't be happier with the experience.`,
  },
  {
    fullName: "Daniel Carter",
    image: customer2Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `A great experience overall! The team was super helpful, and the service exceeded my expectations.`,
  },
  {
    fullName: "Sophia Martinez",
    image: customer3Image,
    rating: [1, 1, 1, 1],
    says: `Very satisfied with the service. Would definitely recommend to friends and family!`,
  },
  {
    fullName: "Ethan Williams",
    image: customer4Image,
    rating: [1, 1, 1, 0.5],
    says: `Good experience, but there's some room for improvement. I appreciate the effort, though!`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>Testimonials</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
