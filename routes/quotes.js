import {request, Router} from "express";
import {v4 as uuidv4} from "uuid";
import models from "../models";

const router = Router();
router.use((req, res, next) => {
    req.context = {
        models
    };
    next();
});
router.get('/', (request, response) => {
    response.send(Object.values(request.context.models.messages));
});

router.get('/:id', (request, response) => {
    return response.send(request.context.model.messages[request.params.id]);
});
router.post('/', (req, res) => {
    const id = uuidv4();
    const quotes = {
        id,
        quote: req.body.quote,
        author: req.body.author,
        year: req.body.year,
    }
    req.context.models.messages[id] = quotes;
    res.send(quotes)
});

router.delete('/:id', (req, res) => {
    const {
        [req.params.id]: message,
        ...otherMessages
    } = req.context.models.messages = otherMessages;
    return res.send(message);
})
export default router;