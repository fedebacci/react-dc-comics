export default function Logo ({ logoData }) {

    return (
        <figure class="logo-container">
            <a href={logoData.url}>
                <img src={logoData.image} alt={logoData.alt} className="logo" />
            </a>
        </figure>
    );
}