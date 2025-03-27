import CallToActionServices from "../ui/CallToActionServices";
import ServicesHeader from "../ui/ServicesHeader";
import TabbedComponentServices from "../ui/TabbedComponentServices";
import WhatsAppButton from "../ui/WhatsAppButton";
import FullServicesList from "../ui/FullServicesList";
import SideButtons from "../ui/SideButtons";

function ServicesPage() {
  return (
    <>
      <ServicesHeader />
      <TabbedComponentServices />
      {/* <FullServicesList /> */}
      <CallToActionServices />
      <SideButtons />
    </>
  );
}

export default ServicesPage;
