export default function cleanSet(set, startString) {
  let string = '';
  set.forEach((value) => {
    if (value.startsWith(startString) && startString.length > 1) {
      const remaining = value.substring(startString.length);
      string += `${remaining}-`;
    }
  });
  return string.slice(0, -1);
}
