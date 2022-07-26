import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post= () => {
    const params = useParams();
useEffect(()=>{
    console.log(params)
},[params.postId]);
    return (
        <h1>Post (#{params.postId})</h1>
    );
}
export default Post;