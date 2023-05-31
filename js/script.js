// array of student names and which courses they are taking
var students = ['John', 'FSF', 'Jamil', 'FSF', 'Roman', 'FSF']



// for (var index = 0; index < students.length; index += 2) {
//     console.log('Name:', students[index]);
//     console.log('Course:', students[index + 1]);
// }

function printStudentInfo(studentName, studentCourse) {
    console.log('Welcome to the class!');
    console.log('Name:', studentName);
    console.log('Course', studentCourse);
    // console.log('Course:', students[index + 1]);
    console.log('Please utilise the office hours for help!');
}

printStudentInfo(students[4], students[5]);