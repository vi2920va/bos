export const trending = (req, res) => {
  const videos = [
    {
      id: "1",
      title: "Video #1",
      rating: 5,
      comments: 2,
      creatAt: "2 minutes age",
      views: 59,
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
  res.render("home", { pageTitle: "home", videos });
};
export const edit = (req, res) => res.render("edit", { pageTitle: "edit" });
export const see = (req, res) => res.render("watch", { pageTitle: "watch" });
export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
export const upload = (req, res) => res.send("Upload Video");
