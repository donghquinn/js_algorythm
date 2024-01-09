/**
 * 
 * 정수가 담긴 리스트 num_list가 주어질 때, 
 * 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.
 * 
 * @param {*} num_list : Array<number>
 * @returns 1 or 0
 */
const solution = ( num_list ) => num_list.reduce( ( a, b ) => a * b, 1 ) < num_list.reduce( ( a, b ) => ( a + b ), 0 ) ** 2 ? 1 : 0;

/**
 * 다른 분 코드. reduce로 합을 구하고 Math.pow(합, 2) 로 제곱
 */
function solution(num_list) {
    return Math.pow(num_list.reduce((a,b) => a+b), 2) > num_list.reduce((a,b) => a*b) ? 1 : 0;
}