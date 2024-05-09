import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Comments from "./Comments";
import { getArticles } from "../../api";

function Articles(){

const[articleData, setArticleData]=useState([]);
const [isLoading, setIsLoading] = useState(true);



useEffect(()=>{
    setIsLoading(true)

    getArticles().then((data) => {
        console.log(data)
    setArticleData(data)
    setIsLoading(false)
  
    
});

},[])
if (isLoading) {
    return <p>Loading...</p>;
  }

return(

     <>
    <ul>

    {articleData.map((article)=>{

        return(
    <li className="wrapper">
        <Link to={`/articles/${article.article_id}`} className="link-to">
    <h2>{article.title}</h2>
    </Link>
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