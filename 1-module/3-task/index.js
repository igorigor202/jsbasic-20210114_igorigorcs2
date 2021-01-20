function ucFirst(str) {
  if (!str || str === 'В') return str;
  return str[0].toUpperCase() + str.slice(1);
}
