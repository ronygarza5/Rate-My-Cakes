const cakes = require('../controller/cakes');

module.exports = (app) => {
    app.get('/api/all', (req,res) => cakes.index(req,res))
    app.get('/api/:id', (req,res) => cakes.single(req,res))
    app.post('/api/create',(req,res) => cakes.create(req,res))
    app.put('/api/update/:id', (req,res) => cakes.update(req,res))
    app.delete('/api/delete/:id', (req,res) => cakes.delete(req,res))
    app.post('/api/create/comment/:id',(req,res) => cakes.createcomment(req,res))
}