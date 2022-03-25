import express from "express";
import mongoose from "mongoose";

import cors from "cors";
import fs from "fs";
import AWS from "aws-sdk";

import { profileModel } from "./db/profile.js";

const server = express();

const MONGODB_URI = "secret";
// Connect MongoDB
async function connectionDB() {
    await mongoose.connect(MONGODB_URI).then(() => {
        console.log("Connected to MongoDB ~ SUCCESS");
    });
}
connectionDB().catch((err) => console.log(err));

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

// const s3 = new AWS.S3({
//   accessKeyId: "",
//   secretAccessKey: "",
// });

server.get("/", (req, res) => {
    res.json({ status: 200 });
});

server.post("/upload", (req, res) => {
    try {
        console.log(req.body);

        // 클라이언트에서 { image_id, image_url }을 받아온다
        // 요청한 유저의 user_id를 통해 User 정보 조회
        // User 모델의 image_id와 image_url을 업데이트(회원가입 때나 이미지 편집 때나 동일하게 하면 될듯)
    } catch (err) {
        console.log(err);
    }
});

server.listen(3030, () => {
    console.log("listening on 3030 port...");
});
