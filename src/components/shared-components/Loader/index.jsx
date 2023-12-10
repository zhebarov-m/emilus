import { classNames } from "../classNames/classNames";
import './CustomLoader.scss';
import React from 'react';

function CustomLoader(props) {
    const { className, isLoading, message } = props;
    return (
        <div className={classNames("loader-container", { "hidden": !isLoading }, [className])}>
            <div className="ldsHourglass"></div>
            <p>{message}</p>
        </div>
    );
}

export default CustomLoader;
