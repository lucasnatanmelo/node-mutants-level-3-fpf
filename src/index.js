const express = require('express');
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 3000; 

const routes = require('./routes')

const app = express();

app.use(express.json());
app.use(cors())

app.use(routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
