import AllOffersAndDeals from "../../pages/allOffersAndDeals/AllOffersAndDeals";
import ContactDetails from "../../pages/contactDetails/ContactDetails";
import ContactUs from "../../pages/contactUs/ContactUs";
import CoursesSection from "../../pages/coursesSection/CoursesSection";
import ITCoursesHub from "../../pages/itCoursesHub/ITCoursesHub";
import OffersAndNews from "../../pages/offersAndNews/OffersAndNews";
import StayUpdated from "../../pages/stayUpdated/StayUpdated";
import TrustedByClients from "../../pages/trustedByClients/TrustedByClients";
import Card from "../Card";
import HeroCarusel from "../HeroCarusel";

export default function Home() {
  return (
    <div>
      <HeroCarusel />
      <Card />
      <CoursesSection />
      <ContactUs />
      <OffersAndNews />
      <AllOffersAndDeals />
      <ITCoursesHub />
      <TrustedByClients />
      <StayUpdated />
      {/* <ContactDetails /> */}
    </div>
  );
}
