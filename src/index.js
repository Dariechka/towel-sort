module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix == undefined) return [];
  let j = 0;
  for (let i = 0; i < matrix.length; i += 1){
    if (j === 0) {
      while (matrix[i][j] !== undefined){
        result.push(matrix[i][j]);
        j += 1;
      }
    } else {
      j = matrix[i].length - 1;
      while (matrix[i][j] !== undefined){
        result.push(matrix[i][j]);
        j -= 1;
      }
      j = 0;
    }
  }
  return result;
}
