interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1: Student = {
    firstName: "Habeeb",
    lastName: "Dindi",
    age: 59,
    location: "Earth",
};

const student2: Student = {
    firstName: "Michael",
    lastName: "Dell",
    age: 69,
    location: "San Francisco",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const headers = table.createTHead();
const headerRow = headers.insertRow();
const header1 = headerRow.insertCell();
const header2 = headerRow.insertCell();

header1.textContent = 'First Name';
header2.textContent = 'Location';

const tbody = table.createTBody();
studentsList.map(student => {
    const row = tbody.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.firstName;
});
