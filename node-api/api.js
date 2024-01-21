const express = require('express');
const BodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = 'secret key';

app.use(BodyParser.json());

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    //logica que autenticação do usuario
    if (username === "admin" && password === "admin") {
        const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
        res.json({
            token
        });
    } else {
        res.status(401).json({
            message: "authenticacao invalida"
        });
    }
});

app.get("/protect", verifyJWT, (req, res) => {
    res.json({
        message: "rota protegida acessada com sucesso"
    });
});


//middleware para verificar o token
function verifyJWT(req, res, next) {
    const token = req.headers["authorization"];
    console.log(token);
    if (!token) return res.status(403).json({ error: "Token nao encontrado" });

    jwt.verify(token, secretKey, (err, decoded) => {
        console.log(err);
        if (err) return res.status(401).json({ error: "Falha na autenticacao" });

        req.user = decoded;
        next();
    });
}


const port = 8000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});