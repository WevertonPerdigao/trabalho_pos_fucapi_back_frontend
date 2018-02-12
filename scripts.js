// Buscando os parametros recebidos na URL
const params = location.search;
// Verificando se algo foi recebido
if (params.length > 0) {
    // Verificando se a mensagem é de sucesso
    const sucesso = params.indexOf("sucesso") >= 0;

    if(sucesso){
        alert("Dados enviados com sucesso!");
    } else {
        alert("Ocorreu um erro ao enviar os dados.");
    }
    // Limpando os parametros na URL
    window.history.replaceState({}, document.title, location.pathname);
}

