import style from './Hero.module.scss'
import office from '../../images/office.jpg'

export function Hero() {
    return (
        <div className={style.heroContainer}>
            <img src={office} alt="Office" />
            <header>
                <h1><span>Leo</span>-Lov</h1>
                <p>Lov og ret kan være et plaster! Hvis du ellers har knaster!</p>
            </header>
            <section>
                <figure>
                    <h3>Familieret</h3>
                    <p>Familieret er en ret alle har.
                        Har du en familie har du
                        sikkert ret til familieret.
                        Medmindre du altid er den
                        der tror du har ret. Så kan
                        vi desværre ikke hjælpe
                        dig.</p>
                </figure>
                <figure>
                    <h3>Ejendomsret</h3>
                    <p>Har du købt et hus og
                        fortrudt eller er du blevet
                        svindlet? Fortvivl ej. Vi kan
                        hjælpe dig med at komme
                        af med huset, eller
                        eventuelt sagsøge
                        vedkommende der solgte
                        dig det.</p>
                </figure>
                <figure>
                    <h3>Konkurs</h3>
                    <p>Er du gået konkurs ville vi
                        rigtig gerne hjælpe, men
                        det kan vi desværre ikke. Vi
                        er alle advokater med fede
                        biler her så har du ingen
                        penge får du ingen hjælp
                    </p>
                </figure>
                <figure>
                    <h3>Selskabsret</h3>
                    <p>Selskabsret. Ved du heller
                        aldrig hvilken ret du skal
                        servere til et stort selskab?
                        Heller ikke os. Heldigvis har
                        vi en mand i udlandet der
                        ved en masse om dette så
                        henvend dig i dag.</p>
                </figure>
            </section>
        </div>
    )
}