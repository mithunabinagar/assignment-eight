import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';



const Posts = (props) => {
    const {userId, id, title} = props.post;
    return (
        <div style={{border: '5px solid gold', margin:'20px', padding:'20px', borderRadius:'20px', boxShadow: '5px 10px' }}>
        
            <h3><strong>POST ID : </strong> {id} </h3>
            <h2><strong>POST TITLE : </strong> {title}</h2>
            <Link to={`/post/${id}`} style={{textDecoration:'none'}}><Button variant="contained" color="Primary">READ MORE</Button></Link>

        </div>
    );
};

export default Posts;