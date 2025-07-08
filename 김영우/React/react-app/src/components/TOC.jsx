// import React from 'react';

function TOC(props) {
    // TOC에는 this.props.data가 넘어옴 

    var lists = [];

    var data = props.data;
    var i = 0;
    
    while (i < data.length) {
        lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
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

export default TOC;