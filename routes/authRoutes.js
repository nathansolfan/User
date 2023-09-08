const {Router} = require('express')
const autoControllers= require('../controllers/authControllers')

const router = Router()

router.get('/signup', autoControllers.signup_get) 
router.post('/signup', autoControllers.signup_post)
router.get('/login', autoControllers.login_get)
router.post('/login', autoControllers.login_post)
module.exports = router