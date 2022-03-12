import React, { MouseEventHandler } from 'react';

import './Button.scss';

type ButtonProps = {
    onClick: MouseEventHandler | undefined,
    children: string
};

const Button = ({ onClick, children }: ButtonProps): JSX.Element => {
    return (
        <button className='button' onClick={onClick}>{children}</button>
    );
};

export default Button;