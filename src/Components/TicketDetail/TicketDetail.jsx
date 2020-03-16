import React from 'react';
import styles from './TicketDetail.module.css';
import Section from '../Section/Section';
import TitledString from '../TitledString/TitledString';

export default function TicketDetail(props) {
    const { selected } = props;
    return (
        <div className={styles.detail}>
            {selected ?
                <div className={styles.information}>
                    <Section title="Owner">
                        <img src={selected.owner.avatar} className={styles.icon}/>
                    </Section>
                    <Section title="Details">
                        <TitledString title="Reported">
                            <h2>{new Date(selected.reportedTime).toLocaleString()}</h2>
                        </TitledString>
                        <TitledString title="Status">
                            <h2>{selected.status.slice(0, 3)}</h2>
                        </TitledString>
                        <TitledString title="Description">
                            <h2>{selected.description}</h2>
                        </TitledString>
                    </Section>
                    <Section title="Asset">
                        <TitledString title="Name">
                            <h2>{selected.asset.name}</h2>
                        </TitledString>
                        <TitledString title="GeoCode">
                            <h2>{selected.asset.geoCode}</h2>
                        </TitledString>
                        <TitledString title="Location">
                            <h2>{selected.asset.kmFrom}</h2>
                            <h2>{selected.asset.kmTo}</h2>
                        </TitledString>
                    </Section>
                </div>
                :
                <div className={styles.noTicket}>
                    not ticked yet
            </div>}
        </div>
    )
}
