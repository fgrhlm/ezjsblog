import fs from "fs";
import morgan from "morgan";

const logger = morgan("combined", {
    stream: fs.createWriteStream('./access.log', {flags: 'a'})
})

export default logger;