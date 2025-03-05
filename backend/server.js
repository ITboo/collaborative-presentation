const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(cors());

const presentations = [
  {
    id: "1",
    title: "React Advanced",
    createdAt: "2023-10-01",
    createdBy: "Иван Иванов",
    activeParticipants: 12,
  },
  {
    id: "2",
    title: "TypeScript Basics",
    createdAt: "2023-09-25",
    createdBy: "Мария Петрова",
    activeParticipants: 8,
  },
  {
    id: "3",
    title: "Node.js Performance",
    createdAt: "2023-09-20",
    createdBy: "Алексей Сидоров",
    activeParticipants: 15,
  },
];

app.get("/presentations", (req, res) => {
  res.json(presentations);
});

app.post("/presentations",(req, res) => {
  const { title, createdBy} = req.body;

  if (!title || !createdBy === undefined) {
    return res.status(400).json({ error: "Все поля обязательны" });
  }

  const newPresentation = {
    id: String(presentations.length + 1),
    title,
    createdAt: Date.now().toString(),
    createdBy,
    activeParticipants,
  };

  presentations.push(newPresentation);
  res.status(201).json(newPresentation);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});