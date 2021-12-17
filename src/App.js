import React from "react";
import Layout from "./components/Layout";
import { PostsListContext } from "./components/PostsListContext";
const App = () => {
  return (
    <PostsListContext>
      <Layout />
    </PostsListContext>
  );
};

export default App;
