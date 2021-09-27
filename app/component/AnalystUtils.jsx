
import React from 'react';
import { Utils } from '../common';
import { AnalystDetail } from './Comps';

const analysisTabs = [
    { label: '全部', statusArr: [] },
    { label: '待测评', statusArr: [2, 3, 4] },
    { label: '待评价', statusArr: [5] },
    { label: '已完成', statusArr: [6] }];

const AnalystUtils = {

    analystDetail: (analyst) => {
        let id = 'div-analyst-detail-modal';
        Utils.common.renderReactDOM(<AnalystDetail analyst={analyst} id={id} />, { id });
    },

    analysisTabs


}

export default AnalystUtils;