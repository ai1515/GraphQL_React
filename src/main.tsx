import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// GraphCMSのAPIのエンドポイント(Content API)を指定
const client = new ApolloClient({
  uri: "https://api-ap-northeast-1.hygraph.com/v2/cloqtwiozoqjc01ui5e8ge2jv/master",
  // キャッシュを残す設定
  cache: new InMemoryCache(),
});

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  );
} else {
  console.error("Root element not found");
}
