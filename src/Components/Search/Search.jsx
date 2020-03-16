import React from 'react';
import styles from './Search.module.css';

export default function Search(props) {
    const {onChange} = props;
    return (
        <input type="text" onChange={(e) => onChange(e.target.value)}/>
    )
}
