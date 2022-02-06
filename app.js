let win = true;

function winmin(win) {
  if (win) {
    console.log("hello world");
    win = false;
    if (win === false) {
      console.log("inner hello world");
      win = true;
    }
  }
}
winmin(win);
console.log(win);
console.log("Hello World");
