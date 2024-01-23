/**
 * 배열의 평균값
 * 
 * 정수 배열 numbers가 매개변수로 주어집니다. 
 * numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
 * 
 * num: Array<number>
 */
const solution = ( num ) => (num[0] + num[num.length - 1]) / 2


/**
 * 다른 분 풀이
 * 
 * reduce 사용법
 * 
 * 초기값: 0 
 * 첫 번째 반복: 0(누적값) + 1(현재값) = 1 
 * 두 번째 반복: 1(누적값) + 2(현재값) = 3 
 * 세 번째 반복: 3(누적값) + 3(현재값) = 6 
 * 네 번째 반복: 6(누적값) + 4(현재값) = 10 
 * 최종 반환값: 10
 * 
 */
function solution2(numbers) {
    var answer = numbers.reduce((a,b) => a+b, 0) / numbers.length;
    return answer;
}