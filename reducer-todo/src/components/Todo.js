import React from 'react';
import { checkPropTypes } from 'prop-types';

export default function Todo({item}){

    return (
        <div className={`task ${item.completed? 'Finished' : ''}`}
        onClick={}
        >
            <h1>{props.item.task}</h1>
        </div>
    )
}