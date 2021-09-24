import React from 'react';
import '../assets/css/comps.scss';
import { U } from '../common';


function TitleBar(props) {
    let { title, more = {} } = props;
    let { txt, action } = more;
    return <div className="title-bar">
        <p>{title}</p>
        {txt && <a onClick={() => {
            action && U.redirect.redirectByAction(action);
        }}>{txt}</a>}
    </div>

}


export { TitleBar };

