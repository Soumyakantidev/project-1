let a = (b) => {
  console.log("Please call the function b");
  b();
};
let second = () => {
  console.log(`inside function b`);
};
a(second);
