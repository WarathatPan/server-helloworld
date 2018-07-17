function add(a, b) {
  if ((a && b) || a === 0 || b === 0) {
    try {
      const value1 = parseInt(a, 10);
      const value2 = parseInt(b, 10);
      if (!Number.isNaN(value1) && !Number.isNaN(value2)) {
        const calculate = {
          a: value1,
          b: value2,
          total: value1 + value2,
        };
        throw calculate;
      } else if (Number.isNaN(value1) && !Number.isNaN(value2)) {
        const error = {
          message: 'Incorrect input a value.',
        };
        throw error;
      } else if (!Number.isNaN(value1) && Number.isNaN(value2)) {
        const error = {
          message: 'Incorrect input b value.',
        };
        throw error;
      } else {
        const error = {
          message: 'Incorrect input a and b value.',
        };
        throw error;
      }
    } catch (err) {
      console.error(`Error function add: ${err.message}`);
      return err;
    }
  }
}

function minus(a, b) {
  if ((a && b) || a === 0 || b === 0) {
    try {
      const value1 = parseInt(a, 10);
      const value2 = parseInt(b, 10);
      if (!Number.isNaN(value1) && !Number.isNaN(value2)) {
        const calculate = {
          a: value1,
          b: value2,
          total: value1 - value2,
        };
        throw calculate;
      } else if (Number.isNaN(value1) && !Number.isNaN(value2)) {
        const error = {
          message: 'Incorrect input a value.',
        };
        throw error;
      } else if (!Number.isNaN(value1) && Number.isNaN(value2)) {
        const error = {
          message: 'Incorrect input b value.',
        };
        throw error;
      } else {
        const error = {
          message: 'Incorrect input a and b value.',
        };
        throw error;
      }
    } catch (err) {
      console.error(`Error function minus: ${err.message}`);
      return err;
    }
  }
}

function multiple(a, b) {
  if ((a && b) || a === 0 || b === 0) {
    try {
      const value1 = parseInt(a, 10);
      const value2 = parseInt(b, 10);
      if (!Number.isNaN(value1) && !Number.isNaN(value2)) {
        const calculate = {
          a: value1,
          b: value2,
          total: value1 * value2,
        };
        throw calculate;
      } else if (Number.isNaN(value1) && !Number.isNaN(value2)) {
        const error = {
          message: 'Incorrect input a value.',
        };
        throw error;
      } else if (!Number.isNaN(value1) && Number.isNaN(value2)) {
        const error = {
          message: 'Incorrect input b value.',
        };
        throw error;
      } else {
        const error = {
          message: 'Incorrect input a and b value.',
        };
        throw error;
      }
    } catch (err) {
      console.error(`Error function multiple: ${err.message}`);
      return err;
    }
  }
}

function devide(a, b) {
  if ((a && b) || a === 0 || b === 0) {
    try {
      const value1 = parseInt(a, 10);
      const value2 = parseInt(b, 10);
      if (!Number.isNaN(value1) && !Number.isNaN(value2) && value2 !== 0) {
        const calculate = {
          a: value1,
          b: value2,
          total: value1 / value2,
        };
        throw calculate;
      } else if (Number.isNaN(value1) && !Number.isNaN(value2) && value2 !== 0) {
        const error = {
          message: 'Incorrect input a value.',
        };
        throw error;
      } else if ((!Number.isNaN(value1) && Number.isNaN(value2))
                || (!Number.isNaN(value1) && !Number.isNaN(value2) && value2 === 0)) {
        const error = {
          message: 'Incorrect input b value.',
        };
        throw error;
      } else {
        const error = {
          message: 'Incorrect input a and b value.',
        };
        throw error;
      }
    } catch (err) {
      console.error(`Error function devide: ${err.message}`);
      return err;
    }
  }
}

module.exports = {
  add,
  minus,
  multiple,
  devide,
};
