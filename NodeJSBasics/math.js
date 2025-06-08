function add1(a,b){
    return a + b;
}
function sub1(a,b){
    return a - b;
}
//if there's a single function
// module.exports = add1;


//if there's multiple function to export
//module.exports = {add1, sub1}; //when you'll export in this way every other manner of exports will be overridden no matter wherever you write in a file



// alternative way
exports.add2 =(a,b)=>a+b;
exports.sub2 =(a,b) => a-b;