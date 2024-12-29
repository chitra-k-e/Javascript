// function non-parameterized without and with return type.

// function apple(){
//     console.log("apple");
// }
// apple();

// function orange(){
//     return "orange";
// }
// console.log(orange());

// function parameterized without and with return type.

// function sum(a, b){
//     console.log("sum=",a+b);
// }
// sum(1,2);

// function add(a, b){
//     return a+b;
// }
// console.log(add(1,2));

//arrow function
// let apple = () =>{
//     console.log("apple");
// }
// apple();
// let orange = () => "orange";  // for single statement we don't need to used return statement, if there is more than one use return statement.
// console.log(orange());

// let sum = (a,b) => a+b;
// console.log("sum =",sum(1,2));

//spread Operators (...) = it performs copy action, 
// let a = [1,2,3,4,5]
// let b = [...a]
// let c = [6,7,8,9,10]
// let d  = [...a,...c]
// console.log(d); 
/*output = [
    1, 2, 3, 4,  5,
    6, 7, 8, 9, 10
  ]*/

// function print(v){
//     console.log(v);
// }
// print(...d); // output = 1

//Rest Operator(...)
// function rest(a,b,...v){
//     console.log(a);
//     console.log(b);
//     console.log(v);
// }
// rest(1, 2, 3, 4, 5,);
// function rest(...v,a,b){
//     console.log(a);
    //     console.log(b);
    //     console.log(v);
    // }
    // rest(1, 2, 3, 4, 5,); // output = error.


// let obj = {
//     name: "ram",
//     age: 20
// }
// let obj1 = {...obj};  // for put [] for array and {} for objects.
// console.log(obj1);

//destructing in array
// let a = [1,2,3,4,5]
// let [x,y,z,...m] = a;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(m);


//destructing in object
// let obj = {
//     name: "ram",
//     age: 20,
//     city: "perundurai",
//     state: "tamilnadu"
// }
// let {name: a,age: b,...v} = obj;
// console.log(a);
// console.log(b);
// console.log(v);

//callback function = a function is given as parameter
// function dog(cat){
//     setTimeout(()=>{
//         console.log("jack the dog");
//         cat();
//     },2000)
// }
// function cat(){
//     console.log("rose the cat");
// }
// dog(cat);

// //callback hell
// function attendance(clb){
//     console.log("present");
//     clb();
// }
// function lunch(clb){
//     console.log("eat lunch");
//     clb();
// }
// function goingtohome(clb){
//     console.log("going to home");
//     clb();
// }

// function startAttendance() {
//     attendance(function startLunch(){
//         lunch(function home(){
//             goingtohome();
//             console.log("Day Completed");
//         });
//     });
// }
// startAttendance();

//we don't need to put function name here before ()=>
// attendance(()=>{
//     lunch(()=>{
//         goingtohome(()=>{
//             console.log("Day Completed");
//         })
//     });
// })


//1.promise chaining
//2.promise.all

//.then() = used to print the return resolved/success value 
//.catch() = used to get the error/rejected value.

//promise chaining

// let attendance = () =>{
//     return new Promise((resolve, reject) =>{
//         let att = true;
//         if(att){
//             resolve("Attendance present");
//         }else{
//             reject("Attendance absent");
//         }
//     })
// }
// let lunch = () =>{
//     return new Promise((resolve, reject) =>{
//         let lun = true;
//         if(lun){
//             resolve("Had lunch");
//         }
//         else{
//             reject("Missed lunch");
//         }
//     })
// }
// let goingtohome = () =>{
//     return new Promise((resolve, reject) =>{
//         let home = true;
//         if(home){
//             resolve("Reached home");
//         }
//         else{
//             reject("Not Reached home");
//         }
//     })
// }
// attendance().then((output)=>
//     {
//         console.log(output); 
//         return lunch()
//     })
//     .then((output)=>
//     {
//         console.log(output); 
//         return goingtohome()
//     })
//     .then((output)=>
//     {
//         console.log(output); 
//         console.log("Day Completed")
//     })
//     .catch((output)=>{console.error(output)
// });

// async function Eod(){
//     try{
//         let attend = await attendance();
//         console.log(attend);
//         let lun = await lunch();
//         console.log(lun);
//         let gohome = await goingtohome();
//         console.log(gohome);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// Eod();

// program defaultly works in synchronous manner
// synchronous = it executes first function after scond one



// let func1 = (func2,name) =>{
//     console.log(`file ${name} is getting processed`);
//     setTimeout(()=>{
//         console.log(`file ${name} got downloaded`);
//         func2();
//     },2000);
// }
// let func2 = () =>{
//     console.log("Download Completed");
// }
// let name1 = "ABC";
// func1(func2,name1);


// let a1 = () =>{
//     return new Promise((resolve, reject) =>{
//         let datas = false;
//         if(datas)
//             resolve("Datas returned");
//         else
//             reject("Datas never returned");
//     })
// }
// a1().then((output)=>{
//     console.log(output);
// }).catch((output)=>{
//     console.error(output)
// })

//promise all

let a1 = () =>{
    return new Promise((resolve, reject) =>{
        let d1 = true;
        if(d1)
            resolve("a1 returned");
        else
            reject("a1 never returned");
    })
}
let a2 = () =>{
    return new Promise((resolve, reject) =>{
        let d = true;
        if(d)
            resolve("a2 returned");
        else
            reject("a2 never returned");
    })
}
let a3 = () =>{
    return new Promise((resolve, reject) =>{
        let d2 = true;
        if(d2)
            resolve("a3 returned");
        else
            reject("a3 never returned");
    })
}

async function dog(){
    try{
        let [dog1,dog2,dog3] = await Promise.all([a1(),a2(),a3()]);
        console.log(dog1);
        console.log(dog2);
        console.log(dog3);
    }
    catch(error){
        console.error(error);
    }
}
dog();