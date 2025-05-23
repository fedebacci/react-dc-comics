export default function MainMenuLink ({ linkData }) {
    // console.debug(linkData);
    return (
        <li className={linkData.active && 'active'}>
            <a href={linkData.url} className='h-100'>
                {linkData.text}
            </a>
        </li>
    );
}