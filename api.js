function getArticleById(article_id){

return fetch(`https://nc-backend-project.onrender.com/api/articles/${article_id}`)
.then((response)=>{

    return response.json();
    
}).then((data)=>{

    return data.article
})


}
export default getArticleById