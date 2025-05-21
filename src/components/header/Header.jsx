// ? DECIDERE SE FARE COMPONENTE PER MENU-ITEM
// ? POTREBBE AVERE SENSO AD ESEMPIO SE VOGLIO I MENU CHE SI COMPORTINO, A LIVELLO STILISTICO, COME QUELLO PRINCIPALE
// ? ALTRIMENTI FORSE SAREBBE UNA FORZATURA

export default function Header () {
    return (
        <header id="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-100">
                        <figure id="header-logo">
                            <img src="/img/dc-logo.png" alt="DC Logo" className="logo" />
                        </figure>
                        <nav id="main-menu" className="h-100">
                            <ul className="h-100">
                                <li>
                                    <a href="#" className="h-100">
                                        CHARACTERS
                                    </a>
                                </li>
                                <li className="active">
                                    <a href="#" className="h-100">
                                        COMICS
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="h-100">
                                        MOVIES
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="h-100">
                                        TV
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="h-100">
                                        GAMES
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="h-100">
                                        COLLECTIBLES
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="h-100">
                                        VIDEOS
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="h-100">
                                        FANS
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="h-100">
                                        NEWS
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="h-100">
                                        SHOP
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}