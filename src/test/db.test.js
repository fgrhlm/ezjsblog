import { db } from "../common/db.js";
import chai from "chai";

chai.should();

describe("db object", () => {
    it("should be an object", async () => {
        db.should.be.a("object")
    })
});