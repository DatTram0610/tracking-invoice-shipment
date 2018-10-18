const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/tracking-invoice-shipment'));
app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'dist/tracking-invoice-shipment', 'index.html'));
});
app.listen(process.env.PORT || 8080);
