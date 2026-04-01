import express, { Router } from 'express';
import { addTodo } from './data.js';

const router = express.Router();

router.post('/todos', (req, res) => {
    const text = req.body.text;
    
    const addedTodo = addTodo(text);

    res.json({message: 'Todo Added!!!!!!!', addedTodo});
    
})


export default router;