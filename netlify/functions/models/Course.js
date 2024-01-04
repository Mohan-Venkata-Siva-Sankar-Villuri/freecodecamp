import { Schema, model } from "mongoose";

const courseSchema = new Schema([
  {
    id: 1,
    name: "responsive",
    img: "images/responsive.PNG",
    text: "(New) Responsive Web Design Certification",
  },
  {
    id: 2,
    name: "responsive",
    img: "images/responsive.PNG",
    text: "Legacy Responsive Web Design Certification",
  },
  {
    id: 3,
    name: "javascript",
    img: "images/javascript.PNG",
    text: "JavaScript Algorithms and Data Structures Certification",
  },
  {
    id: 4,
    name: "react",
    img: "images/react.PNG",
    text: "Front End Development Libraries Certification",
  },
  {
    id: 5,
    name: "data base",
    img: "images/DB.PNG",
    text: "Data Visualization Certification",
  },
  {
    id: 6,
    name: "Backend",
    img: "images/backend.PNG",
    text: "Back End Development and APIs Certification",
  },
  {
    id: 7,
    name: "quality",
    img: "images/quality.PNG",
    text: "Quality Assurance Certification",
  },
]);

const Course = model("Course", courseSchema);

export default Course;
