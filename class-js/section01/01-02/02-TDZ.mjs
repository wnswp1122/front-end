//1. 옛날자바스크립트 호이스팅 문제 => 요즘자바스크립트 + TDZ로 해결
console.log(X);
const X = 1;

console.log(Y);
let Y = 10;

//2. 옛날자바스크립트 중복선언 문제 = > 요즘자바스크립트로 해결
function fn() {
  console.log("fn 실행");
}
function fn() {
  console.log("fn 중복");
}
fn();

//2-1)함수를 만드는 3가지 방법 => 함수선언식(옛날자바스크립트) - 중복선언 가능
function fn() {}
function fn() {}
//2-2)함수를 만드는 3가지 방법 => 함수표현식(요즘자바스크립트) - 중복선언 불가능
// const fn2 = function () {};
// const fn2 = function () {};
// //2-3)함수를 만드는 3가지 방법 => 화살표함수(요즘자바스크립트) - 중복선언 불가능
// const fn3 = () => {};
// const fn3 = () => {};
