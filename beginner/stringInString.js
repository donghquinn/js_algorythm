/**
 * 문자열 안에 문자열
 * 
 * 문자열 str1, str2가 매개변수로 주어집니다. 
 * str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
 * 
 * @param {string} str1 
 * @param {string} str2 
 */
const solution = ( str1, str2 ) =>
{
    if ( str1.includes( str2 ) ) return 1
    return 2;
};


/**
 * 다른 사람 풀이 - 1
 * 
 * 3항 연산자... 이걸 깜빡했네
 * 
 * @param {*} str1 
 * @param {*} str2 
 * @returns 
 */
function solution2(str1, str2) {
    return str1.includes(str2) ? 1 : 2;
}

/**
 * 다른 사람 풀이 - 2
 * 
 * str2를 기준으로 split 해서 나오는 숫자를 이용
 * 
 * @param {*} str1 
 * @param {*} str2 
 * @returns 
 */
function solution3(str1, str2) {
    return str1.split(str2).length > 1 ? 1 : 2
}
