const router = require("express").Router();

//http://localhost:3001
router.get('/', async (req, res) => {
    res.render('landing', {
        layout: 'home',
    });
});

module.exports = router;
