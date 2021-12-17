import React, { useState, useContext, useEffect } from "react";
import { PostsContext } from "../PostsListContext";
import styles from "./PostsList.module.css";
import PostCard from "../PostCard";
/**
 * Post Card Copmonent
 * @prop {array} posts
 * @prop {boolen} error
 * @prop {boolen} isLoading
 * @state {number} visible
 * @func loadMoreHandler  // Handler to load more data.
 * @func renderPosts  // Map through all posts.
 */
const PostsList = () => {
  const [visible, setvisible] = useState(6);
  const { posts, error, isLoading } = useContext(PostsContext);

  // Load More Handler
  const loadMoreHandler = () => {
    setvisible((prevValue) => prevValue + 6);
  };
  // Reset value to 6 for any URL
  useEffect(() => {
    setvisible(6);
  }, [posts]);

  const renderPosts = posts
    .slice(0, visible)
    .map((post, id) => <PostCard key={id} post={post} />);

  return (
    <div>
      <div className={styles.error}>
        {posts.length < 1 && error && <p>Please Enter URL to Fetch Data !</p>}
      </div>
      <div className={styles.container}>
        {isLoading ? (
          <p>Loading...</p>
        ) : posts.length > 0 ? (
          renderPosts
        ) : (
          <p>No Posts available</p>
        )}
      </div>
      <div className={styles.btn}>
        {visible < posts.length && (
          <button className={styles.btn__load__more} onClick={loadMoreHandler}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default PostsList;
