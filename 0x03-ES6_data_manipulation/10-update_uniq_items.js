export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      try {
        map.set(key, 100);
      } catch (e) {
        throw new Error('Cannot process');
      }
    }
  });
  return map;
}
