/**
 * 
 * 문자열 my_string과 정수 n이 매개변수로 주어질 때, 
 * my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.
 * 
 * @param {*} my_string : string
 * @param {*} n : number
 * @returns my_string의 앞의 n개 글자 
 */
const solution = ( my_string, n ) => my_string.slice( 0, n );