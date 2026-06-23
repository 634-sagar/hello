let data = ["Monitor", "Laptop", "Mic", "Mouse", "Keyboard", "Phone"];
const ol = document.createElement("ol");
ol.type = "i";
ol.start = 10;
ol.style = "font-size:40px; color:red";
for (let i = 0; i < data.length; i++)
{
    const li = document.createElement("li");
    li.textContent = data[i];
    ol.appendChild(li);
    
}
document.querySelector("body").appendChild(ol);