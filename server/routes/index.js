const express = require("express");


const router = express.Router();

class Student {
  constructor(id, name, dept, age) {
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.age = age;
  }
}


const students = [
  new Student(1, "Arjun", "CSE", 20),
  new Student(2, "Meera", "ECE", 21)
];


router.get("/", (req, res) => {
  res.json(students);
});


router.get("/:id", (req, res) => {
  const student = students.find(s => s.id === Number(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
});


router.post("/", (req, res) => {
  const { id, name, dept, age } = req.body;
  const student = new Student(id, name, dept, age);
  students.push(student);
  res.status(201).json(student);
});


router.delete("/:id", (req, res) => {
  const index = students.findIndex(s => s.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Student not found" });

  students.splice(index, 1);
  res.json({ message: "Student deleted" });
});


router.patch("/:id/dept", (req, res) => {
  const student = students.find(s => s.id === Number(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });

  const { dept } = req.body;
  student.dept = dept;

  res.json(student);
});


router.patch("/:id/age", (req, res) => {
  const student = students.find(s => s.id === Number(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });

  const { age } = req.body;
  student.age = age;

  res.json(student);
});


module.exports = router;
