import React from 'react'

const NewsArticles = ({data})=>{
    return (
        <div className="news">
        <h1 className="news_title">{data.title}</h1>
        <p className="news_desc">{data.description}</p>
        <span className='news_author'>{data.author}</span>
        <span className='news_publish'>{data.publishedAt}</span>
        <span className='news_source'>{data.source.name}</span>
        </div>  
    );

}

export default NewsArticles