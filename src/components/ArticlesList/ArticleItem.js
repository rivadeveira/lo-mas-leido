import React from "react";

export default function ArticleItem(props) {
  const { item, counter } = props;
  return (
    <li
      className="article-item"
      key={`article-${counter}`}
      title={`${item.visits} visita${item.visits > 1 ? "s" : ""}`}
    >
      <i className="article-counter">{counter + 1}</i>
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
}
