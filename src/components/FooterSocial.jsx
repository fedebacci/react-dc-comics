export default function Footer () {
    return (
        <section id="footer-social">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <button className="signUp">
                            SIGN-UP NOW!
                        </button>
                        <button className="followUs">
                            FOLLOW US
                        </button>
                    </div>
                    <div className="col">
                        <div className="social-container h-100">
                            <img src="/img/footer-facebook.png" alt="" className="social-icon" />
                            <img src="/img/footer-twitter.png" alt="" className="social-icon" />
                            <img src="/img/footer-youtube.png" alt="" className="social-icon" />
                            <img src="/img/footer-pinterest.png" alt="" className="social-icon" />
                            <img src="/img/footer-periscope.png" alt="" className="social-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}