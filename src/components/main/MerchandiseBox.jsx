export default function MerchandiseBox ({ boxData }) {

    // console.log(boxData);

    return (
        <div className="merchandise-box">
            <img src={boxData.img} alt={boxData.text} />
            <span>{boxData.text}</span>
        </div>
    );
}