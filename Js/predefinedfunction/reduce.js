const tasks = [
    {id: 1, title: "JS", completed: false},
        {id: 2, title: "React", completed: true},
    {id: 3, title: "Project", completed: false},
    {id: 4, title: "App", completed: false},

];
const summary = tasks.reduce(
    (acc, task) => {
        acc.total++;
        if (task.completed) {
            acc.completed++;
        } else {
            acc.pending++;
        }
        return acc;
    },
    {total: 0, completed: 0, pending: 0},
);
console.log(summary);

