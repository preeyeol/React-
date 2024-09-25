// const BlogPost=({posts})=>{
// return (
// <div>
// <header>
//  {posts.map((post,index)=>( <div key={index}> <h2> {post.title} </h2>  <p> {post.author} ({post.date})  </p> <p>{post.content}</p></div>))}


// </header>

// </div>
// )
// }


import { useEffect, useState } from "react";

const BlogPost = ({ title, author, content, date }) => {
  const [like,setLike]=useState(0)
  const [comment,setComment]=useState("")
  const [comments,setComments]=useState([])
   useEffect(()=>{


   },[])
  
  const IncreaseLike=()=>{
setLike((like)=>like+1)

  }

  const Comment=(e)=>{
    setComment(e.target.value)
    // console.log("Commented")
  }

  const submit=(e)=>{
    e.preventDefault()
    setComments([...comments,comment])
    setComment("")

  }
    return (
      <div className="blog-post">
        <h2>{title}</h2>
        <p><em>By {author} on {date}</em></p>
        <p>{content}</p>
        <button onClick={IncreaseLike}>Like</button><span>{like}</span>
        <form action="form" onSubmit={submit} >
        <input type="text" value={comment} onChange={Comment}/>
        <button type="submit"  >Submit</button>
         {comments.map((el)=><li>{el}</li>)}
        </form>
      </div>
    );
  };
  


export default BlogPost
