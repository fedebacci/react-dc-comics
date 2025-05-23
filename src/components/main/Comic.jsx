export default function Comic ({ comicData }) {
    // console.log(comicData);
    return (
        <div className="col-1-6" key={comicData.id}>
            <a href="#">
                <figure>
                    <img src={comicData.thumb} alt={comicData.series} />
                </figure>
                <p className="comic-series">
                    {comicData.series.toUpperCase()}
                </p>
            </a>
        </div>
    );
};