import MainContent from "./MainContent";
import Merchandise from "./Merchandise";
import Alert from "./Alert";

export default function Main () {
    return (
        <main id="page-main">
            <MainContent />
            <Merchandise />
            <Alert type="info" text="My alert" />
            {/* <Alert type="info" />
            <Alert text="My alert" />
            <Alert type="" text="" />
            <Alert /> */}
        </main>
    );
}