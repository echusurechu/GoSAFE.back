module.exports = function(app) {

	require('./routes/index.js')(app);
    require('./routes/postgis.js')(app);
}
