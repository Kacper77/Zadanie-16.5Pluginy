import React from 'react';
import style from './Title.css'

const Title = props => {
    return (
        <div className={style.Title}>
            <h1 className={style.Name}>{props.title}</h1>
            	<p className={style.Number}>{props.numberTasks}</p>
        </div>
    );
}

export default Title;