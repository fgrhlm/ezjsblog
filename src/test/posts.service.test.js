import PostsService from "../services/posts.service.js";
import {db, dbAuth} from "../common/db.js";
import chai, { expect } from "chai";

chai.should();
dbAuth();

describe("PostsService", () => {
    describe("_findOne", () => {
        it("should return an object", async () => {
            const testPost = {"title": "test", "body": "test"};
            const id = 2;
            
            // Create a row in the temporary db for testing
            PostsService._create(testPost);

            const query = await PostsService._findOne(id);
            
            expect(query).to.be.a("object");
            expect(query.title).to.equal("test");
            expect(query.body).to.equal("test");
        })
    })

    
    describe("_findAll", () => {
        it("should return an array", async () => {
            const query = await PostsService._findAll();
    
            expect(query).to.be.a("array");
        })
    })
    
    describe("_create", () => {
        it("should return an object", async () => {
            const testPost = {"title": "test", "body": "test"};
            const query = await PostsService._create(testPost);
    
            expect(query).to.be.a("object");
        })
    })
    
    
    describe("_delete", () => {
        it("should return an object", async () => {
            const id = 1;
            const query = await PostsService._delete(id);
    
            expect(query).to.be.a("object");
        })
    })
})