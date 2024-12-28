// let a= "hello";
// switch(a){
//     case "hi":
//         console.log("hi");
        
//     case "hello":
//         console.log("hello");
//         break;
// }
//can array can be given to the choice in switch? It can be done if the array elements is converted into a single value

// if(true)
//     console.log("hello");
//     console.log("hii");
// else
//     console.log("welcome");   //output : error.

//31/04/2024 - invalid
//29/02/2001 - invalid

let date = "28/02/2023";
let d = date.split("/");
d[1] = parseInt(d[1], 10);
let flag = true;

if (d[1] <= 12) {
    if (d[1] >= 1 && d[1] <= 7) {
        if (d[1] == 2 && ((d[2] % 4 == 0 && d[2] % 100 != 0) || d[2] % 400 == 0)) {
            if (!(d[0] >= 1 && d[0] <= 29)) {
                flag = false;
            }
        } else if (d[1] == 2) {
            if (!(d[0] >= 1 && d[0] <= 28)) {
                flag = false;
            }
        } else if (d[1] % 2 == 0) {
            if (!(d[0] >= 1 && d[0] <= 30)) {
                flag = false;
            }
        } else {
            if (!(d[0] >= 1 && d[0] <= 31)) {
                flag = false;
            }
        }
    } else {
        if (d[1] % 2 == 0) {
            if (!(d[0] >= 1 && d[0] <= 31)) {
                flag = false;
            }
        } else {
            if (!(d[0] >= 1 && d[0] <= 30)) {
                flag = false;
            }
        }
    }
} else {
    flag = false;
}

if (flag) {
    console.log("Valid Date");
} else {
    console.log("Invalid Date");
}
