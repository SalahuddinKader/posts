import React, { useState, useEffect } from "react";
import styles from "./PostCard.module.css";
import { IoOpenOutline } from "react-icons/io5";
import { Date } from "../utils/Date";
import { formatText } from "../utils/textFormatter";
import axios from "axios";
/**
 * Post Card Copmonent
 * @prop {array} post
 * @state {string} image
 */

const PostCard = ({ post }) => {
  const [postImage, setPostImage] = useState([]);
  const { title, excerpt, link, date } = post;

  //Fetch Images
  /**
   * Assumption made for the thumbnail image
   */
  useEffect(() => {
    const fetchImages = async () => {
      const postImages = post._links["wp:featuredmedia"][0].href;
      const response = await axios.get(postImages);
      const data = response.data.media_details.sizes.thumbnail.source_url;
      setPostImage(data);
    };
    fetchImages();
  });

  return (
    <div className={styles.card}>
      <div>
        <img className={styles.card__image} src={postImage} alt="postImage" />
      </div>
      <div className={styles.card__copy}>
        <div className={styles.card__date}>
          <Date date={date} />
        </div>
        <h6>{title.rendered}</h6>
        <p>{formatText(excerpt)}</p>
      </div>

      <div className={styles.card__link}>
        <a href={link} target="_blank" rel="noreferrer">
          <button className={styles.card__btn__read__more}>
            Read more
            <IoOpenOutline size="20" style={{ marginLeft: "20px" }} />
          </button>
        </a>
      </div>
    </div>
  );
};

export default PostCard;
