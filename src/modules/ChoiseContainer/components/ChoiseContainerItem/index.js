import React, { useState } from 'react';
import './index.css';



export const ChoiseContainerItem = (props) => {

    const {name, date} = props

    return (
        <div className='articleSelection'>
            {/* <img className='imgArticle' src='' alt=''></img> */}
            <div className='articleSelectionName'>
                <p className='nameArticle'>{name}</p>
                <div className='lineInArticle'></div>
                <p className='dateArticle'>{date}</p>
            </div>
        </div>
    )
}