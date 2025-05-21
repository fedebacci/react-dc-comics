export default function MerchandiseBox ({ boxData }) {

    // console.log(boxData);

    return (
        <a className="merchandise-box" href="#">
            <img src={boxData.img} alt={boxData.text} />
            <span>{boxData.text}</span>
        </a>
    );
}