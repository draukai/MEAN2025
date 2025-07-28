/* GET homepage */
const about = (req, res) => {
res.render('index', { title: 'About Us' });
};

module.exports = {
about
};