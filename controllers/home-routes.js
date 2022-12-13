const router = require("express").Router();

router.get('/', async (req, res) => {
    res.render('landing', {
        layout: 'home',
    });
});

module.exports = router;
