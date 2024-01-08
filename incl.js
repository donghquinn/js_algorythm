function solution(my_string, target) {
    var answer = 0;
    
    const is_included = my_string.include(target) ? true : false;
    
    return is_included;
}

function solution(num_list) {
    const even = [];
    const odd = [];
    odd.map((item, index)=>  index)
    for (let i = 0; i <= num_list.length - 1; i += 1) {
        if (num_list[i] % 2 === 0) even.push(String(num_list[i]));
        else odd.push(String(num_list[i]));
    }
    
    const answer = Number(even + Number(odd.join()));
    
    return answer;
}