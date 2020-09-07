const { MongoClient } = require("mongodb");
const Express = require("express");
const Cors = require("cors");
const BodyParser = require("body-parser");

const client = new MongoClient("mongodb+srv://dbUser:dbPassword@cluster0.vicac.mongodb.net/test_database?retryWrites=true&w=majority");
const server = Express();

server.use(BodyParser.json());
server.use(BodyParser.urlencoded({ extended: true }));
server.use(Cors());

var collection;

server.get("/search", async (request, response) => {
    try {
        let result = await collection.aggregate([
            {
                "$search": {
                    "autocomplete": {
                        "query": `${request.query.term}`,
                        "path": "LegalDescription",
                        "tokenOrder": "sequential"
                    }
                }
            }
        ]).toArray();
        response.send(result);
    } catch (e) {
        response.status(500).send({ message: e.message });
    }
});

server.listen("3000", async () => {
    try {
        await client.connect();
        collection = client.db("test_database").collection("test_collection");
    } catch (e) {
        console.error(e);
    }
});