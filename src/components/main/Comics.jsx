import Comic from "./Comic";

export default function Comics ({ comicsData }) {
    // console.log(comicsData);
    return (
        <div className="col-100">
            <span className="comics-list-title">
                CURRENT SERIES
                </span>
            <div className="row comics-list">
                {
                    comicsData.map(comicData => {
                        return (
                            <Comic comicData={comicData} key={comicData.id} />
                        );
                    })
                }
            </div>
        </div>
    );
};