import React from "react";
import "./ArticlesList.css";

export default function ArticlesList(props) {
  const title = props.title;
  const articles = props.articles;
  const articlesMrkp = articles.map((item, inx) => {
    return (
      <li
        className="article-item"
        key={`article-${inx}`}
        title={`${item.visits} visita${item.visits > 1 ? "s" : ""}`}
      >
        <i className="article-counter">{++inx}</i>
        <p className="article-title">
          <a
            className="article-link"
            href={`https://${item.path}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </a>
        </p>
      </li>
    );
  });

  return (
    <div className="app">
      <h2 className="title-list">{title}</h2>
      <ul className="article-list">{articlesMrkp}</ul>
    </div>
  );
}
