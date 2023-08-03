let counter = document.querySelectorAll('.counter');
console.log(counter);
let arr = Array.from(counter)
console.log(arr);
arr.map((function(item){
    console.log(item);
    let count =0;
    function counterName(){
        count++;
        item.innerHTML= (count+' %');
    if(item.dataset.number==count){
        clearInterval(stop)
    }
    }
    let stop = setInterval(counterName,item.dataset.speed/item.dataset.number)
}))

// let count = 0;
// function counterName(){
//     count++;
//     counter.innerHTML=(count + ' %');
//     if(counter.dataset.number==count){
//         clearInterval(stop)
//     }
// }
// let stop = setInterval(counterName,10)