const http = require("http");

const mongodb = require("mongodb");

const connectionString =
  "mongodb+srv://abdumalikov3011:lrgdAwImArCUiLRO@cluster0.631uo.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The servwr is running successhully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
