import MainMenuLink from "./MainMenuLink";

export default function MainMenu ({ mainMenuData }) {
    // console.debug(mainMenuData);
    return (
        <nav id="main-menu" className="h-100">
            <ul className="h-100">
                {
                    mainMenuData.links.map(link => {
                        return (
                            <MainMenuLink linkData={link} key={link.id} />
                        )
                    })
                }
            </ul>
        </nav>
    );
}