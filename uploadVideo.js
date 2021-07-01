const fetch = require("node-fetch");
const fs = require("fs");

// fs.readdir(__dirname, (err, files) => {
//   files.forEach((file) => {
//     console.log(file);
//   });
// });

// const stats = fs.statSync(`How To Ensure Any Type Of Ad Works and Spy On Your Competition.mp4`);
// const fileSizeInBytes = stats.size;
// const buffer = fs.readFileSync(
//   `./How To Ensure Any Type Of Ad Works and Spy On Your Competition.mp4`
// );
const stream = fs.createReadStream(
  `./How To Ensure Any Type Of Ad Works and Spy On Your Competition.mp4`
);

const url =
  "http://video.bunnycdn.com/library/1459/videos/a9bb2e2c-3274-4342-b69a-4ac5629401a7";

const options = {
  method: "PUT",
  headers: {
    // "Content-Type": "video/x-m4v",

    AccessKey: "98808fd1-dd48-469c-b69b42f4109e-1c7d-4baf",
  },
  body: stream,
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
