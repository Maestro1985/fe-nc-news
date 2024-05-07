import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import Articles from "./components/Articles";
import SingleArticle from "./SingleArticle";

function App() {
 

  return (
    <div>
      
  <Header/>
  <Routes>
  <Route path="/articles" element={<Articles />} />
  <Route path='/articles/:article_id' element={<SingleArticle/>}/>
  </Routes>
  
    </div>
     
  )
}

export default App
