const app = require("express")();

const path = require('path');

const PORT = process.env.PORT || 3000;

//app.get("", (req, res) => {
//	res.send("<center><h1>My Recipes<h1></center>")
//});

app.get('/', function(req, res) {
	  res.sendFile(path.join(__dirname, '/index_test.html'));
});

app.listen(PORT, () => {
	console.log(`App up at port ${PORT}`);
});
