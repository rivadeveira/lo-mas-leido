import React, { useState, useEffect } from "react";
import "./styles.css";

const categoriesArray = [
  "TODAS",
  "noticias",
  "guayaquil",
  "deportes",
  "entretenimiento",
  "la revista",
];
const titleList = "Lo más leido";

function CategorySelector(props) {
  const itemsMrkp = props.items.map((item) => (
    <option key={`cat-${item}`} value={item}>
      {item}
    </option>
  ));
  return (
    <fieldset>
      <legend>Seleccione una categoria:</legend>
      <select className="category-selector" onChange={props.onChange}>{itemsMrkp}</select>
    </fieldset>
  );
}

function ArticlesList(props) {
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

function App() {
  const [allArticles, setAllArticles] = useState([]);
  const [categoryArticles, setCategoryArticles] = useState([]);
  const [categorySelected, setCategorySelected] = useState("TODAS");
  const LoadArticlesData = () => {
    const url = new URL("https://api.chartbeat.com/live/toppages/v3/");
    const endpointConfig = {
      apikey: "489ca5d5c6e07f057ec7d9a6a69be9d8",
      host: "eluniverso.com",
      limit: 1000,
    };
    url.search = new URLSearchParams(endpointConfig).toString();
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        const { pages } = json;
        return Promise.resolve(
          pages
            .filter((el) => el.stats.article > 0)
            .sort((a, b) => b.stats.visits - a.stats.visits)
            .map((el) => ({
              visits: el.stats.visits,
              article: el.stats.article,
              sections: el.sections,
              title: el.title === "" ? "Sin título" : el.title,
              path: el.path,
            }))
        );
      });
  };
  const updateResults = (criteria) => {
    if (criteria === "TODAS") {
      setCategoryArticles(allArticles);
    } else {
      const articlesFiltered = [...allArticles]
        .filter((art) => art.sections.includes(criteria))
        .slice(0, 5);
      setCategoryArticles(articlesFiltered);
    }
  };
  const changeCategory = (e) => {
    setCategorySelected(e.target.value);
  };

  useEffect(() => {
    LoadArticlesData().then((formatedData) => {
      setAllArticles(formatedData);
      setCategoryArticles(formatedData);
    });
  }, []);
  useEffect(() => {
    updateResults(categorySelected);
  }, [categorySelected]);

  return (
    <div className="app-container">
      <CategorySelector
        items={categoriesArray}
        category={categorySelected}
        onChange={changeCategory}
      />
      <ArticlesList title={titleList} articles={categoryArticles} />
    </div>
  );
}

export default App;
