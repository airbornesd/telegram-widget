import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config({ path: "../.env" });

const app = express();
const port = process.env.PORT || 7000;
const botToken = process.env.BOT_TOKEN;
const url = "https://api.telegram.org/bot" + botToken;
const groupId = process.env.GROUP_ID;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/telegram", async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) return res.status(400).json({ message: "user id required" });

    const {
      data: { result },
    } = await axios.get(url + "/getChatMember", {
      params: {
        chat_id: groupId,
        user_id: id,
      },
    });

    res.status(200).json({ message: "success", data: result });
  } catch (error) {
    if (error.response)
      return res
        .status(error.response.status)
        .json({ message: error.response.data.description });

    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
