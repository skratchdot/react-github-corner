export default name => {
  return name.toLowerCase().replace(/[^a-z0-9]/gi, '-');
};
