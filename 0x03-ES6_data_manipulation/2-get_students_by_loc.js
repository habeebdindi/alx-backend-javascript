export default function getStudentsByLocation(arrOfStudents, city) {
  const specificCity = arrOfStudents.filter((obj) => obj.location === city);
  return specificCity;
}
