export default function FooterSocialLink ({ linkData }) {
    return (
        <a href={linkData.url}>
            <img src={linkData.image} alt={linkData.alt} className="social-icon" />
        </a>
    );
}