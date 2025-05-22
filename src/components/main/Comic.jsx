export default function Comic ({ comicData }) {
    // console.log(comicData);
    return (
        <div className="col-1-6" key={comicData.id}>
            <img src={comicData.thumb} alt={comicData.title} />
            <h5>
                {comicData.title}
            </h5>
        </div>
    );
};