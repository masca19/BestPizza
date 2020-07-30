const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
let table = '';

fs.createReadStream(path.join(__dirname, '../db/pizzeClassiche.csv'))
    .pipe(csv())
    .on('data', (row) => {
        table += `<tr><td>${row.Nome}</td><td>${row.Ingredienti}</td><td>${row.Prezzo}</td></tr>`
    })
    .on('end', () => {
        fs.appendFile('pizzeClassiche.html', table, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });