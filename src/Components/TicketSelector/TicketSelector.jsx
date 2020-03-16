import React, { useState, useEffect } from 'react';
import styles from './TicketSelector.module.css';
import Search from '../Search/Search';
import List from '../List/List';
import axios from 'axios';

export default function TicketSelector(props) {
    const { select } = props;
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json").then(res => {
            setUsers(res.data);
        })
    }, [])
    return (
        <div className={styles.ticketSelector}>
            <Search onChange={setFilter} />
            <List users={filter === "" ? users : users.filter(x => x.owner.firstName.toLowerCase().includes(filter.toLowerCase()))}
                select={select} />
        </div>
    )
}
