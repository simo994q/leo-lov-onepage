import style from './Navbar.module.scss'

export function Navbar () {
    function toggleNavbar () {
        
    }

    return (
        <div className={style.navbarContainer}>

            <div onClick={toggleNavbar}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <ul className={style.navbarList}>
                <li><a href='#'>Hjem</a></li>
                <li><a href='#'>Advokaterne</a></li>
                <li><a href='#'>Om LeoLov</a></li>
                <li><a href='#'>Kontakt</a></li>
            </ul>

            <h3><span>Leo</span>-Lov</h3>

        </div>
    )
}