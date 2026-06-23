function a() {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res("hello1");
        }, 2000);
    });
}
 function b() {
    return new Promise((res, rej) =>{
        setTimeout(() => {
rej("hello2")
        }, 1000);
    });
 }
 function c() {
    return new Promise((res, rej) =>{
        setTimeout(() => {
rej("hello3")
        }, 1000);
    });
 }
//  a
//  .then((d) => {
    // console.log(d);
// })
// .catch((e) => {
//     console.log("sorry");
// });

// promise.all([a(), b(), c()])
// .then((d) => {
//     console.log(d);
// })
// .catch((e) => {
//     console.log("sorry");
// });

// promise.allSettled([a(), b(), c()])
// .then((d) => {
//     console.log(d);
// })
// .catch((e) => {
//     console.log("sorry");
// });

// promise.race([a(), b(), c()])
// .then((d) => {
//     console.log(d);
// })
// .catch((e) => {
//     console.log("sorry");
// });

Promise.any([a(), b(), c()])
.then((d) => {
    console.log(d);
})
.catch((e) => {
    console.log("sorry");
});


