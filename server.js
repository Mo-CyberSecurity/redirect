const express = require("express"),
  app = express(),
  path = require("path");

const port = process.env.YOUR_PORT || process.env.PORT || 8080;
const flag = "flag{ranishe_r3d1r3ct_byl_slozhnee_v_5_raz}";
const dop_message = '12 решений и выложу усложненную версию(⓿_⓿)'

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});

app.get("/hint", (req, res) => {
  res.send("Try github.com/Momavi     ^_^");
});

app.get("/api/*", (req, res) => {
  var linkToRedirect = req.query.link.replace(/\s+/g, '')
  if (
    linkToRedirect !== "vk.com" &&
    linkToRedirect !== "yandex.com" &&
    linkToRedirect !== "github.com"
  ) {
    linkToRedirect === "github.com/Momavi"
      ? res.send({ flag: flag, dop_message: dop_message, status: 'flag' })
      : res.send({ link: '/hint', status: 'okey' });
  } else {
    res.send({ status: 'horoshiy url' });
  }
});

app.listen(port, () => {
  console.log(`Start on port:${port}`);
});

app.use(express.static(path.join(__dirname, "public")));
