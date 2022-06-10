/* Sans le raccourci de EC6
exports.success = (message, data) => {
    return {
        message: message,
        data: data
    }
}*/

// Avec le raccourci de ES6
exports.success = (message, data) => {
    return (message, data)
}
