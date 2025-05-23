import FooterMenu from "./FooterMenu";

export default function FooterContent ({ footerMenusData }) {
    return (
        <section id="footer-content">
            <div className="container">
                <div className="row">
                    <div className="col-1-3">
                        {/* ! ATTENZIONE: QUESTO CONTAINER NON CI DOVREBBE ESSERE, MA SENZA PERDO IL PADDING LATRALE */}
                        {/* ! CAPIRE COSA C'È DI SBAGLIATO IN SETUP CSS E CORREGGERE */}
                        <div className="container">
                            <div className="row">
                                <div className="col-1-3">
                                    <FooterMenu menuData={footerMenusData[0]} />
                                    <FooterMenu menuData={footerMenusData[1]} />
                                </div>
                                <div className="col-1-3">
                                    <FooterMenu menuData={footerMenusData[2]} />
                                </div>
                                <div className="col-1-3">
                                    <FooterMenu menuData={footerMenusData[3]} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2-3">
                        <figure className="h-100 logo-big-container">
                            <img src="/img/dc-logo-bg.png" alt="dc-logo-bg" className="logo-big" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}