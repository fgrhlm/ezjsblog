import chai from "chai";
import chaiHttp from "chai-http";
import app from "../common/app.js";
import fs from "fs";

chai.should();
chai.use(chaiHttp);

let JWT_TOKEN = "";

describe("GET /posts", () => {
    it("without params -> should return 200", async () => {
        const res = await chai
            .request(app)
            .get("/posts")
        
        res.should.have.status(200);
        res.body.should.be.a("array");
    })

    it("with valid params -> should return 200", async () => {
        const res = await chai
            .request(app)
            .get("/posts/?id=1")

        res.should.have.status(200)
        res.body.should.be.a("array")
    })

    it("with invalid params -> should return 500", async () => {
        const res = await chai
            .request(app)
            .get("/posts/?page=1")

        res.should.have.status(500)
        res.body.should.be.a("array")
    })
})

describe("POST /auth", () => {
    it("with valid key -> should return 200", async () => {
        const valid_key = fs.readFileSync(".key", "utf8");

        const res = await chai
            .request(app)
            .post("/auth")
            .send({"key": valid_key})
        
        res.should.have.status(200);
        res.body.should.be.a("object");

        JWT_TOKEN = res.body.token;
    })

    it("with invalid key -> should return 500", async () => {
        const invalid_key = "0xdeadbeef"
        
        const res = await chai
            .request(app)
            .post("/auth")
            .send({"key": invalid_key})

        res.should.have.status(500);
        res.body.should.be.a("object");
    })
})

describe("POST /posts", () => {
    it("without token -> should return 500", async ()  => {
        const res = await chai
            .request(app)
            .post("/posts")
            .send({"title": "test", "body": "request"})

        res.should.have.status(500);
        res.body.should.be.a("object");
    })

    it("with valid token -> should return 200", async ()  => {
        const res = await chai
            .request(app)
            .post("/posts")
            .send({"title": "test", "body": "request"})
            .set({"authorization": `Bearer ${JWT_TOKEN}`})

        res.should.have.status(201);
        res.body.should.be.a("object");
    })

    it("with invalid token -> should return 200", async ()  => {
        const res = await chai
            .request(app)
            .post("/posts")
            .send({"title": "test", "body": "request"})
            .set({"authorization": `Bearer 0xdeadbeef`})

        res.should.have.status(500);
        res.body.should.be.a("object");
    })
})

describe("PATCH /posts", () => {
    it("with valid token -> should return 200", async ()  => {
        const res = await chai
            .request(app)
            .patch("/posts/1")
            .send({"title": "test", "body": "request"})
            .set({"authorization": `Bearer ${JWT_TOKEN}`})

        res.should.have.status(200);
        res.body.should.be.a("object");
    })

    it("with invalid token -> should return 500", async ()  => {
        const res = await chai
            .request(app)
            .patch("/posts/1")
            .send({"title": "test", "body": "request"})
            .set({"authorization": `Bearer 0xdeadbeef`})

        res.should.have.status(500);
        res.body.should.be.a("object");
    })
})


describe("DELETE /posts", () => {
    it("with invalid token -> should return 500", async ()  => {
        const res = await chai
            .request(app)
            .delete("/posts/1")
            .set({"authorization": `Bearer 0xdeadbeef`})

        res.should.have.status(500);
        res.body.should.be.a("object");
    })

    it("with valid token -> should return 200", async ()  => {
        const res = await chai
            .request(app)
            .delete("/posts/1")
            .set({"authorization": `Bearer ${JWT_TOKEN}`})

        res.should.have.status(200);
        res.body.should.be.a("object");
    })

})