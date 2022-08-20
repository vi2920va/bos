let videos = [
  {
    id: "1",
    title: "Video #1",
    rating: 5,
    comments: 2,
    creatAt: "2 minutes age",
    views: 1,
  },
  {
    id: 2,
    title: "Video #2",
    rating: 5,
    comments: 1,
    creatAt: "3 miuntes age",
    views: 59,
  },
  {
    id: 3,
    title: "Video #3",
    rating: 5,
    comments: 1,
    creatAt: "3 miuntes age",
    views: 59,
  },
];
export const trending = (req, res) => {
  res.render("home", { pageTitle: "home", videos });
};
export const edit = (req, res) => res.render("edit", { pageTitle: "edit" });
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
export const upload = (req, res) => res.send("Upload Video");
