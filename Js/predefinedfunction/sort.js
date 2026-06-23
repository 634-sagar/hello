const students = [
    {name: "Aarav", branch: "CS", marks: 92},
        {name: "Bikash", branch: "IT", marks: 95},
    {name: "Hari", branch: "CS", marks: 78},
    {name: "Dipesh", branch: "IT", marks: 92},
    {name: "Anita", branch: "CS", marks: 92},
    {name: "Bina", branch: "EE", marks: 88},

];
students.sort((a, b) => {
// asc
  
    if (a.branch > b.branch) return -1;
    if (a.branch < b.branch) return 1;
// desc
    if (a.branch < b.branch) return 1;
    if (a.branch > b.branch) return -1;
// asc
    if (a.branch > b.branch) return 1;
    if (a.branch < b.branch) return -1;
});
const data = students.map((student) => {
    return `${student.branch} ${student.marks} ${student.name}`;
});
console.log(data);
    