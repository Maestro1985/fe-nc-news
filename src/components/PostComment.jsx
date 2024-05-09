 import { useState } from "react"
 import { useParams } from "react-router-dom"
 import { postComment } from "../../api";
 
 export default function PostComment() {
    const { article_id } = useParams();
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const[error, setError]=useState(false)
  
    const handleSubmit = (e) => {
      e.preventDefault();

        postComment(article_id,author,body).then((res)=>{
            setSubmitted(true)
            setBody('')
            setAuthor('')
        })
        .catch((err)=>{
            setError(err);
            
        })

       
    
     }
     if(error){

        return <p>There has been an error</p>
     }
     
  
    return (
      <div className="form-div">
        <h1>Tell us your thoughts by leaving a comment below</h1>
        <form className="post-comment" onSubmit={handleSubmit}>
          <label htmlFor="author">Author: </label>
          <input
            type="text" required
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
           
          </input>
          <label htmlFor="body">Comment: </label>
          <input
            type="text" required
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></input>
          <button className="bt" type="submit">SUBMIT</button>
        </form>
        {submitted && <p>Thank you, your post has been submitted</p>}
      </div>
    );
  }
 


 //   const form = { author, body };
  
    //   console.log(form);
    //   fetch(`https://nc-backend-project.onrender.com/api/articles/${article_id}/comments`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(form),
    //   });