const router = require("express").Router();

//hhtp://localhost
router.get('/', async (req, res) => {
    res.render('landing', {
        layout: 'home',
    });
});

module.exports = router;
