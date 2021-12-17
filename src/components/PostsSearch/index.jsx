import React, { useContext } from "react";
import { PostsContext } from "../PostsListContext";
import styles from "./PostsSearch.module.css";
import { AiOutlineSync } from "react-icons/ai";

/**
 * PostsSearch Copmonent
 * @prop {string} searchInput
 * @prop {string} setSearchInput
 * @prop {function} searchHandler
 * @func onChangeHandler  // Get target value.
 */
const PostsSearch = () => {
  const { searchInput, setSearchInput, searchHandler } =
    useContext(PostsContext);

  // OnChangeHandler
  const onChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className={styles.search__container}>
      <label className={styles.search__title}>Enter URL </label>
      <div className={styles.search}>
        <input
          type="search"
          value={searchInput}
          onChange={onChangeHandler}
          className={styles.search__input}
        />
        <button className={styles.search__btn} onClick={searchHandler}>
          <span>Fetch</span>

          <AiOutlineSync className={styles.search__icon} />
        </button>
      </div>
    </div>
  );
};

export default PostsSearch;
