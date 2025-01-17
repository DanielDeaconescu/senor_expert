import CallToActionServices from "../ui/CallToActionServices";
import ServicesHeader from "../ui/ServicesHeader";
import TabbedComponentServices from "../ui/TabbedComponentServices";

function ServicesPage() {
  return (
    <>
      <ServicesHeader />
      <TabbedComponentServices />
      <CallToActionServices />
    </>
  );
}

export default ServicesPage;
