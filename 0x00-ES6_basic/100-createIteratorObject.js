export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const iteratorObj = Object.values(employees).flatMap((values) => values);
  return iteratorObj;
}
