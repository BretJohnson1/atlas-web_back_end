export default function gaurdrail(mathFunction) {
  const array = [];
  try {
    array.push(mathFunction());
  } catch (err) {
    array.push(err.toString());
  } finally {
    array.push('Gaurdrail was processed');
  }
  return array;
}
