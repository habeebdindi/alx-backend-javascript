export default function cleanSet(set, startString) {
  const result = [];
  set.forEach((value) => {
    if (startString && value.startsWith(startString)) {
      // const remaining = value.substring(startString.length);
      const remaining = value.split(startString)[1];
      result.push(remaining);
    }
  });
  return result.join('-');
}
