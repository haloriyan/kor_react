import React, { useEffect, useState } from "react";
import styles from "./styles/Dropdown.module.css";

const Dropdown = ({children, options, value}) => {
    const [optionShow, showOption] = useState(false);

    const handleClick = (event) => {
        showOption(false)
    }

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => document.removeEventListener('click', handleClick);
    })

    return (
        <div className={styles.DropdownArea}>
            <div className={styles.Box} onClick={() => showOption(!optionShow)}>
                Selec
            </div>
            {
                optionShow &&
                <div className={styles.OptionArea}>
                    {children}
                </div>
            }
        </div>
    )
}

const Option = ({children}) => {
    return children
}

export {Dropdown, Option};