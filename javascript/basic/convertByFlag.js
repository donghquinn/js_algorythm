/**
 * 
 * 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, 
 * flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.
 * 
 * @param {*} a : number - 정수
 * @param {*} b : number - 정수
 * @param {*} flag : boolean
 * @returns flag가 true일 때 a+b, false일 때 a - b
 */
const solution = ( a, b, flag ) => flag ? a + b : a - b;