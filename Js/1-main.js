// console.log(x);
// var x= 10;
// console.log(x);

// {
//     var a = 60;
// }
//     console.log(a + x);
// console.log(z);
//  default scope = let
// z = 10;
// console.log(z);

// console.log(a);
// {
//     a = 10;
//     {
//         const a = 20;
//         console.log(a++);
//         console.log(++a);
//     }
// } 
// console.log(a);
// console.log(typeof a);

// {
//     let d = [1, 2, 3, 4, 5, 6];
//     console.log(d);
//     console.log(typeof d);
// }

// let a = 10;
// a = 50;
// console.log(a);

// console.log(4 == "4");
// console.log(4 === "4");

// let sum = 1 + 1 + "1" + 1;
// console.log(sum);
// console.log(10.5 + "h");
// let c = 0;
// console.log(Boolean(c));

// & - bitwise and |
// && - and ||
// console.log(3 & 1);

{
    // if-else conditions
    // let age = 14;
    // if (age <= 10) {
    //     console.log("chhota bacha");
    // } else if (age >= 11 && age < 14) {
    //     console.log("First");
    // } else if ((age >= 11 || age > 50)) {
    //     console.log("second");
    // }
    // else {
    //     console.log("ok");
    }

    {
        // let 0 = "+";
        // let a = 10;
        // let b = 20;
        // switch (o) {
        //     case o == "+":
        //         console.log(a+b);
        //         break;
        //         default:
        //             console.log("Invalid Operator");
        //             break;
        // }
    }
    {
//         for (let i = 0; i <=  5; i++) {
// if ( i != 4) {
//     console.log(i);
// break;
// // }
// console.log(i);
//         }
    }
    {
        // let i = 0;
        // while (i <= 5) {
        //     console.log("first,", i);
        //     i = i + 0.1;
        // }
    }
    {
        // let i = 0; 
        // do{
        //     console.log(i);
        //     i++;
        // } while (i < 5);
    }
    {
    //     let a = [1, 2, 3, 4, 5];
    //     a.forEach((b) =>
    //     {
    //         console.log(b);
    //     });
    }
    { 
        // console.log(4 < 9 ? "True" : "False");
    }
    {
        // function totalSum(e,h,m) {
            // para
        //     return e + h + m;
        // }
        // totalSum(10,20,30); //args
    }
     {
    //     let str = "hello"; //HELLO 
    //     console.log(str.toUpperCase());
    //     console.log(new Date(). getFullYear());
    }

{
    // let a = [1, 2, 3, 4, 5, 6];
    // for (i = 0, <a.length; i++) {
    //     console.log(a.[i]);
    } 

    
    {
        //Rest Operator
// function add(...a) {
//     let sum = 0;
//     for(let i of a){
//         sum+=i;
//     }
//     return sum;
// }

// console.log(add(1,2,3,4,5));
// console.log(add(1,2,3));
// console.log(add(1,2));


// console.log(Math.random()); //only returns from 0 -1
// console.log(Math.floor(Math.random() * 10)); // to get an integer number

// let a = [1,2,3,4,5];
// console.log(a.reverse());
// console.log(a.slice(1,4));
// console.log(a.splice(1,4));

// Array length
// let arr = new Array(1,2,3,4,5);
// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
// }

// let data = {title: "Book Name", price: 100};
// console.log(data.title);



//FILTER AND MAP

// let num = [1,2,3,4,5,6,7,8];
// let even = num.filter((b)=>b%2==0); //In Array
// console.log(even);
// num.filter(((b)=>b%2==0)).map((c)=>console.log(c));

// let students = [
//     {name:"Ram", course: "BTech"},
//     {name:"Sita", course: "BCA"},
//     {name:"Hari", course: "BscCSIT"},
//     {name:"Gita", course: "BCA"},
//     {name:"Shyam", course: "BCA"},
//     {name:"Shyam", course: "BscCSIT"},
//     {name:"Shyam", course: "BTech"},
//     {name:"Shyam", course: "BscCSIT"},
//     {name:"Shyam", course: "BCA"},
// ];

// students.filter((a)=>a.course === "BCA" || a.course === "BTech").map((c)=>console.log(c));

// //Course Count
// let courseCount= {};
// students.forEach((c)=>(courseCount[c.course] = (courseCount[c.course] || 0) + 1));
// console.log(courseCount);

//SORTING

// students.sort((a, b) => {
//     // First compare courses
//     if (a.course < b.course) return -1;
//     if (a.course > b.course) return 1;

//     // If courses are the same, compare names
//     if (a.name < b.name) return -1;
//     if (a.name > b.name) return 1;

//     // Both course and name are the same
//     return 0;
// });

// console.log(students);
    }
{
    // function hello1(){
    //     const data = "Welcome";
    //     function hello2(){
    //         const name = "Ram";
    //         console.log(data + name);
    //     }
    //     hello2();
    // }
    // hello1();
}
// function data1(){
//     var a = 10;
//     return a;
// }
// c = data1();
// console.log(c);
// {
//     var b = 10;
// }
{
    // function sayHello(){
    //     console.log("hello 1");
    // }
    // function greet(a){
    //     console.log("hello 2");
    //     a();
    // }
    // greet(sayHello);
}
{
//     let a = 1 = [] + 0;
//     console.log(a);
//     console.log(typeof a);
//     let b = {} + [];
//     console.log(b);
//     console.log(typeof b);
//     console.log(Boolean([]) == false);
//     let c = [] == false;
//     console.log(c);
//     let d = [] + false;
//     console.log(d);
//     let e = null + true;
//     console.log(e);
//     console.log(d-e);
//     console.log("10" - 5);
//     console.log("10" + 5);
//     console.log("10" * 5);
//     console.log([] + []);
//     console.log(undefined == undefined);
//     console.log(undefined === undefined);
//     console.log(NaN = NaN);
}
