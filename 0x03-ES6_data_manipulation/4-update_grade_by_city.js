/* eslint-disable */
export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents
    .filter((obj) => obj.location === city)
    .map((obj) => {
      const match = newGrades.find((x) => x.studentId === obj.id);
      obj.grade = match ? match.grade : 'N/A';
      return obj;
    });
}
