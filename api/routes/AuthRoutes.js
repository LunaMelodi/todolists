import { Router } from "express";
import jwt from "jsonwebtoken";
import AuthController from "../controllers/AuthController";
import UserService from "../services/UserService";

const router = Router();

router.get("/", (req, res) =>
  res.status(200).send({
    message: "Welcome to the auth router (:",
  })
);

router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);
router.get("/logout", AuthController.logout);
router.get("/users", AuthController.getAllUsers);

router.get("/confirmation/:token", async (req, res) => {
  try {
    // const { user: { id } } = jwt.verify(req.params.token, process.env.EMAIL_SECRET);
    const user = jwt.verify(req.params.token, process.env.EMAIL_SECRET);
    const id = user.user_id;
    console.log("user :>> ", user);
    console.log("id :>> ", id);

    // await database.User.update({ isConfirmed: true }, { where: { id } });
    await UserService.updateUser(id, { isConfirmed: true });
    console.log("user updated hopefully?");

    const userRecord = await UserService.getOneUserById(id);
    console.log("userRecord :>> ", userRecord);

    return res.json({ message: "confirmation complete!" });
  } catch (error) {
    console.log("there was an error :>> ", error);
    return res.json({ error });
  }
});

export default router;
