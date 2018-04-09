import React from 'react';
import style from "./Title.css";

const Title = props => {
    return (
        <div className={style.Title}>
            <h1 className={style.Name}>{props.title}</h1>
        </div>
    );
}

export default Title;