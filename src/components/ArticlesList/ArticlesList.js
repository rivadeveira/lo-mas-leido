import React from "react";
import ArticleItem from "./ArticleItem";
import "./ArticlesList.css";
export default function ArticlesList(props) {
  const title = props.title;
  const articles = props.articles;
  const articlesMrkp = articles.map((item, inx) => <ArticleItem item={item} counter={inx} />);

  return (
    <div className="app">
      <h2 className="title-list">{title}</h2>
      <ul className="article-list">{articlesMrkp}</ul>
    </div>
  );
}
