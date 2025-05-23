// ? DECIDERE SE FARE COMPONENTE PER MENU-ITEM
// ? POTREBBE AVERE SENSO AD ESEMPIO SE VOGLIO I MENU CHE SI COMPORTINO, A LIVELLO STILISTICO, COME QUELLO PRINCIPALE
// ? ALTRIMENTI FORSE SAREBBE UNA FORZATURA
// ! INVECE NON FORZA, DETTO 22/05 DI FARLO

// # IMPORT COMPONENTS
import Logo from "../ui/Logo";
import MainMenu from "./MainMenu";

export default function Header ({ logoData, mainMenuData}) {
    return (
        <header id="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-100">
                        <Logo logoData={logoData} />
                        <MainMenu mainMenuData={mainMenuData} />
                    </div>
                </div>
            </div>
        </header>
    );
}