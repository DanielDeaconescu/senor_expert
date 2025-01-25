import CallToActionServices from "../ui/CallToActionServices";
import ServicesHeader from "../ui/ServicesHeader";
import TabbedComponentServices from "../ui/TabbedComponentServices";
import WhatsAppButton from "../ui/WhatsAppButton";

function ServicesPage() {
  return (
    <>
      <ServicesHeader />
      <TabbedComponentServices />
      <CallToActionServices />
      <WhatsAppButton />
    </>
  );
}

export default ServicesPage;
