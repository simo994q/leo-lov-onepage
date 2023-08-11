import style from './About.module.scss'

export function About(props) {

    if (props.reverse === false) {
        return (
            <div className={style.aboutContainer}>

                <img src={props.image} />
                <figure>
                    <h2>{props.header}</h2>
                    <p>{props.textOne}</p>
                    <p>{props.textTwo}</p>
                </figure>

            </div>
        )
    } else if (props.reverse === true) {
                return (
            <div className={style.aboutContainer}>

                <figure>
                    <h2>{props.header}</h2>
                    <p>{props.textOne}</p>
                    <p>{props.textTwo}</p>
                </figure>
                <img src={props.image} />

            </div>
        )
    }

}