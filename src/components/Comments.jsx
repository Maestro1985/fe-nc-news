import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function Comments(){

const[comments,setComments]=useState([])
const{article_id}=useParams()
const [isLoading, setIsLoading] = useState(true);

useEffect(()=>{
    setIsLoading(true)
fetch(`https://nc-backend-project.onrender.com/api/articles/${article_id}/comments`).then((response)=>{


return response.json()
})
.then((data)=>{

    console.log(data)
    setComments(data.comments)
    setIsLoading(false)
})
},[article_id])



if (isLoading) {
    return <p>Loading...</p>;
  }
return(

 <>
 <h1>Comments</h1>
 <ul className="comments-list">
{comments.map((comment)=>{

return(

       
    <li className="wrap">
        <h2>Author: {comment.author}</h2>
        <p><strong> Comments:</strong> {comment.body}</p>
        <p><strong>Date created:</strong> {comment.created_at}</p>
        <p><strong>Number of Votes:</strong> {comment.votes}</p>


    </li>
    )
    })}
</ul>
</>
)


}

export default Comments