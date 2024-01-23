/**
 * 
 * 정수 num1과 num2가 매개변수로 주어질 때, 
 * num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.
 * 
 * @param {*} num1 number
 * @param {*} num2 number
 * @returns num1 / num2 * 1000의 정수 부분
 */
const solution = ( num1, num2 ) => Math.trunc( ( num1 / num2 ) * 1000 );