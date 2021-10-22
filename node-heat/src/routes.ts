import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLastThreeMessagesController } from "./controllers/GetLastThreeMessagesController";
import { GetProfileUserController } from "./controllers/GetProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticate";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);
router.post("/messages", ensureAuthenticated, new CreateMessageController().handle)
router.get("/messages/last-three", new GetLastThreeMessagesController().handle);
router.get("/profile", ensureAuthenticated, new GetProfileUserController().handle);

export { router }