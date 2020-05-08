import React, { useState, useEffect } from "react";
import CategorySelector from "./components/CategorySelector/CategorySelector";
import ArticlesList from "./components/ArticlesList/ArticlesList";
import Loader from "./components/Loader/Loader";
import { LoadArticlesData } from "./utils/apiCalls";
import "./styles.css";

const categories = [
  "TODAS",
  "noticias",
  "guayaquil",
  "deportes",
  "entretenimiento",
  "la revista",
];

function App() {
  const [allArticles, setAllArticles] = useState([]);
  const [categoryArticles, setCategoryArticles] = useState([]);
  const [categorySelected, setCategorySelected] = useState("TODAS");

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
        items={categories}
        category={categorySelected}
        onChange={changeCategory}
      />
      {categoryArticles.length 
        ? <ArticlesList title="Lo más leido" articles={categoryArticles} />
        : <Loader />
      }
    </div>
  );
}

export default App;
