import express, {Router} from "express";
import beersRouter from "./beers.routes";

const router: Router = express.Router();

router.use('/', beersRouter);
export default router;
