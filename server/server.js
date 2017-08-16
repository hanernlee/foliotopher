import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const router = express.Router();
const staticFiles = express.static(path.join(__dirname, '../../client/build'));

app.use(staticFiles);
app.use('/*', staticFiles);

app.use(router);
app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
});
