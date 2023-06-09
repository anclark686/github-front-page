import React from 'react';
import './StatsBar.css';

const StatsBar = () => {
    return (
        <div className="StatsBar">
            <section className="stat">
                <h3>65+ million</h3>
                <p>Developers</p>
            </section>
            <section className="stat">
                <h3>3+ million</h3>
                <p>Organizations</p>
            </section>
            <section className="stat">
                <h3>200+ million</h3>
                <p>Repositories</p>
            </section>
            <section className="stat">
                <h3>72%</h3>
                <p>Fortune 50</p>
            </section>
        </div>
    )
}

export default StatsBar;