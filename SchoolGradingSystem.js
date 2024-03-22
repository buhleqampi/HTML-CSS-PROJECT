// // 19 March -Conditional Statements & Arrays, Objects
const gradeCate = [
    {category:"A",interval:"80-100" },
    {category:"B",interval:"60-79"},
    {category:"C",interval:"50-59"},
    {category:"F",interval:"0-49"}
]

let student1={
    name:"john",
    surname:"Doe",
    mark:34,
    gradeCate:"unknown"
}

let markPoint = student1.mark;
if (markPoint >= 80 && markPoint <= 100) {
    student1.gradeCate = "A";
} else if (markPoint >= 60 && markPoint <= 79) {
    student1.gradeCate = "B";
} else if (markPoint >= 50 && markPoint <= 59) {
    student1.gradeCate = "C";
} else if (markPoint >= 0 && markPoint <= 49) {
    student1.gradeCate = "F";
}

// console.log("Your grade is",student1.gradeCate);

// 20 March - Loops
// for loop
for(j=0;j<=10 ;j++) {
for(i=0; i<10; i++){
    // console.log(i)
}
}
const Arr = [1,2,3,4,5,6,7,8,9,10]

for(n = 1; n<= Arr.length;n++){

    // console.log(n)
}

// Class Challenge
const myArr = []
const Arr3 = [26,1,2,3,4,5,6,7,8,9,10,11,12]
    for (i=0; i < Arr3.length;i++){
        myArr[i] = Arr3 [i]*2;
        // console.log(myArr)
    }
// Push method
const myArr1 = []
const Arr4 = [26,1,2,3,4,5,6,7,8,9,10,11,12]
    for(i=0; i<Arr4.length; i++){
        myArr1.push(Arr4[i]*2)
}
// console.log(myArr1)

// Functions
function noneVoid(age){
    const result =age + 1;
    return result
}

function fvoid(age){
    let result= age + 1;
}
// console.log(noneVoid(5))
// console.log(fvoid(5))

function strReverse(str) { 
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) { 
        reversed += str[i]; 
    } 
   return reversed
}  

// console.log (strReverse("Buhle"))

for (let i = 1; i <= 100 ; i++){
    let row = "";
    for( let j = 1; j <= i; j++){
        row += "*";
    }
    console.log(row)
}

for (let i = 100; i >= 1; i--) {
    let row1 = "";
    for (let j = 1; j <= i; j++) {
        row1 += "*";
    }
    console.log(row1);
}

