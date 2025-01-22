import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/telegram", (req, res) => {
  try {
    const body = req.body;
    const query = req.query;
    const params = req.params;

    console.log("🚀 ~ app.post");
    res.status(200).json({ message: "success", data: { body, query, params } });
  } catch (error) {
    console.error("🚀 ~ app.post ~ error:", error);
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
