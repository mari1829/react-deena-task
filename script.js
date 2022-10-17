
// promise function

function add(){
    return new Promise((resolve, reject) => {
        console.log("add");
       resolve()
    })
}

add()
.then(function (){
    console.log("sucess");
})

.catch(function(){
    console.log("error");
})

function sub(){
    return new Promise((resolve, reject) => {
        console.log("sub");
       reject()
    })
}


sub()
.then(function (){
    console.log("sucess");
})

.catch(function(){
    console.log("error");
})

Promise.all([sub,add])
.then((res)=>{
    console.log("sucess",res);
})

.catch((err)=>{
    console.log("error",err);

})

var a;
console.log(a);

// console.log(b);
// let b;

let arr=[1,2,3,4,5]
console.log(arr.map(myfun));

function myfun(ret){
    return ret > 2
}

