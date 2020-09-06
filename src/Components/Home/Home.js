import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Posts from '../Posts/Posts';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { borders } from '@material-ui/system';

const postStyle = {
    backgroundColor: 'tomato',
    padding: '20px',
    margin: '20px',
    borderRadius: '20px'
};
const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div className="col-xl-4 col-lg-6 col-md-6" style={postStyle}>
            {
                posts.map(post => <Posts post ={post}></Posts>)
            }
        </div>
    );
};

export default Home;