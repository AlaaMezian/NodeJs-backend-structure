const router = require('express').Router();
const AuthController = require('../../controllers/AuthController');
const auth = require('../../utils/auth');

/**
   * @swagger
   * definitions:
   *   users:
   *     required:
   *       - id
   *       - username
   *       - email
   *     properties:
   *       id:
   *         type: integer
   *       username:
   *         type: string
   *       email:
   *         type: string
   */


/**
  * @swagger
  * /signUp:
  *   post:
  *     tags:
  *       - Auth
  *     produces:
  *       - application/json
  *     parameters:
  *     - name: body
  *       in: body
  *       description: sign up using email and full name
  *       required: true
  *       schema:
  *         type: object
  *         required:
  *           - email
  *           - name
  *         properties:
  *           email:
  *             type: string
  *           name:
  *             type: string
  *     responses:
  *       201:
  *         description: send an email to the user with the auto generated password and register him
  */


router.post('/signUp', AuthController.signUp);

/**
  * @swagger
  * /login:
  *   post:
  *     tags:
  *       - Auth
  *     produces:
  *       - application/json
  *     parameters:
  *     - name: fcmToken
  *       in: header
  *       description: fire base cloud messaging token
  *       required: true
  *       type: string
  *     - name: platform
  *       in: header
  *       description: the platform that the user is using to access the system ios/android
  *       required: true
  *       type: string
  *     - name: body
  *       in: body
  *       description: the login credentials
  *       required: true
  *       schema:
  *         type: object
  *         required:
  *           - email
  *           - password
  *         properties:
  *           email:
  *             type: string
  *           password:
  *             type: string
  *     responses:
  *       200:
  *         description: user logged in succesfully
  */
router.post('/login', AuthController.login);
/**
  * @swagger
  * /refreshToken:
  *   post:
  *     tags:
  *       - Auth
  *     security:
  *       - Bearer: []
  *     produces:
  *       - application/json
  *     parameters:
  *     - name: body
  *       in: body
  *       description: the refresh token
  *       required: true
  *       schema:
  *         type: object
  *         required:
  *           - refreshToken
  *         properties:
  *           refreshToken:
  *             type: string
  *     responses:
  *       200:
  *         description: a new jwt token with a new expiry date is issued
  */
router.post('/refreshToken', auth.isAuthunticated, AuthController.refreshToken);

/**
 * @swagger
 * /logout:
 *   post:
 *     tags:
 *       - Auth
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *     - name: platform
 *       description: device platform
 *       in: header
 *       required: true
 *       type: string
 *     - name: body
 *       in: body
 *       description: the fcm token of the current logged in user
 *       required: true
 *       schema:
 *         type: object
 *         required:
 *           - fcmToken
 *         properties:
 *           fcmToken:
 *             type: string
 *     responses:
 *       200:
 *         description: log out from application
 *         schema:
 *           $ref: '#/definitions/users'
 */
router.post('/logout', auth.isAuthunticated, AuthController.logOut);

module.exports = router;
