const posts = require('./src/posts');
const usuarios = require('./src/usuarios');

module.exports = app => {
  app.get('/', (req, res) => {res.send('Rota Teste da aplicação')});
  
  posts.rotas(app);
  usuarios.rotas(app);
};