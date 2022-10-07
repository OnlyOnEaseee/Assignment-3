function studentInformation(studentName, projectStatus,examPoints, finalGrade) {
    alert(`
    Student name: ${studentName},
    Status of project work: ${projectStatus},
    Exam points: ${examPoints} / 100,
    Final grade: ${finalGrade}
    `); 
};

function resultsGenerator() {
    const studentName = prompt('What is your name?');
let projectStatus;

if(studentName === '' || typeof studentName !== 'string') {
    alert('Falty Name!');
} else {
    const completedCourse = confirm('Have you completed the course?');

    if(!completedCourse) {
        projectStatus = 'Not Completed';
        alert('Course failed!');
    } else {
        projectStatus = 'Completed';

        const examPoints = parseInt(prompt('How many points did you get (0-100)?'));

        

        if(examPoints < 0 && examPoints > 100 && typeof examPoints !== 'number') {
            alert('Please give a number between 0 and 100!');
        } else {

        if(examPoints < 40) {
            studentInformation(studentName, projectStatus, examPoints, 0);
        } else if(examPoints < 50) {
            studentInformation(studentName, projectStatus, examPoints, 1);
        } else if(examPoints < 60) {
            studentInformation(studentName, projectStatus, examPoints, 2);
        } else if(examPoints < 70) {
            studentInformation(studentName, projectStatus, examPoints, 3);
        } else if(examPoints < 85) {
            studentInformation(studentName, projectStatus, examPoints, 4);
        } else if(examPoints >= 85) {
            studentInformation(studentName, projectStatus, examPoints, 5);
        }

        };
    };
};
};

resultsGenerator();


