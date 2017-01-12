// TEST DATA
// Keyed by mocha test ID
// Python code for generating test data can be found in the matching jupyter notebook in folder `notebooks/`.

(function () {
  var DATA = {
    'activations.softmax.0': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [0.067194, 0.082071, 0.110784, 0.0608, 0.182652, 0.4965], shape: [6] }
    },
    'activations.softmax.1': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2, -0.03, 0.3, 0, 0.8, -0.3, 1], shape: [2, 6] },
      expected: { data: [0.067194, 0.082071, 0.110784, 0.0608, 0.182652, 0.4965, 0.107768, 0.149902, 0.11105, 0.247147, 0.082268, 0.301865], shape: [2, 6] }
    },
    'activations.softmax.2': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 90], shape: [6] },
      expected: { data: [0.0, 0.0, 0.0, 0.0, 0.0, 1.0], shape: [6] }
    },
    'activations.softplus.0': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [0.693147, 0.798139, 0.974077, 0.644397, 1.313262, 2.126928], shape: [6] }
    },
    'activations.softplus.1': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2, -0.03, 0.3, 0, 0.8, -0.3, 1], shape: [2, 6] },
      expected: { data: [0.693147, 0.798139, 0.974077, 0.644397, 1.313262, 2.126928, 0.67826, 0.854355, 0.693147, 1.171101, 0.554355, 1.313262], shape: [2, 6] }
    },
    'activations.softplus.2': {
      input: { data: [0, 0.2, -0.5, -0.1, 1, 2, -0.03, 2.3, 0, 0.8, -0.3, 1], shape: [2, 2, 3] },
      expected: { data: [0.693147, 0.798139, 0.474077, 0.644397, 1.313262, 2.126928, 0.67826, 2.395545, 0.693147, 1.171101, 0.554355, 1.313262], shape: [2, 2, 3] }
    },
    'activations.softsign.0': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [0.0, 0.166667, 0.333333, -0.090909, 0.5, 0.666667], shape: [6] }
    },
    'activations.softsign.1': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2, -0.03, 0.3, 0, 0.8, -0.3, 1], shape: [2, 6] },
      expected: { data: [0.0, 0.166667, 0.333333, -0.090909, 0.5, 0.666667, -0.029126, 0.230769, 0.0, 0.444444, -0.230769, 0.5], shape: [2, 6] }
    },
    'activations.softsign.2': {
      input: { data: [0, 0.2, -0.5, -0.1, 1, 2, -0.03, 2.3, 0, 0.8, -0.3, 1], shape: [2, 2, 3] },
      expected: { data: [0.0, 0.166667, -0.333333, -0.090909, 0.5, 0.666667, -0.029126, 0.69697, 0.0, 0.444444, -0.230769, 0.5], shape: [2, 2, 3] }
    },
    'activations.relu.0': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [0.0, 0.2, 0.5, 0.0, 1.0, 2.0], shape: [6] }
    },
    'activations.relu.1': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2, -0.03, 0.3, 0, 0.8, -0.3, 1], shape: [2, 6] },
      expected: { data: [0.0, 0.2, 0.5, 0.0, 1.0, 2.0, 0.0, 0.3, 0.0, 0.8, 0.0, 1.0], shape: [2, 6] }
    },
    'activations.relu.2': {
      input: { data: [0, 0.2, -0.5, -0.1, 1, 2, -0.03, 2.3, 0, 0.8, -0.3, 1], shape: [2, 2, 3] },
      expected: { data: [0.0, 0.2, 0.0, 0.0, 1.0, 2.0, 0.0, 2.3, 0.0, 0.8, 0.0, 1.0], shape: [2, 2, 3] }
    },
    'activations.relu.3': {
      input: { data: [0, 0.2, -0.5, -0.1, 1, 2, -0.03, 2.3, 0, 0.8, -0.3, 1], shape: [2, 2, 3] },
      expected: { data: [0.0, 0.2, 0.0, 0.0, 0.5, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5], shape: [2, 2, 3] }
    },
    'activations.relu.4': {
      input: { data: [0, 0.2, -0.5, -0.1, 1, 2, -0.03, 2.3, 0, 0.8, -0.3, 1], shape: [2, 2, 3] },
      expected: { data: [0.0, 0.2, -0.15, -0.03, 1.0, 2.0, -0.009, 2.3, 0.0, 0.8, -0.09, 1.0], shape: [2, 2, 3] }
    },
    'activations.tanh.0': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [0.0, 0.197375, 0.462117, -0.099668, 0.761594, 0.964028], shape: [6] }
    },
    'activations.tanh.1': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2, -0.03, 0.3, 0, 0.8, -0.3, 1], shape: [2, 6] },
      expected: { data: [0.0, 0.197375, 0.462117, -0.099668, 0.761594, 0.964028, -0.029991, 0.291313, 0.0, 0.664037, -0.291313, 0.761594], shape: [2, 6] }
    },
    'activations.tanh.2': {
      input: { data: [0, 0.2, -0.5, -0.1, 1, 2, -0.03, 2.3, 0, 0.8, -0.3, 1], shape: [2, 2, 3] },
      expected: { data: [0.0, 0.197375, -0.462117, -0.099668, 0.761594, 0.964028, -0.029991, 0.980096, 0.0, 0.664037, -0.291313, 0.761594], shape: [2, 2, 3] }
    },
    'activations.sigmoid.0': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [0.5, 0.549834, 0.622459, 0.475021, 0.731059, 0.880797], shape: [6] }
    },
    'activations.sigmoid.1': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2, -0.03, 0.3, 0, 0.8, -0.3, 1], shape: [2, 6] },
      expected: { data: [0.5, 0.549834, 0.622459, 0.475021, 0.731059, 0.880797, 0.492501, 0.574443, 0.5, 0.689974, 0.425557, 0.731059], shape: [2, 6] }
    },
    'activations.sigmoid.2': {
      input: { data: [0, 0.2, -0.5, -0.1, 1, 2, -0.03, 2.3, 0, 0.8, -0.3, 1], shape: [2, 2, 3] },
      expected: { data: [0.5, 0.549834, 0.377541, 0.475021, 0.731059, 0.880797, 0.492501, 0.908877, 0.5, 0.689974, 0.425557, 0.731059], shape: [2, 2, 3] }
    },
    'activations.hardSigmoid.0': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [0.5, 0.54, 0.6, 0.48, 0.7, 0.9], shape: [6] }
    },
    'activations.hardSigmoid.1': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2, -0.03, 0.3, 0, 0.8, -0.3, 1], shape: [2, 6] },
      expected: { data: [0.5, 0.54, 0.6, 0.48, 0.7, 0.9, 0.494, 0.56, 0.5, 0.66, 0.44, 0.7], shape: [2, 6] }
    },
    'activations.hardSigmoid.2': {
      input: { data: [0, 0.2, -0.5, -0.1, 1, 2, -0.03, 2.3, 0, 0.8, -0.3, 1], shape: [2, 2, 3] },
      expected: { data: [0.5, 0.54, 0.4, 0.48, 0.7, 0.9, 0.494, 0.96, 0.5, 0.66, 0.44, 0.7], shape: [2, 2, 3] }
    },
    'activations.linear.0': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] }
    },
    'activations.linear.1': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2, -0.03, 0.3, 0, 0.8, -0.3, 1], shape: [2, 6] },
      expected: { data: [0, 0.2, 0.5, -0.1, 1, 2, -0.03, 0.3, 0, 0.8, -0.3, 1], shape: [2, 6] }
    },
    'activations.linear.2': {
      input: { data: [0, 0.2, -0.5, -0.1, 1, 2, -0.03, 2.3, 0, 0.8, -0.3, 1], shape: [2, 2, 3] },
      expected: { data: [0, 0.2, -0.5, -0.1, 1, 2, -0.03, 2.3, 0, 0.8, -0.3, 1], shape: [2, 2, 3] }
    }
  }

  window.TEST_DATA = Object.assign({}, window.TEST_DATA, DATA)
})()