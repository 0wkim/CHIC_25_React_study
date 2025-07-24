import { useState } from 'react';
import './App.css';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Subject from './components/Subject';
import Control from './components/Control';

function App() {
    let max_content_id = 3;

    const [state, setState] = useState({
        mode: 'create',

        welcome: {
            title: 'Welcome',
            desc: 'Hello, React.',
        },

        subject: {
          title: 'WEB',
          sub: 'world wide web!',
        },

        contents: [
          { id: 1, title: 'HTML', desc: 'HTML is HyperText Markup Language.' },
          { id: 2, title: 'CSS', desc: 'CSS is for design.' },
          { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive.' },
        ],

        selected_content_id: 2,
    });

    // 기본값 설정 
    var _title, _desc, _article = null;

    // mode를 활용하여 페이지 구분 
    if (state.mode === 'welcome') {
        _title = state.welcome.title;
        _desc = state.welcome.desc;

        // content 변경
        _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (state.mode === 'read') {
        var i = 0;

        while(i < state.contents.length) {
            var data = state.contents[i];

            if (data.id === state.selected_content_id) {
                _title = data.title;
                _desc = data.desc;

                break;
            }

            i += 1;
        }

        // content 변경
        _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (state.mode === 'create') {
        _article = <CreateContent onSubmit={function(_title, _desc){
            // 사용자가 작성한 content를 state.contents에 추가
            max_content_id = max_content_id + 1;

            // state.contents.push(
            //     {id: max_content_id, title: _title, desc: _desc}
            // );

            var _contents = state.contents.concat(
                {id: max_content_id, title: _title, desc: _desc}
            );

            setState(prev => ({
                ...prev,
                contents: _contents,
            }));
        }}></CreateContent>;
    }

    return (
        <>
            <div className="App">
                <Subject title={state.subject.title} sub={state.subject.sub}
                    onChangePage={function(){ // onChangePage라는 함수는 props가 되어 Subject로 넘어가게 됨 
                        setState(prev => ({
                            ...prev, // 기존 state 복사
                            mode: 'welcome' // mode만 변경 
                        }));
                    }}></Subject>

                {/* <header>
                    <h1><a href="/" onClick={function(e){
                        e.preventDefault();

                        setState(prev => ({
                            ...prev, // 기존 state 복사
                            mode: 'welcome' // mode만 변경 
                        }));
                    }}>{state.subject.title}</a></h1>
                    <p>{state.subject.sub}</p>
                </header> */}

                <TOC onChangePage={function(id){
                    setState(prev => ({
                        ...prev,
                        mode: 'read',
                        selected_content_id: Number(id), 
                    }));
                }} data={state.contents}></TOC> 

                <Control onChangeMode={function(_mode){
                    setState(prev => ({
                        ...prev,
                        mode: _mode, 
                    }))
                }}></Control>

                {_article}
            </div>
        </>
    )
}

export default App;
