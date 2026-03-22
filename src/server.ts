import express from 'express';

const app = express();

app.get('/health', (req, res) => {
    res.send('<button>Click<button>');
});

app.post('/cake/:name/:id',(req, res) => {
    res.json(req.params)
})

export {app};

export default app;