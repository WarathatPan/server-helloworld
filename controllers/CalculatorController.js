const calculate = require('../models/calculator');

const CalculatorPage = (req, res) => {
  if ((req.body.a && req.body.b) || req.body.a === 0 || req.body.b === 0) {
    if (req.body.operator === 'add') {
      const result = calculate.add(req.body.a, req.body.b);
      if (!result.message) {
        res.status(200).json(result);
      } else {
        res.status(400).json(result);
      }
    } else if (req.body.operator === 'minus') {
      const result = calculate.minus(req.body.a, req.body.b);
      if (!result.message) {
        res.status(200).json(result);
      } else {
        res.status(400).json(result);
      }
    } else if (req.body.operator === 'multiple') {
      const result = calculate.multiple(req.body.a, req.body.b);
      if (!result.message) {
        res.status(200).json(result);
      } else {
        res.status(400).json(result);
      }
    } else if (req.body.operator === 'devide') {
      const result = calculate.devide(req.body.a, req.body.b);
      if (!result.message) {
        res.status(200).json(result);
      } else {
        res.status(400).json(result);
      }
    }
  } else if (!req.body.a && req.body.b) {
    res.status(400).json({
      message: 'Input a not found value.',
    });
  } else if (req.body.a && !req.body.b) {
    res.status(400).json({
      message: 'Input b not found value.',
    });
  } else {
    res.status(400).json({
      message: 'Input a and b not found value.',
    });
  }
};

module.exports = CalculatorPage;
