export default function getStudentIdsSum(arr) {
  const sum = arr.map((obj) => obj.id).reduce((prev, next) => prev + next, 0);
  return sum;
}
