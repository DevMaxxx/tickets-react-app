import React from 'react';
import MainPage from './Pages/MainPage/MainPage';
import styles from './App.module.css';

export default function App() {
    return (
        <div className={styles.app}>
            <h1>Tickets</h1>
            <MainPage />
        </div>
    );
}