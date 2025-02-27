// Packages
import { Route, Routes } from "react-router-dom";
// Components
import Layout from "./components/layout";
import Home from "./components/pages/Home";
import Bookings from "./components/pages/Bookings";
import ConfirmedBooking from "./components/pages/Bookings/ConfirmedBooking";
// Helpers
import pages from "./utils/pages";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={pages.home.path} element={<Home />} />
        <Route path={pages.bookings.path} element={<Bookings />} />
        <Route path={pages.confirmedBooking.path} element={<ConfirmedBooking />} />
      </Routes>
    </Layout>
  );
};

export default App;
