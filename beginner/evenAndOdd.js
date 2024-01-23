/**
 * 짝수 홀수 개수
 * 
 * 정수가 담긴 리스트 num_list가 주어질 때, 
 * num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 * 
 * @param {Array<number>} num_list 정수 리스트
 */
const solution = ( num_list ) => {
    let odd = 0;
    let even = 0;

    num_list.filter( ( item ) =>
    {
        if ( item % 2 === 0 ) even += 1;
        if ( item % 2 !== 0 ) odd += 1;
    } );
    
    return [even, odd]
};

/**
 * 다른 사람 풀이
 * 
 * 배열 분해 하는 방법
 */
function solution2(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
}