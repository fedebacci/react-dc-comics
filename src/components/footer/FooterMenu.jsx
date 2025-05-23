import FooterMenuLink from "./FooterMenuLink";

export default function FooterMenu ({ menuData }) {
    return (
        <>
            <h5>
                {menuData.title}
            </h5>
            <nav>
                <ul>

                    {
                        menuData.links.map(link => {
                            return (
                                <FooterMenuLink linkData={link} key={link.id} />
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    );
}