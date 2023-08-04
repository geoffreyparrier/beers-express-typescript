import * as dotenv from "dotenv";
import * as sqlite3 from "sqlite3";
import express from "express";
import routes from './routes'

dotenv.config();

sqlite3.verbose();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
