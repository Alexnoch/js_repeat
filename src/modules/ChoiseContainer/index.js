import React, { useState } from 'react';
import { ChoiseContainerItem } from './components/ChoiseContainerItem/index.js';
import {dataJs} from './data.js'
import './index.css';


export const ChoiseContainer = () => {




    return (
        <div className='choiseContainer'>
            <h1>JavaScript</h1>
            <p className='choisetext'><span className='nameColor'>JavaScript -</span> язык программирования,
                который позволяет создавать динамически обновляемый контент,
                управлять мультимедиа, анимировать изображения и делать многое другое.
            </p>
            <div className='choiseContainer__body'>
                {dataJs.map((element)=><ChoiseContainerItem name={element.name} date={element.date}/>)}
            </div>
        </div>
    )
}