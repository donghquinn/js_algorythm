/**
 * 
 * 양의 정수 n이 매개변수로 주어질 때, 
 * n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 
 * n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 
 * solution 함수를 작성해 주세요.
 * 
 * @param {*} n : number - 양의 정수
 * @returns 홀수일 때는 n 이하의 홀수 전체 함, 짝수일 때는 n 이하의 짝수 제곱의 합
 */
const solution = ( n ) => {
    let answer = 0;

    if ( n % 2 === 0 ) {
        for ( let i = 1; i <= n; i += 1 ){
            if ( i % 2 === 0 ) answer += i** 2;
        }

        return answer;
    } else {
        for ( let i = 1; i <= n; i += 1 ){
            if ( i % 2 !== 0 ) answer += i;
        }

        return answer;
    }
};

// 다른 분 코드. 거듭제곱 함수 사용 | 등차수열 공식
const solution2 = ( n ) => {
    if ( n % 2 === 1 )
      // 자연수 거듭 제곱의 합 공식
      return (n+1)/2*((n + 1)/2) ;
    else
      // 등차수열 공식
      return  n*(n+1)*(n+2)/6;
}