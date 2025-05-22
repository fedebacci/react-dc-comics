import Jumbotron from "./Jumbotron";
import Comics from "./Comics";
import Alert from "../ui/Alert";

export default function MainContent ({ comicsData }) {
    return  (
        <>
            <Jumbotron />

            <section id="main-content">
                <div className="container">
                    <div className="row">

                        <Comics comicsData={comicsData} />

                        <div className="col-100">

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
        </>

    );
}