const { body } = require('express-validator');

router.post(
  '/users',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email must be valid'),
    body('age').isInt({ min: 0 }).withMessage('Age must be a non-negative integer')
  ],
  userController.createUser
);
