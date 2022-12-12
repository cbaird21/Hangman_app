const router = require("express").Router();

router.get('/', async (req, res) => {
    res.render('landing', {
        layout: 'main',
    });
});

module.exports = router;
