// ! NB: SEMBRA ESSERE UGUALE A MAINMENULINK

export default function FooterMenuLink ({ linkData }) {
    return (
        <li className={linkData.active && 'active'}>
            <a href={linkData.url} className='h-100'>
                {linkData.text}
            </a>
        </li>
    );
}