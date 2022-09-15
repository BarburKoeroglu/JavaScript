let student1 = { id: 10, name: "Martin", age: 25, lifestatus: true };
let student2 = { id: 11, name: "Maria", age: 28, lifestatus: true };
const allStudents = [];
allStudents.push(student1, student2);
const updateName = (studentx, newName) => { studentx.name = newName; return studentx; };
updateName(student2, "Anna");
const newFunction = (studentx, newName) => {
    const studenty = studentx;
    studenty.name = newName;
    allStudents.push(studenty);
    return studentx;
};
newFunction(student2, "Klaus");
console.log(allStudents);
