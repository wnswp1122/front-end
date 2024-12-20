function add(a, b) {
  const result = a + b;
  return result;
}

const print = add(100, 200); //매개변수
console.log(print);

function outer() {
  const banana = 50;
  console.log(banana);
  function inner() {
    const banana = 10;
    console.log(banana);
  }
  inner();
}

outer();
// inner(); 스코프때문에 오류

function outer2() {
  const banana = 50;
  console.log(banana);
  function inner2() {
    console.log(banana); //스코프체인으로 banana = 50
  }
  inner2();
}

outer2();
