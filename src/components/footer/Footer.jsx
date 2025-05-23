import FooterContent from "./FooterContent";
import FooterSocial from "./FooterSocial";

export default function Footer ({ footerMenusData, footerSocialData }) {
    return (
        <footer id="page-footer">
            <FooterContent footerMenusData={footerMenusData} />
            <FooterSocial footerSocialData={footerSocialData} />
        </footer>
    );
}