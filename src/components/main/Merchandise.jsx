import MerchandiseBox from "./MerchandiseBox";
import merchandiseBoxesData from "../../assets/js/data/merchandiseBoxesData";

export default function Merchandise () {
    return (
        <section id="merchandise">
            <div className="container">
                <div className="row">
                    {
                        merchandiseBoxesData.map((boxData, i) => {
                            return (
                                <div className="col-1-5">
                                    <MerchandiseBox boxData={boxData} key={i} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}