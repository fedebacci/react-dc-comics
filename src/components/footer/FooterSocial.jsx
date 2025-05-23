import FooterSocialButton from "./FooterSocialButton";
import FooterSocialLink from "./FooterSocialLink";

export default function FooterSocial ({ footerSocialData }) {
    return (
        <section id="footer-social">
            <div className="container">
                <div className="row">
                    <div className="col">
                        {
                            footerSocialData.buttons.map(button => {
                                return (
                                    <FooterSocialButton buttonData={button} />
                                );
                            })
                        }
                    </div>
                    <div className="col">
                        <div className="social-container h-100">
                            {
                                footerSocialData.links.map(link => {
                                    return (
                                        <FooterSocialLink linkData={link} />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}