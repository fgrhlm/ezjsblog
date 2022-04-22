import app from "./app.js";

const PORT = process.env.APP_PORT || 8080;

if(process.env.EZJSBLOG_MODE === "init"){
    process.exit()
}

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});