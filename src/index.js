module.exports = function reverse (n) {{
  let result = '';
  let a = Math.abs(n);
  let b = a.toString();
  for (let i = b.length - 1; i >= 0; i--)
  result = +`${result}${b[i]}`;
  return result;
}
}