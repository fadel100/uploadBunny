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
  "http://video.bunnycdn.com/library/1459/videos/aa3487ad-e904-4644-b9a0-e88c3adbdd28";

const options = {
  method: "PUT",
  headers: {
    AccessKey: "98808fd1-dd48-469c-b69b42f4109e-1c7d-4baf",
    body: stream,
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
