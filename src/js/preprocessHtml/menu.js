const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
let pizzeClassiche = '';
let pizze_giganti = '';
let supplementi = '';
let gnocco_calzoni = '';
let stuzzicherie = '';
let bibite = '';
let primi_piatti = '';
let dolci_gelati = '';

fs.createReadStream(path.join(__dirname, '../../db/pizzeClassiche.csv'))
    .pipe(csv())
    .on('data', (row) => {
        pizzeClassiche += `<tr><td>${row.Nome}</td><td>${row.Ingredienti}</td><td>${row.Prezzo}</td></tr>`
    })
    .on('end', () => {
        fs.writeFile(path.join(__dirname, '../../db/menuHtml/01_pizze_classiche.html'), pizzeClassiche, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });

fs.createReadStream(path.join(__dirname, '../../db/pizze_giganti.csv'))
    .pipe(csv())
    .on('data', (row) => {
        pizze_giganti += `<tr><td>${row.Nome}</td><td>${row.Ingredienti}</td><td>${row.Prezzo}</td></tr>`
    })
    .on('end', () => {
        fs.writeFile(path.join(__dirname, '../../db/menuHtml/02_pizze_giganti.html'), pizze_giganti, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });

fs.createReadStream(path.join(__dirname, '../../db/supplementi.csv'))
    .pipe(csv())
    .on('data', (row) => {
        supplementi += `<tr><td>${row.Nome}</td><td>${row.Prezzo}</td></tr>`
    })
    .on('end', () => {
        fs.writeFile(path.join(__dirname, '../../db/menuHtml/04_supplementi.html'), supplementi, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });

fs.createReadStream(path.join(__dirname, '../../db/gnocco_calzoni.csv'))
    .pipe(csv())
    .on('data', (row) => {
        gnocco_calzoni += `<tr><td>${row.Nome}</td><td>${row.Ingredienti}</td><td>${row.Prezzo}</td></tr>`
    })
    .on('end', () => {
        fs.writeFile(path.join(__dirname, '../../db/menuHtml/03_gnocco_calzoni.html'), gnocco_calzoni, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });

fs.createReadStream(path.join(__dirname, '../../db/stuzzicherie.csv'))
    .pipe(csv())
    .on('data', (row) => {
        stuzzicherie += `<tr><td>${row.Nome}</td><td>${row.Ingredienti}</td><td>${row.Prezzo}</td></tr>`
    })
    .on('end', () => {
        fs.writeFile(path.join(__dirname, '../../db/menuHtml/06_stuzzicherie.html'), stuzzicherie, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });

fs.createReadStream(path.join(__dirname, '../../db/bibite.csv'))
    .pipe(csv())
    .on('data', (row) => {
        bibite += `<tr><td>${row.Nome}</td><td>${row.Ingredienti}</td><td>${row.Prezzo}</td></tr>`
    })
    .on('end', () => {
        fs.writeFile(path.join(__dirname, '../../db/menuHtml/08_bibite.html'), bibite, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });

fs.createReadStream(path.join(__dirname, '../../db/primi_piatti.csv'))
    .pipe(csv())
    .on('data', (row) => {
        primi_piatti += `<tr><td>${row.Nome}</td><td>${row.Ingredienti}</td><td>${row.Prezzo}</td></tr>`
    })
    .on('end', () => {
        fs.writeFile(path.join(__dirname, '../../db/menuHtml/05_primi_piatti.html'), primi_piatti, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });

fs.createReadStream(path.join(__dirname, '../../db/dolci_gelati.csv'))
    .pipe(csv())
    .on('data', (row) => {
        dolci_gelati += `<tr><td>${row.Nome}</td><td>${row.Ingredienti}</td><td>${row.Prezzo}</td></tr>`
    })
    .on('end', () => {
        fs.writeFile(path.join(__dirname, '../../db/menuHtml/07_dolci_gelati.html'), dolci_gelati, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });