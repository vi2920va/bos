export const trending = (req, res) => {
  const videos = [
    {
      title: "Video #1",
    },
    {
      title: "Video #2",
    },
    {
      title: "Videp #2",
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
