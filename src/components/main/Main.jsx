import MainContent from "./MainContent";
import Merchandise from "./Merchandise";

export default function Main ({ comicsData }) {
    return (
        <main id="page-main">
            <MainContent comicsData={comicsData} />
            <Merchandise />
        </main>
    );
}