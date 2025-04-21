// Servidor HTTP simples para servir arquivos localmente e resolver problemas de CORS
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  console.log(`Requisição recebida: ${req.url}`);
  
  // Normaliza a URL da requisição
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html';
  }
  
  // Obtém a extensão do arquivo
  const extname = path.extname(filePath);
  let contentType = MIME_TYPES[extname] || 'application/octet-stream';
  
  // Adiciona cabeçalhos CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Lê o arquivo e envia a resposta
  fs.readFile(path.join(__dirname, filePath), (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Arquivo não encontrado
        console.error(`Arquivo não encontrado: ${filePath}`);
        res.writeHead(404);
        res.end('Arquivo não encontrado');
      } else {
        // Erro de servidor
        console.error(`Erro ao ler arquivo: ${err.code}`);
        res.writeHead(500);
        res.end(`Erro no servidor: ${err.code}`);
      }
    } else {
      // Sucesso
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
      console.log(`Arquivo servido com sucesso: ${filePath}`);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log('Para acessar o aplicativo, abra o navegador e acesse:');
  console.log(`http://localhost:${PORT}/index.html`);
  console.log(`http://localhost:${PORT}/resultado.html`);
  console.log('Para parar o servidor, pressione Ctrl+C');
});