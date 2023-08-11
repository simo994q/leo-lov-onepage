import style from './Navbar.module.scss'

export function Navbar () {
    return (
        <div className={style.navbarContainer}>

            <ul>
                <li><a href='#'>Hjem</a></li>
                <li><a href='#'>Advokaterne</a></li>
                <li><a href='#'>Om LeoLov</a></li>
                <li><a href='#'>Kontakt</a></li>
            </ul>

            <h3><span>Leo</span>-Lov</h3>

        </div>
    )
}