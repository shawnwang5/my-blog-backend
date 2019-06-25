const { Controller } = require('egg')

class TemplateController extends Controller {
    async getX () {
        const { ctx, config } = this
        try {
            const { value } = ctx.query
            const result = await ctx.service.template.getX(value)
            ctx.body = ctx.helper.normalData(result)
        } catch (e) {
            ctx.body = ctx.helper.errorData(500, `${config.errorMap.e500},${e.message}`)
        }
    }

    async postX () {
        const { ctx, config } = this
        try {
            const { value } = ctx.request.body
            const result = await ctx.service.template.postX(value)
            ctx.body = ctx.helper.normalData(result)
        } catch (e) {
            ctx.body = ctx.helper.errorData(500, `${config.errorMap.e500},${e.message}`)
        }
    }
}

module.exports = TemplateController
