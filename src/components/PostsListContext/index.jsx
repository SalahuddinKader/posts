import React, { createContext, useState } from "react";
import axios from "axios";
//const URL = `https://www.bewley.co.uk/wp-json/wp/v2/posts`;
export const PostsContext = createContext();
export const PostsListContext = (props) => {
  const [posts, setPosts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  /**
   * PostsListContext Copmonent
   * @state {array} posts
   * @state {boolen} error
   * @state {boolen} isLoading
   * @state {string} searchInput
   * @func searchHandler  // Handler to search URL.
   */

  // Search Handler
  const searchHandler = async () => {
    if (!searchInput) {
      setError(true);
    } else {
      const fetchApi = async () => {
        setIsLoading(true);
        const response = await axios.get(searchInput, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = response.data;
        setPosts(data);
        setSearchInput("");
        setIsLoading(false);
      };
      fetchApi();
    }
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        setSearchInput,
        searchInput,
        searchHandler,
        error,
        isLoading,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};
