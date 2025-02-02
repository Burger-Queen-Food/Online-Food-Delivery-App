import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://BurgerQueen:BurgerQueen2025@cluster0.rc7zf.mongodb.net/food-delivery').then(() => console.log("DB Connected"));
}