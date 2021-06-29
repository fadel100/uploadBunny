const fetch = require("node-fetch");

const url =
  "http://video.bunnycdn.com/library/1459/videos/4f236e44-eab3-4a66-a9c5-3d8a65330ed8";
const options = {
  method: "PUT",
  headers: {
    "Content-Type": "application/*+json",
    AccessKey: "98808fd1-dd48-469c-b69b42f4109e-1c7d-4baf",
    body: '"data:video/mp4;name=%27How%20To%20Ensure%20Any%20Type%20Of%20Ad%20Works%20and%20Spy%20On%20Your%20Competition.mp4%27"',
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
