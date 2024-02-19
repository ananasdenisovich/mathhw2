function powerMethod(matrix, maxIterations = 3, tolerance = 1e-8) {
  let v = [1, 0, 0];
  let iteration;

  for (iteration = 0; iteration < maxIterations; iteration++) {
    let Av = [
      matrix[0][0] * v[0] + matrix[0][1] * v[1] + matrix[0][2] * v[2],
      matrix[1][0] * v[0] + matrix[1][1] * v[1] + matrix[1][2] * v[2],
      matrix[2][0] * v[0] + matrix[2][1] * v[1] + matrix[2][2] * v[2]
    ];

    let maxElement = Math.max(...Av);

    v = Av.map(element => element / maxElement);

    if (Math.abs(maxElement) < tolerance) {
      break;
    }
  }

  let eigenvalue = matrix[0][0] * v[0] + matrix[0][1] * v[1] + matrix[0][2] * v[2];

  return { eigenvalue, eigenvector: v, iterations: iteration + 1 };
}

let matrix = [
  [25, 1, 2],
  [1, 3, 0],
  [2, 0, -4]
];

let result = powerMethod(matrix);
console.log("Eigenvalue:", result.eigenvalue.toFixed(2));
console.log("Eigenvector:", result.eigenvector.map(v => v.toFixed(2)));
console.log("Number of Iterations:", result.iterations);
