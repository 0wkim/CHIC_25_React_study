// import React from 'react';
import { useState } from 'react';

function UpdateContent(props) {

    // props로 받아온 데이터를 state화 시켜주기
    const [state, setState] = useState({
        title: props.data.title,
        desc: props.data.desc,
        id: props.data.id, 
    });

    // form에 내용을 불러오는 함수
    function inputFormHandler(e){
        setState(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
            // 굳이 title, desc 등을 작성하지 않아도 됨 
        }));
    }

    return (
        <>
            <article>
                <h2>Update</h2>
                <form action="/create_process" method="post"
                onSubmit={function(e){
                    e.preventDefault(); // submit 버튼을 눌렀을 때, action으로 이동되는 것을 막음
                    props.onSubmit(
                        state.id,
                        state.title,
                        state.desc, 
                    );
                }}
                >
                    {/* hidden form */}
                    <input type="hidden" name="id" value={state.id}  />

                    <p><input type="text" name="title" placeholder="title"
                    // value={props.data.title}
                    // props의 데이터는 read only 
                    value={state.title}
                    // 반드시 onChange 사용 (입력하는 것에 따라 동적으로 바뀌게 됨)
                    onChange={inputFormHandler}
                    ></input></p>

                    <p><textarea name="desc" placeholder="description"
                    value={state.desc}
                    onChange={inputFormHandler}
                    ></textarea></p>

                    <p><input type="submit"></input></p>
                </form>
            </article>
        </>
    )
}

export default UpdateContent;