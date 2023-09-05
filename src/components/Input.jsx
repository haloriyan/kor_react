import styles from "./styles/Input.module.css";

const Input = ({label = 'Label', icon = null, height = 60, type = 'text', multiline = false, placeholder}) => {
    return (
        <>
            <div className={styles.Label}>{label}</div>
            <div className={styles.Wrapper}>
                <div className={styles.Area}>
                    {
                        icon !== null &&
                        <div className={styles.IconArea} style={{height: height}}>
                            {icon}
                        </div>
                    }
                    {
                        multiline ?
                            <textarea placeholder={placeholder} style={{height: 120}}></textarea>
                        :
                        <input type={type} style={{height: height}} placeholder={placeholder} />
                    }
                </div>

                <div style={{display: 'flex',justifyContent: 'center'}}>
                    <div className={styles.BottomLine}></div>
                </div>
            </div>
        </>
    )
}

export default Input;