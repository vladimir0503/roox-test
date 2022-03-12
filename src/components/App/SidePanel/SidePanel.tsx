import React from 'react'
import Button from '../../common/Button/Button';

import './SidePanel.scss';

type SidePanelProps = {
    sort: Function
};

const SidePanel = ({ sort }: SidePanelProps): JSX.Element => {
    return (
        <div className='SidePanel'>
            <div className='sidePanelContent'>
                <p>Сортировка</p>
                <Button onClick={() => sort('address', 'city')}>по городу</Button>
                <Button onClick={() => sort('company', 'name')}>по компании</Button>
            </div>
        </div>
    );
};

export default SidePanel