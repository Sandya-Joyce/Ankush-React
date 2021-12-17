const js = () => {};

export const isEmpty = (value) => {
  if (typeof value != "undefined") {
    return value ? true : false;
  }
  return false;
};

export default js;
