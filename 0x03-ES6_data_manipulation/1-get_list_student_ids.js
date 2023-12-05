export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const idArray = arr.map((obj) => obj.id);
  return idArray;
}
