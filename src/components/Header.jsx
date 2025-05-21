export default function Header () {
    return <header id="page-header">
        <div className="container">
            <div className="row">
                <div className="col-100">
                    <figure id="header-logo">
                        <img src="/img/dc-logo.png" alt="DC Logo" className="logo" />
                    </figure>
                    <nav id="main-menu" className="h-100">
                        <ul className="h-100">
                            <li>
                                <a href="#">
                                    CHARACTERS
                                </a>
                            </li>
                            <li className="active">
                                <a href="#">
                                    COMICS
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    MOVIES
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    TV
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    GAMES
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    COLLECTIBLES
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    VIDEOS
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    FANS
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    NEWS
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    SHOP
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
}