const express = require('express');
const app = express()
const port = process.env.PORT || 5000
const myroutes = require('./routes/index')
app.use('/', myroutes);
//app.use('/stats', myroutes);
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
})
