const express = require('express');
const groupRouter = require('./routes/estado-router');
const productRouter = require('./routes/cidade-router');

const app = express();

const PORT = 3333;

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`It's working!`);
});

//Demais rotas
app.use('/group', groupRouter);
app.use('/product', productRouter);
app.use('/estado-router', groupRouter);
app.use('/cidade-router', productRouter);

app.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`);
});