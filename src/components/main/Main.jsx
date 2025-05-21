import MainContent from "./MainContent";
import Merchandise from "./Merchandise";
import Alert from "../ui/Alert";

export default function Main () {
    return (
        <main id="page-main">
            <MainContent />
            <Merchandise />
            {/* <Alert type="info" text="My alert text" />
            <Alert type="info">
                <strong>
                    My alert text
                </strong>
            </Alert>
            <Alert text="My alert text" />
            <Alert type="info" />
            <Alert type="" text="" />
            <Alert /> */}
        </main>
    );
}