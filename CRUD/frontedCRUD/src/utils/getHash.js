const getHash = () => {
  return `/${window.location.hash.slice(1).toLocaleLowerCase()}`;
};
export default getHash;
