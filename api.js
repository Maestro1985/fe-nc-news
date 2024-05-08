export function getArticleById(article_id){

return fetch(`https://nc-backend-project.onrender.com/api/articles/${article_id}`)
.then((response)=>{

    return response.json();
    
}).then((data)=>{

    return data.article
})


}

export function updateVotes(article_id, votes){


    return fetch(`https://nc-backend-project.onrender.com/api/articles/${article_id}`
    ,{
    
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            article_id:article_id,
            inc_votes:votes
        })
    })

}
