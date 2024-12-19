import { Router } from "express";
import fs from 'fs'
import path from "path";

const router = Router()

// get articles
router.get("/articles", (req, res) => {
  const filePath = path.join(__dirname, "articles.html");
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(500).send("Erorr reading this file");
      return;
    }
    res.status(200).send(data);
  });
});

// get article from id and sending an error massage when it faild
router.get("/articles/:id", (req, res) => {
  const articleId = req.params.id;
  const filePath = path.join(__dirname, "article", `${articleId}.html`);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error can't find the artical");
      return;
    }
    res.status(200).send(data);
  });
});

// put is update on a artical
router.put("/article/:id", (req, res) => {
  const articleId = req.params.id;
  const filePath = path.join(__dirname, "article", `${articleId}.html`);
  fs.writeFile(filePath, req.body.content, "utf8", (err) => {
    if (err) {
      res.status(500).send("Error updating the article");
      return;
    }
  });
});
router.post("/articles", (req, res) => {
  const filePath = path.join(__dirname, 'article.html', `${req.body.id}.html`)
  const content = req.body.content
  fs.writeFile(filePath,content, 'utf8',  (err) => {
    if (err) {
      res.status(500).send("Error can't find the artical");
      return;
    }
    res.status(200).send('article created successfully ');
  })
});
router.delete("/articles/:id", (req, res) => {});



export default router;