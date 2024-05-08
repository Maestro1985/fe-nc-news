import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import {getArticleById, updateVotes }from "../api";
import { Link } from "react-router-dom";



function SingleArticle() {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [voteChange, setVoteChange] = useState(0);
    const { article_id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        getArticleById(article_id)
            .then((data) => {
                setArticle(data);
                setIsLoading(false);
            });
    }, [article_id]); 

    const handleVote = (votes) => {
        updateVotes(article_id, votes)
            
        setVoteChange(votes);
            
            
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="container">
                <div className="single-article">
                    <h2>{article.title}</h2>
                    <img src={article.article_img_url} alt={article.title} width="400px" height="300px" />
                    <p><strong>Topic:</strong> {article.topic}</p>
                    <p><strong>Author:</strong> {article.author}</p>
                </div>
                <div className="content">
                    <p><strong>Description:</strong> {article.body}</p>
                    <p><strong>Votes:</strong> {article.votes + voteChange}</p>
                    <button className="btn-vote" disabled={voteChange === 1} onClick={() => handleVote(1)}>+</button>
                    <button className="btn-vote" disabled={voteChange === -1} onClick={() => handleVote(-1)}>-</button>
                    <p><strong>Comments:</strong> {article.comment_count}</p>
                    <p><strong>Created at:</strong> {article.created_at}</p>
                </div>
            </div>
            <Link to={`/articles/${article_id}/comments`}>
                <button className="btn">Click to see comments</button>
            </Link>
        </>
    );
}


export default SingleArticle