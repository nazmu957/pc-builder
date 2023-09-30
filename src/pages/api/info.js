const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://pc-builder-user:ShAYaVpe5H4YxHES@cluster0.rpi3hpm.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    const infoCollection = client.db("pc-builder").collection("info");
   
    if (req.method === "GET") {
      const info = await infoCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: info });
    }
  
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
export default run;
