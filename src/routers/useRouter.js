import express from "express";

const useRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User");

useRouter.get("/edit", handleEditUser);

export default useRouter;
