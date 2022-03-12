import React from 'react';

import './Spinner.scss';

const Spinner = (): JSX.Element => {
    return (
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    );
};

export default Spinner;