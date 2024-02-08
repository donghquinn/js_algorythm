/**
 * 
 * 정수로 이루어진 리스트 num_list가 주어집니다. 
 * num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 * 
 * NOTE
 * For 문을 돌릴 때 인덱스 번호 i와 i+1로 해야 된다.
 * 
 * @param {*} num_list 
 * @returns 
 */
const solution = ( num_list ) => {
    var answer = num_list;
   
    for (let n = 0; n <= num_list.length - 1; n += 1) {     
        for ( let j = n+1; j <= num_list.length - 1; j += 1 ) {     
            if ( n === j ) continue;

            if (num_list[n] > num_list[j]) {
                const temp = num_list[n];

                answer[n] = num_list[j];
                answer[j] = temp;
            }
        }
    }

    const resultAnswer = answer.slice(0,5);

    return resultAnswer;
};

/**
 * 다른 사람 풀이
 * 
 * @param {*} num_list 
 * @returns 
 */
function solution(num_list) {
    return num_list.sort((a, b) => a - b).slice(0, 5);
}