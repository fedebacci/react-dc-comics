export default function FooterSocialButton ({ buttonData }) {
    return (
        <button className={buttonData.className}>
            {buttonData.text}
        </button>
    );
}