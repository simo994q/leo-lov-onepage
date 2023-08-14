import style from './Footer.module.scss'

import linkedinImg from '../../images/linkedin-logo.png'
import facebookImg from '../../images/facebook-logo.png'

export function Footer() {
    return (
        <div className={style.footerContainer}>

            <section>
                <h4>Adresse</h4>
                <h5>Find os her: </h5>
                <p>Vestervænget 232, 30.sal</p>
                <p>6574 Øster Nørup</p>
                <p>Danmark</p>
            </section>

            <section>
                <h4>Kontakt</h4>
                <h5>Kontakt os her:</h5>
                <p>email@mail.dk</p>
                <p>Tlf: 0192 3023</p>
            </section>

            <section>
                <h4>Politik</h4>
                <h5>Vores politikker:</h5>
                <p>Privatlivspolitk</p>
                <p>Cookiepolitik</p>
                <p>Generalle betingelse</p>
            </section>

            <section>
                <h4>Sociale medier</h4>
                <figure>
                    <img src={facebookImg} alt="" />
                    <img src={linkedinImg} alt="" />
                </figure>
            </section>

        </div>
    )
}