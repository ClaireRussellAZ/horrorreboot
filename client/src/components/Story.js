import React,{useEffect, useState} from 'react';

export default function Story(props) {
    const stories = props.stories;
    const [displaystate, setDisplaystate] = useState(initialState);
    let displaypost;
    useEffect(() => {
        
        console.log(stories)
        displaypost = stories.map((item) => { 
            return `<li key=${item.pid}> ${item.title} </li>`
        });
    }, [])
   

    return (
        <>
            { displaypost }   
        </>
    )
}
