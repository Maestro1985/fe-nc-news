import axios from "axios";


export function getArticles() {
    return axios
      .get("https://my-back-end-project.onrender.com/api/articles")
      .then((response) => {
        return response.data.articles;
      });
  }

export function getArticleById(article_id){

return axios(`https://nc-backend-project.onrender.com/api/articles/${article_id}`)

.then((response)=>{

    return response.data.article
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

export function postComment( article_id,username, body){
   


   return axios.post(`https://nc-backend-project.onrender.com/api/articles/${article_id}/comments`, {
    username: username,
    body: body
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });
}
    

    export function getAllUsers(){

        return axios(`https://nc-backend-project.onrender.com/api/users`)
        .then((response)=>{

            
            return response.data.users
        })
    }

    export function deleteComment(comment_id){

        return axios.delete(`https://nc-backend-project.onrender.com/api/comments/${comment_id}`).then((response)=>{


        return response.data.comments
        })
        .catch((error) => {
          
            throw error; 
        });

    }

    export function getTopics(){

return axios.get(`https://nc-backend-project.onrender.com/api/topics`).then((response)=>{

return response.data.topics
})
.catch((error)=>{

    throw error;
})

    }