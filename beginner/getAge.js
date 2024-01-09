/**
 * 
 * 머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 
 * 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.
 * 
 * @param {*} age number
 * @returns 출생년도
 */
const solution = ( age ) => 2022 - age + 1;

// 다른 사람 문제 풀이.
function solution2(age) {
    return new Date().getFullYear() - age + 1;
}