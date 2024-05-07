import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Articles(){

const[articleData, setArticleData]=useState([]);



useEffect(()=>{

fetch('https://nc-backend-project.onrender.com/api/articles').then((response) => {
    if (!response.ok) {
      return Promise.reject();
    }
    
    return response.json();
  })
  .then((data) => {

    setArticleData(data.articles)
})
})

return(

     <>
    <ul>

    {articleData.map((article)=>{

        return(
    <li className="wrapper">
    <h2>{article.title}</h2>
    <img
    src={article.article_img_url}
    alt={article.title}
    width="200px"
    height="200px"
    />
    <p>Author: {article.author}</p>

    </li>
    )
    })}

    </ul>
     </>

)






}


export default Articles