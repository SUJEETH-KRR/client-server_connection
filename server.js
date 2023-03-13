const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    res.json({ "student" : ["sujeeth", "G", "202CT136", "III"] })
});

app.listen(9000, () => {
    console.log("Server is running on port 9000");
})