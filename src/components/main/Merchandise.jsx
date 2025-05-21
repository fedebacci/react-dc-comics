import MerchandiseBox from "./MerchandiseBox";


export default function Merchandise () {

    const merchandiseBoxesData = [
        {
            img: '/img/buy-comics-digital-comics.png',
            text: 'DIGITAL COMICS'
        },
        {
            img: '/img/buy-comics-merchandise.png',
            text: 'DC MERCHANDISE'
        },
        {
            img: '/img/buy-comics-subscriptions.png',
            text: 'SUBSCRIPTION'
        },
        {
            img: '/img/buy-comics-shop-locator.png',
            text: 'COMIC SHOP LOCATOR'
        },
        {
            img: '/img/buy-dc-power-visa.svg',
            text: 'DC POWER VISA'
        }
    ];
    // console.debug(merchandiseBoxesData)


    return (
        <section id="merchandise">
            <div className="container">
                <div className="row">
                    {
                        merchandiseBoxesData.map((boxData) => {
                            return (
                                <div className="col-1-5">
                                    <MerchandiseBox boxData={boxData} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}