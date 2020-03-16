import React, { useState } from 'react';
import styles from './MainPage.module.css';
import TicketSelector from '../../Components/TicketSelector/TicketSelector';
import TicketDetail from '../../Components/TicketDetail/TicketDetail';

export default function MainPage() {
    const [selected, select] = useState(null);
    return (
        <div className={styles.page}>
            <TicketSelector select={select}/>
            <TicketDetail selected={selected}/>
        </div>
    );
}
