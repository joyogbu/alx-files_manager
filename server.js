const express = require('express');
const app = express()
const port = process.env.PORT || 5000
const myroutes = require('./routes/index.js')
app.use('/status', myroutes);
app.use('/stats', myroutes);
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
})
