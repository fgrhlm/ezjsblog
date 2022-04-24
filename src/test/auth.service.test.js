import fs from "fs";
import AuthService from "../services/auth.service.js";
import chai, { expect } from "chai";


const valid_key = fs.readFileSync(".key", "utf8");
const invalid_key = "0xdeadbeef"

chai.should();

describe("AuthService", () => {
    it("with valid key -> should return token string",() => {
        const token = AuthService._authorize(valid_key)
        expect(token).to.have.lengthOf.above(1)
    })

    it("with invalid key -> should return empty string",() => {
        const token = AuthService._authorize(invalid_key)
        expect(token).to.have.lengthOf(0)
    })
})