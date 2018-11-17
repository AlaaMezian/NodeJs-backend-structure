const router = require('express').Router();
const async = require('async');
const email = require('../../utils/email');
const config = require('../../config/appconfig');
const stringUtil = require('../../utils/stringUtil');
/**
 * @swagger
 * /email/send:
 *   post:
 *     tags:
 *       - Email
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: testing send email
 */

router.post('/send', (req, res) => {
	const randomString = stringUtil.generateString();
	async.parallel([
		function one(callback) {
			email.sendEmail(
				callback,
				config.sendgrid.from_email,
				['omarnsoor3@gmail.com'],
				' iLearn Microlearning ',
				`please consider the following as your password${randomString}`,
				`<p style="font-size: 32px;">Welcome to iLrn</p>  please consider the following as your password: ${randomString}`,
			);
		},
	], (err, results) => {
		res.send({
			type: 'success',
			message: 'Emails sent',
			successfulEmails: results[0].successfulEmails === 0 ? 1 : results[0].successfulEmails,
			errorEmails: results[0].errorEmails,
		});
	});
});


module.exports = router;
