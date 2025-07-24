import React from 'react';

function TOC(props) {
    // TOC에는 this.props.data가 넘어옴 

    var lists = [];

    var data = props.data;
    var i = 0;
    
    while (i < data.length) {
        lists.push(
            <li key={data[i].id}>
                <a href={"/content/"+data[i].id}
                    data-ididid={data[i].id}
                    onClick={function(e){
                        e.preventDefault();
                        props.onChangePage(e.target.dataset.ididid);
                    }}>
                    {data[i].title}
                </a>
            </li>
        );
        i = i + 1;
    }

    return (
        <>
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        </>
    )
}

// 리렌더링 되지 않는 조건 
function areEqual(prevProps, nextProps) {
    return prevProps.data === nextProps.data;
}

export default React.memo(TOC, areEqual);