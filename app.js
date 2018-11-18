var express = require ('express');

const app = new express();

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('hello welcome to express!!!');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});