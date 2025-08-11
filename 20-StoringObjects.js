function storingObjects(input) {
 let students = [];
    for(let i = 0; i < input.length; i++){
        let info = input[i].split(' -> ');
        let name = info[0];
        let age = Number(info[1]);
        let grade = Number(info[2]);

        let studentInfo = {name: name,age: age,grade: grade.toFixed(2)};
        students.push(studentInfo);
    }

    for(let student of students){
        console.log(`Name: ${student.name}`);
        console.log(`Age: ${student.age}`);
        console.log(`Grade: ${student.grade}`);
    }
}