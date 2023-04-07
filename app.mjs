import fs from "fs";

let imgs = fs.readdirSync("images");
let b64Imgs = {};
imgs.forEach(v => {
    b64Imgs[v] = Buffer.from(fs.readFileSync(`images/${v}`)).toString("base64");
})

fs.writeFileSync("out.js", `var b64Avatars = ${JSON.stringify(b64Imgs)}`);