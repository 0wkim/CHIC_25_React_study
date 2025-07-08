import { useState } from 'react';
import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';

function App() {
    const [subject] = useState({
        title: 'WEB',
        sub: 'world wide web!',
    });

    const [contents] = useState([
        {id: 1, title: 'HTML', desc: 'HTML is HyperText Markup Language.'},
        {id: 2, title: 'CSS', desc: 'CSS is for design.'},
        {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive.'},
    ]);

    return (
        <>
            <div className="App">
                <Subject title={subject.title} sub={subject.sub}></Subject>
                <TOC data={contents}></TOC> 
                <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
            </div>
        </>
    )
}

export default App;
