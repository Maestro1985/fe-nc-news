import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Comments from "./Comments";
import { getArticles } from "../../api";
import TopicDropDown from "./TopicDropDown";
import axios from "axios";


function Articles(){

  
const[articleData, setArticleData]=useState([]);
const [selectedTopic, setSelectedTopic] = useState('');
const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
    setIsLoading(true)
    
    let apiUrl = 'https://nc-backend-project.onrender.com/api/articles';
    if (selectedTopic) {
        apiUrl += `?topic=${selectedTopic}`;
      }
            
    axios
      .get(apiUrl)
      .then((response) => {
      
        const articleData = response.data.articles;
        
        setArticleData(articleData);
        setIsLoading(false)
      
      })
      .catch((err)=>{
        throw err
      
      })
  },[selectedTopic]);


// useEffect(()=>{
//     setIsLoading(true)

//     getArticles().then((data) => {
//         console.log(data)
//     setArticleData(data)
//     setIsLoading(false)
  
    
// });

// },[])
if (isLoading) {
    return <p>Loading...</p>;
  }

return(

     <>
     <TopicDropDown onChange={setSelectedTopic}/>
     <h2>Here are a list of all {selectedTopic} articles</h2>
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