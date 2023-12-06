export default function cleanSet(set, startString) {
  let string = '';
  set.forEach((value) => {
    if (value.startsWith(startString) && startString.length > 0) {
      const remaining = value.substring(startString.length);
      string += `${remaining}-`;
    }
  });
  return string.slice(0, -1);
}
