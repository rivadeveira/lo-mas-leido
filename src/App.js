import React from 'react';
import styles from './styles.css';

const categoriesArray = ['TODAS', 'noticias', 'guayaquil', 'deportes', 'entretenimiento', 'la revista']

function CategorySelector(props) {
  const itemsMrkp = props.items.map(item => <option key={`cat-${item}`} value={item}>{item}</option>)
  return (
    <select>
      {itemsMrkp}
    </select>
  )
}

const articlesData = [
  {
    //stats
    "visits": 23,
    "article": 2,
    //endstats
    "sections": [
      "la revista"
    ],
    "title": "Test article",
    "path": "eluniverso.com/guayaquil/2020/05/07/nota/7835022/coronavirus-ecuador-que-bibicleta-comprar-andar-ciudad"
  },
  {
    //stats
    "visits": 23,
    "article": 2,
    //endstats
    "sections": [
      "guayaquil"
    ],
    "title": "Test article",
    "path": "eluniverso.com/guayaquil/2020/05/07/nota/7835022/coronavirus-ecuador-que-bibicleta-comprar-andar-ciudad"
  },
  {
    //stats
    "visits": 23,
    "article": 2,
    //endstats
    "sections": [
      "noticias"
    ],
    "title": "Test article",
    "path": "eluniverso.com/guayaquil/2020/05/07/nota/7835022/coronavirus-ecuador-que-bibicleta-comprar-andar-ciudad"
  },
  {
    //stats
    "visits": 23,
    "article": 2,
    //endstats
    "sections": [
      "entretenimiento"
    ],
    "title": "Test article",
    "path": "eluniverso.com/guayaquil/2020/05/07/nota/7835022/coronavirus-ecuador-que-bibicleta-comprar-andar-ciudad"
  },
  {
    //stats
    "visits": 23,
    "article": 2,
    //endstats
    "sections": [
      "deportes"
    ],
    "title": "Test article",
    "path": "eluniverso.com/guayaquil/2020/05/07/nota/7835022/coronavirus-ecuador-que-bibicleta-comprar-andar-ciudad"
  }
]

function ArticlesList(props) {
  const title = props.title
  const articles = props.articles 
  const articlesMrkp = articles.map((item, inx) => {
    return (<li>
      <i>inx++</i>
      <p>
        <a href={`https://${item.path}`} target="_blank" rel="noopener noreferrer">{item.title}</a>
      </p>
    </li>)
  })
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {articlesMrkp}
      </ul>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <CategorySelector items={categoriesArray} />
      <ArticlesList articles={articlesData} />
    </div>
  );
}

export default App;
