const moment = require('moment')
const { Service } = require('egg')

class TemplateService extends Service {
    async getX (value) {
        /*
            const { app } = this
            const date = app.mysql.literals.now
            await app.mysql.insert(`xx`, {
                date,
            })

            await app.mysql.select('xx', {
                where: {},
                columns: [ `id` ],
                orders: [ [ 'id', 'desc' ], [ 'create_time', 'asc' ] ],
                limit: 1000,
                offset: 0,
            })

            await app.mysql.get('xx', { id })

            await app.mysql.delete('xx', { id })


            const row = {
                id,
            }
            await app.mysql.update('xx', row)
        */

        const dateStr = moment().format('YYYY-MM-DD HH:mm:ss')
        return {
            time: dateStr,
            value,
        }
    }

    async postX (value) {
        const dateStr = moment().format('YYYY-MM-DD HH:mm:ss')
        return {
            time: dateStr,
            value,
        }
    }
}

module.exports = TemplateService
