//for 2x2
let iterations = 0;
function powerMethod(matrix, maxIterations = 1000, tolerance = 1e-8) {

  let v = [1, 0];

  for (let iteration = 0; iteration < maxIterations; iteration++) {

    let Av = [
      matrix[0][0] * v[0] + matrix[0][1] * v[1],
      matrix[1][0] * v[0] + matrix[1][1] * v[1]
    ];

    let maxElement = Math.max(...Av);

    v = Av.map(element => element / maxElement);

    if (Math.abs(maxElement) < tolerance) {
      break;
    } else {
      iterations++;
    }

  }

  let eigenvalue = matrix[0][0] * v[0] + matrix[0][1] * v[1];

  return { eigenvalue, eigenvector: v , iterations};
}

let matrix = [
  [4, 1],
  [1, 3]
];

let result = powerMethod(matrix);
console.log("Eigenvalue:", result.eigenvalue.toFixed(2));
console.log("Eigenvector:", result.eigenvector.map(v => v.toFixed(2)));
console.log("Number of iterations", iterations)
