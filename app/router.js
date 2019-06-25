/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    require('./router/template.js')(app)
}
