const students = [
    {
        id: 1,
        name: 'Rakib'
    },
    {
        id: 2,
        name: 'Rupom'
    },
    {
        id: 3,
        name: 'Shawn'
    },
    {
        id: 4,
        name: 'Mendis'
    }
];

// creating an array of only names of the students

// with filter that uses condition

let names2 = students.filter(student => {
    if (student.id < 3) {
        return student.name;
    }
});
console.log(names2);

// with array map
let names = students.map(student => student.name);
// console.log(names);

// trivial method
let studentsName = [];
for (let i = 0; i < students.length; i++) {
    let name = students[i].name;
    studentsName.push(name);
}

// console.log(studentsName);