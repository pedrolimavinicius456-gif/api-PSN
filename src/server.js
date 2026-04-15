import app from './app.js';

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`)
    console.log(`API PSN disponível em http://localhost:${PORT}/api/PSN`);
});

/*
app.use(express.json());


app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}` );
    next();
});
*/


/*DELETE
app.delete('/PSN/:id', (req, res) => {
    const { id } = req.params;
    const tamanhoInicial = PSN.length;

    PSN = PSN.filter(p => p.id !== Number(id));

    if(PSN.length === tamanhoInicial) {
        return res.status(404).json({ mensagem: "Jogo não encontrado"});
    }

    res.status(204).send();
});
*/

app.use((req, res, next) => {
    res.status(404).json({mensagem: "A rota solicitada não existe"});
});
