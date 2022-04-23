import fs from "fs";
import morgan from "morgan";

// https://github.com/expressjs/morgan#readme

const logger = morgan("combined", {
    // Log every request to 'access.log'
    stream: fs.createWriteStream('./access.log', {flags: 'a'})
})

export default logger;