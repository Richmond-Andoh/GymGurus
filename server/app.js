import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendEmail } from "./config/sendEmail.js";

dotenv.config();

const app = express();
const router = express.Router();
const PORT = process.env.PORT
//config({ path: "./config.env"})

app.use(cors())

// Configure CORS
// const corsOptions = {
//     origin: 'http://localhost:5173', // Your frontend origin
//     credentials: true, // Allow credentials (cookies, authorization headers, etc.)
// };

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/send-mail", async (req, res, next) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return next(
            res.status(400).json({
                success: false,
                message: "Please fill in all fields"
            })
        )
    };

    try {
        await sendEmail({
            email: "rmandoh002@st.ug.edu.gh",
            subject: "GYM WEBSITE CONTACT INFO",
            message,
            userEmail: email
        });

        res.status(200).json({
            success: true,
            message: "Email sent successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
