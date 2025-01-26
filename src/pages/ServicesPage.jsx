import CallToActionServices from "../ui/CallToActionServices";
import ServicesHeader from "../ui/ServicesHeader";
import TabbedComponentServices from "../ui/TabbedComponentServices";
import WhatsAppButton from "../ui/WhatsAppButton";
import FullServicesList from "../ui/FullServicesList";

function ServicesPage() {
  return (
    <>
      <ServicesHeader />
      <TabbedComponentServices />
      <FullServicesList />
      <CallToActionServices />
      <WhatsAppButton />
    </>
  );
}

export default ServicesPage;
