module.exports = app => {
    app.router.get('/api/template/getX', app.controller.template.getX)
    app.router.post('/api/template/postX', app.controller.template.postX)
}
