const colorName = document.getElementById("colorName");
colorName.addEventListener("input", (e) => {
    // console.log(e.target.value);
    document.body.style.backgroundColor = e.target.value;
})
const btn = document.getElementById("myform");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    console.log(name, password);
});