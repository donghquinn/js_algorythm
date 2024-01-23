/**
 * 
 * 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
 * 
 * @param {*} n 
 * @returns 
 */
const solution = ( n ) => {
    const numberList = Array(n).fill(0);

    let sum = 0;

    numberList.filter( ( num, index ) => {
        if (( index + 1) % 2 === 0 ) sum += index + 1;
    } )
    
    return sum;
};

// 다른 사람의 풀이: 수열 공식 이용
const solution2 = ( n ) =>
{
    let half = Math.floor(n/2);
    return half*(half+1);
}