import React from "react";
import styles from "./styles/Chip.module.css";

const Chip = ({value, setValue, options, itemStyle, containerStyle, rounded = 8, item = null, max = null}) => {
    return (
        <div className={styles.Container}>
            {
                options.map((option, o) => {
                    let vals = [...value];
                    let i = vals.indexOf(option);
                    return (
                        <div key={o} className={`${styles.Item} ${i >= 0 ? styles.ItemActive : ''}`} 
                        style={{
                            borderRadius: rounded,
                            ...itemStyle
                        }}
                        onClick={() => {
                            if (i >= 0) {
                                vals.splice(i, 1);
                            } else {
                                if (max === null || vals.length < max) {
                                    vals.push(option);
                                }
                            }
                            setValue(vals)
                        }}>
                            {item === null ? option : item(option, o)}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Chip;