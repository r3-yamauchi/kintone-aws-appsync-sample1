import React from 'react';

import appSyncConfig from "./AppSync";
import { ApolloProvider } from "react-apollo";
import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";

import ArticleList from './ArticleList';

const client = new AWSAppSyncClient({
  url: appSyncConfig.graphqlEndpoint,
  region: appSyncConfig.region,
  auth: {
    type: appSyncConfig.authenticationType,
    apiKey: appSyncConfig.apiKey,
  }
});

const App = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <div>
        <h1>AWS AppSync からデータを取得する</h1>
        <ArticleList />
      </div>
    </Rehydrated>
  </ApolloProvider>
);

export default App;
