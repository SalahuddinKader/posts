import React from "react";
import Header from "../Header";
import PostsSearch from "../PostsSearch";
import Footer from "../Footer";
import styles from "./Layout.module.css";
import PostsList from "../PostsList";
/**
 * Posts Layout
 */
const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <PostsSearch />
      <PostsList />
      <Footer />
    </div>
  );
};

export default Layout;
