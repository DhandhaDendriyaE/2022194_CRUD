const express = require('express')
let mysql = require('mysql2');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mahasiswa',
    port : 3307
});
