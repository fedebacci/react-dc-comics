import Alert from "../ui/Alert";

export default function MainContent () {
    return  (
        <section id="main-content">
            <div className="container">
                <div className="row">
                    <div className="col-100">
                        <h2 style={{textAlign: 'center',marginBottom: '2rem'}}>
                            &rarr; Content goes here &larr;
                        </h2>

                        <Alert type="info" text="Il prossimo numero di Superman Arriverà dopo Natale!" />
                        <Alert type="success">
                            <strong>
                                Il prossimo numero di Batman è in arrivo!
                            </strong>
                            <br />
                            <a href="#">
                                Clicca qui
                            </a>
                            {/* &nbsp; */}
                            {" "}
                            per prenotarlo!
                        </Alert>
                        <Alert text="Gli sconti su Wonder Woman stanno per terminare!" />

                        {/* <Alert type="warning" />
                        <Alert type="" text="" />
                        <Alert /> */}
                    </div>
                </div>
            </div>
        </section>

    );
}