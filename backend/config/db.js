import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ayushmandesai995:109810@cluster0.sc4qz6q.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}

