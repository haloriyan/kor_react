import React from "react";
import styles from "./styles/Radio.module.css";

const Radio = ({active = false, size = 20, label = 'Option', onClick = null}) => {
    return (
        <div className={styles.Area} onClick={onClick}>
            <div className={styles.Radio} style={{
                width: size,
                borderColor: active ? 'red' : '#ddd'
            }}>
                {
                    active &&
                    <div className={styles.RadioInner} style={{width: size - 5}}></div>
                }
            </div>
            <div>{label}</div>
        </div>
    )
}

export default Radio;