

const router = require('express').Router();

router.use('/users', require('./usersRouter'));

router.use('/termsAndCondition', require('./termsAndConditionRouter'));

router.use('/version', require('./versionRouter'));

router.use('/email', require('./sendEmail'));

router.use('/', require('./authRouter'));

module.exports = router;
