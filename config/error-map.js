module.exports = class ErrorMap {
    constructor () {
        this.e500 = '系统出错，请联系管理员'
        this.e401 = '您未登录，请先登录'
        this.e001 = '请求参数错误'
    }
}
