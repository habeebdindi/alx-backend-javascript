export default function iterateThroughObject(reportWithIterator) {
  const pipeSeparated = reportWithIterator.join(' | ');
  return pipeSeparated;
}
