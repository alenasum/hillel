const students = [{
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
];


const calculateStudentAverageMark = (student) => {
    let count = 0;

    for (let i = 0; i < student.marks.length; i++) {
        count += student.marks[i];
    }

    const result = count / student.marks.length;

    return result;
}

const calculateGroupAverageMark = (allStudents) => {
    let count = 0;

    for (let i = 0; i < allStudents.length; i++) {
        count += calculateStudentAverageMark(allStudents[i]);
    }

    const result = count / allStudents.length;

    return result;
}

const resultStudentAverageMark = calculateStudentAverageMark(students[1]);
const resultGroupAverageMark = calculateGroupAverageMark(students);

// По всем студентам считает не совсем так, как надо, я знаю)) Не успела нормально сделать