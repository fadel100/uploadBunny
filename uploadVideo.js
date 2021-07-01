const fetch = require("node-fetch");
const fs = require("fs");

// fs.readdir(__dirname, (err, files) => {
//   files.forEach((file) => {
//     console.log(file);
//   });
// });

// const stats = fs.statSync(`How To Ensure Any Type Of Ad Works and Spy On Your Competition.mp4`);
// const fileSizeInBytes = stats.size;

const stream = fs.createReadStream(
  `How To Ensure Any Type Of Ad Works and Spy On Your Competition.mp4`
);

const url =
  "http://video.bunnycdn.com/library/1459/videos/5e643930-96fe-43b1-a54d-cb0f16582c4a";

const options = {
  method: "PUT",
  headers: {
    "Content-Type": "video/x-m4v",
    AccessKey: "98808fd1-dd48-469c-b69b42f4109e-1c7d-4baf",
  },
  body: stream,
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
