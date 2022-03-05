const Router = require('../framework/router')


const router = new Router();

const users = [
    {id: 1, name: 'Vlad'},
    {id: 2, name: 'Vasya'}
]

router.get('/users', (req, res) => {
    res.send(users);
})

router.post('/users', (req, res) => {
    console.log(req.body);
    const user = req.body;
    users.push(user);

    res.send(user);
})

module.exports = router;