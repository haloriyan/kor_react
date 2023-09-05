'use client'
import styles from "./styles/Section.module.css";

const Section = ({description, title, reversed = false, action = null, image = null, descriptionStyle = null, imageStyle = null, separator = true, style = null, left}) => {
    return (
        <>
            <section className={`${styles.Wrapper} ${reversed ? styles.Reverse : ''}`} style={style}>
                {
                    image === null ?
                        <div className={styles.Image}>{left}</div>
                    :
                    <img src={image} alt="tes" className={styles.Image} style={imageStyle} />
                }
                <div className={styles.Content}>
                    {
                        (action === null && separator) &&
                        <div className={styles.Line} style={{marginBottom: 40}}></div>
                    }
                    <div className={styles.Title}>{title}</div>
                    <pre className={styles.Description} style={descriptionStyle}>
                        {description}
                    </pre>
                    {
                        action !== null && action
                    }
                </div>
            </section>
        </>
    )
}

export default Section