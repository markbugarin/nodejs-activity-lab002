import { Router } from "express";
import models from "../models";

const router = Router();
router.use((req, res, next) => {
    req.context = {
        models
    };
    next();
});
router.get('/', (req, res) => {
    res.send(Object.values(req.context.models.users));
});

router.get('/:userId', (req, res) => {
    res.send(req.context.models.users[req.params.userId]);
});

export default router;