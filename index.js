const express = require("express");
const mysql2 = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded());

const conexao = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "senhadodb",
    database: "db_wcc"
});

const conexao2 = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "senhadodb",
    database: "db_wcc"
});

app.post('/contato', function (req, res) {
    
    const sql = "INSERT INTO dados_contato (nome, email, nascimento, profissao, empresa, aceita_emails, comentario) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const sql2 = "INSERT INTO endereco (rua, bairro, cidade, estado, cep) VALUES (?, ?, ?, ?, ?)";
    
    const valores = [req.body.nome, req.body.email, req.body.nascimento, req.body.profissao, req.body.empresa, req.body.aceita_emails, req.body.comentario];
    const valores2 = [req.body.rua, req.body.bairro, req.body.cidade, req.body.estado, req.body.cep];
    
    conexao.query(sql, valores, function (erro, resultado) {
        var url = req.headers.referer;
        if(url.indexOf("contato.html") < 0){
            url = url + "contato.html";
        }
        if (erro) {
            console.log("Deu erro...");
            res.redirect(url + "?retorno=erro");
        } else {
            console.log("Deu certo...");
            res.redirect(url + "?retorno=sucesso");
        }
    });
    conexao2.query(sql2, valores2, function (erro, resultado) {
        var url = req.headers.referer;
        if(url.indexOf("contato.html") < 0){
            url = url + "contato.html";
        }
        if (erro) {
            console.log("Deu erro...");
            res.redirect(url + "?retorno=erro");
        } else {
            console.log("Deu certo...");
            res.redirect(url + "?retorno=sucesso");
        }
    });
});

console.log("Iniciando servidor...");
app.listen(3000);