const router = require('express').Router();
const users_controller = require('../controllers/usersController.js');

router.get('/getUsers',users_controller.getUsers);
router.post('/addUser',users_controller.addUser);
router.put('/updateUser',users_controller.updateUser);
router.delete('/deleteUser',users_controller.deleteUser);

module.exports = router;