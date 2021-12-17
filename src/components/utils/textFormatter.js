/**
 * Text Formatter function
 */
export const formatText = (content) => {
  if (content) {
    return `${content.rendered
      .substring(0, 170)
      .replace(/(<([^>]+)>)/gi, "")}...`;
  }
};
