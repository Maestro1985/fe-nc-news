import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import Articles from "./components/Articles";
import SingleArticle from "./SingleArticle";
import Comments from "./components/Comments";
import PostComment from "./components/PostComment";

function App() {
 

  return (
    <div>
      
  <Header/>
  <Routes>
  <Route path="/articles" element={<Articles />} />
  <Route path='/articles/:article_id' element={<SingleArticle/>}/>
  <Route path='/articles/:article_id/comments' element={<Comments/>}/>
 
  </Routes>
  
    </div>
     
  )
}

export default App
