export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesObj) {
      return Object.keys(employeesObj).length;
    },
  };
}
