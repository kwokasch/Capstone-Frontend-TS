import * as React from 'react';
import './../stylesheets_ts/SubHeader.css';

export default function SubHeader (props: {}) {
    return (
        <div className="links">
             <h4>Social Media</h4>
            <h4>Shelters</h4>
            <h4>Alerts</h4>
            <h4>Resources</h4>
        </div>
    )
}