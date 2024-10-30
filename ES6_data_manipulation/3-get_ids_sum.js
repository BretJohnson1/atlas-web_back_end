export default function getStudentIdsSum(students) {
  if (Object.getPrototypeOf(students) === Array.prototype) {
    const ids = students.map((items) => items.id);
    const reducer = (sum, currentValue) => sum + currentValue;
    return ids.reduce(reducer, 0);
  }
  return [];
}
