import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import getArticleById from "../api";


function SingleArticle(){

    const[article,setArticle]=useState({});
    const{article_id}=useParams()

useEffect(()=>{
getArticleById(article_id).then((data)=>{
setArticle(data)

},[article_id])

})
return(
<>
    <div className="container">
    <div className="single-article">
    
    
    <h2>{article.title}</h2>
    <img src=
    {article.article_img_url}
    alt={article.title}
    width="400px"
    height="300px"/>

    <p><strong>Topic:</strong> {article.topic}</p>
    <p><strong>Author:</strong> {article.author}</p>
    </div>
    <div className="content">
    <p><strong>Description:</strong> {article.body}</p>
    <p><strong>Votes:</strong> {article.votes}</p>
    <p><strong>Comments:</strong> {article.comment_count}</p>
    <p><strong>Created at:</strong> {article.created_at}</p>

       </div>
    </div>
    
    </>
)

}


export default SingleArticle