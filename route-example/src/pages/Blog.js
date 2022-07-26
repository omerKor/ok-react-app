import { Link } from 'react-router-dom';

const Blog = () => {
    return (
      <div>
          <h1>
          Blog
          </h1>
          <Link to="post-1">
            <p>Blog Detail-1</p>
          </Link>
          <Link to="post-2">
            <p>Blog Detail-2</p>
          </Link>
      </div>
    );
  };
  
  export default Blog;