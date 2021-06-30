const fetch = require("node-fetch");
const fs = require("fs");

fs.readdir(__dirname, (err, files) => {
  files.forEach((file) => {
    console.log(file);
  });
});

const stream = fs.createReadStream(
  `How To Ensure Any Type Of Ad Works and Spy On Your Competition.mp4`
);

const url =
  "http://video.bunnycdn.com/library/1459/videos/c60708e4-4da2-4356-bddb-e7bb8f9478f2";

const options = {
  method: "PUT",
  headers: {
    "Content-Type": "application/*+json",
    AccessKey: "98808fd1-dd48-469c-b69b42f4109e-1c7d-4baf",
    body: stream,
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
