import BlogPost from "./BlogPost";

const BlogFeed = ({ posts }) => {
    return (
      <div>
        {posts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            author={post.author}
            content={post.content}
            date={post.date}
          />
        ))}
      </div>
    );
  };
  
  export default BlogFeed;