const Express = require('express');
const BodyParser = require('body-parser');

const app = Express();

app.use(BodyParser.json());
app.listen(8080);
