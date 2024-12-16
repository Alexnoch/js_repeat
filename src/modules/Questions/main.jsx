import React, { useState, useEffect } from 'react';
import { Menu } from './components/menu';



const Questions = () => {

    const [questions, setQuestions] = useState([]);



    return (
        <div>
            <Menu />
            Вопросы
        </div>
    )


}

export default Questions;