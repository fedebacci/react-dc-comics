export default function Comic ({ comicData }) {
    // console.log(comicData);
    return (
        <div className="col-1-6" key={comicData.id}>
            <figure>
                <img src={comicData.thumb} alt={comicData.series} />
            </figure>
            <h5>
                {comicData.series.toUpperCase()}
            </h5>
        </div>
    );
};