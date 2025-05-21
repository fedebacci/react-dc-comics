import MainContent from "./MainContent";
import Merchandise from "./Merchandise";
import Alert from "../ui/Alert";

export default function Main () {
    return (
        <main id="page-main">
            <MainContent />
            <Merchandise />
            <div className="container" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>

                <Alert type="info" text="Il prossimo numero di Superman è in arrivo!" />
                <Alert type="success">
                    <strong>
                        Il prossimo numero di Batman è in arrivo!
                    </strong>
                    <br />
                    <a href="#">
                        Clicca qui
                    </a>
                    {" "}
                    per prenotarlo!
                </Alert>
                <Alert text="Gli sconti su Acquaman stanno per terminare!" />

                <Alert type="warning" />
                <Alert type="" text="" />
                <Alert />

            </div>
        </main>
    );
}