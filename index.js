require('dotenv').config();
const app = require('./src/app');

let port = (process.env.ENVIRONMENTS === 'production' ? process.env.PRODUCTION_PORT
         : (process.env.ENVIRONMENTS === 'development' ? process.env.DEVELOPMENT_PORT : process.env.TESTING_PORT)) || 3001;
app.listen(port, () => console.log('listening on port ' + port));

