/* handle middleware error handling */

class ExpressError extends Error {
    constructor(message, status) {
        super(); //extends error
        this.message = message;
        this.status = status;
        console.error(this.stack);
    }
}
//export error
module.exports = ExpressError