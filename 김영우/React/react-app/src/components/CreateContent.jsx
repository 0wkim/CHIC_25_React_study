// import React from 'react';

function CreateContent(props) {
    return (
        <>
            <article>
                <h2>Create</h2>
                <form action="/create_process" method="post"
                onSubmit={function(e){
                    e.preventDefault(); // submit 버튼을 눌렀을 때, action으로 이동되는 것을 막음
                    props.onSubmit(e.target.title.value, e.target.desc.value);
                }}
                >
                    <p><input type="text" name="title" placeholder="title"></input></p>

                    <p><textarea name="desc" placeholder="description"></textarea></p>

                    <p><input type="submit"></input></p>
                </form>
            </article>
        </>
    )
}

export default CreateContent;