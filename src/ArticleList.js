import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const ArticleItem = ({ article }) => (
  <li style={{ width: 600 }}>
    <h3>{article.title}</h3>
  </li>
);

const ArticleList = ({ data: { loading, error, listArticles } }) => (
  loading ? <p>ロードしています...</p> :
    error ? <p>Error: {error}</p> : (
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {listArticles.items.map(article => <ArticleItem key={article.id} article={article} />)}
      </ul>
    )
);

const query = gql`
query {
  listArticles {
    items {
      id
      title
    }
  }
}
`;

export default graphql(query)(ArticleList);
