let s1 = {
    dep: 'cse',
    mark: 50
}
let s2 = {
    dep: 'cse',
    mark: 50
}
s1 = JSON.stringify(s1);
s2 = JSON.stringify(s2);
//console.log(s1);
console.log(s1 === s2);