import React from 'react';
import styles from './Section.module.css';

export default function Section(props) {
    const { title } = props;
    return (
        <div className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}
