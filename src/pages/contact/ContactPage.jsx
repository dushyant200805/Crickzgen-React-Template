import CommonBanner from "../../components/Common-Sections/CommonBanner";
import ContactFrom from "./ContactFrom";
import EmailAlertMessage from "../../components/Ui/EmailAlertMessage";
function ContactPage() {
  const BannerData = {
    "BannerTitle": "contact us",
  }
  return (
    <>
      <title>Contact Us – Crickzgen Cricket Academy | Building Future Cricket Champions</title>
      <CommonBanner BannerData={BannerData} />
      <EmailAlertMessage />
      <ContactFrom />
    </>
  );
}
export default ContactPage;