export const trending = (req, res) => res.send("Home Page Videos");
export const edit = (req, res) => {
  console.log(`📺 Edit ${req.params}`);
  return res.send("Edit");
};
export const search = (req, res) => res.send("Search");
export const see = (req, res) => {
  console.log(`📺 See ${req.prams}`);
  return res.send("See Video");
};
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
export const upload = (req, res) => res.send("Upload Video");
