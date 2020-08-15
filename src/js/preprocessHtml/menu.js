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

function trString(row) {
    return `<tr><td class="name">${row.Nome}</td><td class="ingredienti">${row.Ingredienti}</td><td class="price">${row.Prezzo}</td></tr>`
}

fs.createReadStream(path.join(__dirname, '../../db/pizzeClassiche.csv'))
    .pipe(csv({
        raw: true
    }))
    .on('data', (row) => {
        pizzeClassiche += trString(row);
    })
    .on('end', () => {
        fs.writeFile(path.join(__dirname, '../../db/menuHtml/01_pizze_classiche.html'), pizzeClassiche, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });

fs.createReadStream(path.join(__dirname, '../../db/pizze_giganti.csv'))
    .pipe(csv({
        raw: true
    }))
    .on('data', (row) => {
        pizze_giganti += trString(row);
    })
    .on('end', () => {
        fs.writeFile(path.join(__dirname, '../../db/menuHtml/02_pizze_giganti.html'), pizze_giganti, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });

fs.createReadStream(path.join(__dirname, '../../db/supplementi.csv'))
    .pipe(csv({
        raw: true
    }))
    .on('data', (row) => {
        supplementi += `<tr><td class="nameSup">${row.Nome}</td><td class="priceSup">${row.Prezzo}</td></tr>`
    })
    .on('end', () => {
        fs.writeFile(path.join(__dirname, '../../db/menuHtml/04_supplementi.html'), supplementi, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });

fs.createReadStream(path.join(__dirname, '../../db/gnocco_calzoni.csv'))
    .pipe(csv({
        raw: true
    }))
    .on('data', (row) => {
        gnocco_calzoni += trString(row);
    })
    .on('end', () => {
        fs.writeFile(path.join(__dirname, '../../db/menuHtml/03_gnocco_calzoni.html'), gnocco_calzoni, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });

fs.createReadStream(path.join(__dirname, '../../db/stuzzicherie.csv'))
    .pipe(csv({
        raw: true
    }))
    .on('data', (row) => {
        stuzzicherie += trString(row);
    })
    .on('end', () => {
        fs.writeFile(path.join(__dirname, '../../db/menuHtml/06_stuzzicherie.html'), stuzzicherie, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });

fs.createReadStream(path.join(__dirname, '../../db/bibite.csv'))
    .pipe(csv({
        raw: true
    }))
    .on('data', (row) => {
        bibite += trString(row);
    })
    .on('end', () => {
        fs.writeFile(path.join(__dirname, '../../db/menuHtml/08_bibite.html'), bibite, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });

fs.createReadStream(path.join(__dirname, '../../db/primi_piatti.csv'))
    .pipe(csv({
        raw: true
    }))
    .on('data', (row) => {
        primi_piatti += trString(row);
    })
    .on('end', () => {
        fs.writeFile(path.join(__dirname, '../../db/menuHtml/05_primi_piatti.html'), primi_piatti, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });

fs.createReadStream(path.join(__dirname, '../../db/dolci_gelati.csv'))
    .pipe(csv({
        raw: true
    }))
    .on('data', (row) => {
        dolci_gelati += trString(row);
    })
    .on('end', () => {
        fs.writeFile(path.join(__dirname, '../../db/menuHtml/07_dolci_gelati.html'), dolci_gelati, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });