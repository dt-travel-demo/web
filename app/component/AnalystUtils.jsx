
import React from 'react';
import { Utils } from '../common';
import { AnalystDetail } from './Comps';


const AnalystUtils = {

    analystDetail: (analyst) => {
        let id = 'div-analyst-detail-modal';
        Utils.common.renderReactDOM(<AnalystDetail analyst={analyst} id={id} />, { id });
    }
}

export default AnalystUtils;