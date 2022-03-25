import mongoose from "mongoose";
const { Schema, model } = mongoose;

const profileSchema = new Schema({
    id: { type: String, required: true },
    image_url: { type: String, required: true },
});

const profileModel = new model("Profile", profileSchema);

export { profileModel };
