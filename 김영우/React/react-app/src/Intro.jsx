import { useState } from 'react';
import './App.css';
import Name from './components/Name.jsx';
import Date from './components/Date.jsx';
import Sample from './components/Sample.jsx';

function Intro() {
    const [intro] = useState({
        date: '2025-07-10',
        name: '김영우',
        desc: '광운대학교 정보융합학부 김영우입니다.',
    });

    return (
        <>
            <div className="Intro">
                <Date date={intro.date} />
                <Name name={intro.name} />
                <Sample desc={intro.desc} />
            </div>
        </>
    )
}

export default Intro;
