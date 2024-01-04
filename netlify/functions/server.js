import express, { json } from "express";
import { connect, Schema, model } from "mongoose";
import cors from "cors";
import serverless from "serverless-http";
import authRoutes from "./routes/auth";
import coursesRoutes from "./routes/courses";
import { sign } from "jsonwebtoken";
import { compareSync } from "bcrypt";

const app = express();

app.use(cors());
app.use(json());
app.use();
app.use("/.netlify/functions/server/api/auth", authRoutes);
app.use("/.netlify/functions/server/api", coursesRoutes);

connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define MongoDB Schemas and Models here
const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const courseSchema = new Schema({
  title: String,
  duration: String,
});

const UserModel = model("User", userSchema);
const CourseModel = model("Course", courseSchema);

// Define routes here
app.post("/api/auth/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user || !compareSync(password, user.password)) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Define routes for fetching courses
app.get("/api/courses", async (req, res) => {
  try {
    const courses = await CourseModel.find();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export const handler = serverless(app);
