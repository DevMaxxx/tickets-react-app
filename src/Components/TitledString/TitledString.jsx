import React from 'react'
import styles from "./TitledString.module.css"

export default function TitledString(props) {
    const {title} = props;
    return (
        <div className={styles.titledString}>
            <h2 className={styles.title}>{title}</h2>
            {props.children}
        </div>
    )
}
