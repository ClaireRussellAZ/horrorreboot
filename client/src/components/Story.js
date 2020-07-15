import React,{useEffect, useState} from 'react';

export default function Story(props) {
    const story = props.story;
    let displaypost = story.passages.map((item) => { 
        return (<li key={item.pid}> {item.text} </li>)
    });

    return (
        <>
            { displaypost }   
        </>
    )
}
