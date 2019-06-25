function createResponseData (code, message, data) {
    return { code, message, data }
}

const parseXmlString = require('xml2js').parseString

module.exports = {
    normalData (data = null, message = '处理成功') {
        return createResponseData(200, message, data)
    },
    errorData (status, message = '') {
        return createResponseData(status, message, null)
    },
    isEmpty (val) {
        return !val || val === 'undefined'
    },
    randomStr (length) {
        const generateStr = gLength => {
            let str = Math.random()
                .toString(36)
                .substr(2)
            if (str.length >= gLength) {
                return str.substr(0, gLength)
            }
            str += generateStr(gLength - str.length)
            return str
        }
        return generateStr(length)
    },
    parseXml (xmlStr) {
        return new Promise((resolve, reject) => {
            parseXmlString(xmlStr, (err, json) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(json)
            })
        })
    },
}
