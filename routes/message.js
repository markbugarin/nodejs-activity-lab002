import {request, response, Router} from "express";
import {v4 as uuidv4} from "uuid";
import models from "../models";

const router = Router();
router.use((req, res, next) => {
    req.context = {
        models
    };
    next();
});
router.get('/', (req, res) => {
    res.send(Object.values(req.context.models.messages));
});

router.get('/:messageId', (req, res) => {
    return res.send(req.context.model.messages[request.params.messageId]);
});
router.post('/messages', (req, res) => {
    const id = uuidv4();
    const message = {
        id,
        text: req.body.text,
        userId: req.context.me.id,
    }
    req.context.models.messages[id] = message;
    res.send(message)
});

router.delete('/:messageId', (req, res) => {
    const {
        [req.params.messageId]: message,
        ...otherMessages
    } = req.context.models.messages = otherMessages;
    return res.send(message);
})
export default router;