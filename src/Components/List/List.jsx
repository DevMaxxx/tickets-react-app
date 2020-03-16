import React from 'react';
import styles from './List.module.css';
import { useState } from 'react';

export default function List(props) {
    const { users, select } = props;
    const [selected, setSelected] = useState({});
    const s = styles.row;
    return (
        <div className={styles.list}>
            {users.length ? (
                <div>
                    <div className={styles.item}>
                        <div className={styles.row}>
                            <div>OWNER</div>
                            <div>REPORTED</div>
                            <div>ASSET</div>
                            <div>STATUS</div>
                        </div>
                    </div>
                    {users.map(x => (
                        <div className={styles.item + " " + (x.ticketId == selected.ticketId ? styles.active : "")}>
                            <div onClick={() => { setSelected(x); select(x); }}
                                className={styles.row}>
                                <img src={x.owner.avatar} alt="" />
                                <div>{new Date(x.reportedTime).toLocaleString()}</div>
                                <div>{x.asset.name}</div>
                                <div>{x.status.slice(0, 3)}</div>
                            </div>
                        </div>
                    ))}
                </div>) : ("No tickets yet")
            }
        </div >
    )
}
