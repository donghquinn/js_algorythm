/**
 * 
 * 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 
 * 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 
 * 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 
 * return 하도록 solution 함수를 완성해보세요.
 * 
 * @param n 인분 수
 * @param k 음료수 개수
 */
const solution = ( n, k ) => {
    const lambPrice = 12000;
    const beveragePrice = 2000;

    const serviceBeverage = Math.floor(n / 10);
    

    return (lambPrice * n) + ((k- serviceBeverage) * beveragePrice);
};

/**
 * 다른 사람 풀이
 * 틸트 문법 ~~ 사용
 */
function solution(n, k) {
    k-=~~(n/10);
    if (k < 0) k = 0;
    return n*12000+k*2000;
}