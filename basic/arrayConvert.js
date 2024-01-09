/**
 * 
 * 정수 배열 arr가 주어집니다. 
 * arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 
 * 50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.
 * 
 * @param {*} arr : Array<number> - 정수 수열
 * @returns 50보다 크거나 같은 짝수는 2로 나누고, 50 이하의 홀수는 2를 곱한 정수수열
 */
const solution = ( arr ) =>
{
    return arr.map( ( item ) => {
        if ( item >= 50 && item % 2 === 0 ) return item / 2;
        if ( item < 50 && item % 2 !== 0 ) return item * 2;
        return item;
    })
};

// 다른 분 코드
const solution2=a=>a.map(v=>v>=50&&v%2==0?v/2:v<50&&v%2==1?v*2:v)