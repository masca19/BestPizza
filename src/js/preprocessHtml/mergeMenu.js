const fs = require('fs');
const path = require('path');
let menu = '';

const listOfMenu = [
    {
        pathMenu: '../../db/menuHtml/01_pizze_classiche.html',
        title: 'Pizze classiche'
    },
    {
        pathMenu: '../../db/menuHtml/02_pizze_giganti.html',
        title: 'Pizze Giganti'
    },
    {
        pathMenu: '../../db/menuHtml/03_gnocco_calzoni.html',
        title: 'Gnocco e calzoni'
    },
    {
        pathMenu: '../../db/menuHtml/04_supplementi.html',
        title: 'Supplementi'
    },
    {
        pathMenu: '../../db/menuHtml/05_primi_piatti.html',
        title: 'Primi piatti, secondi e Hamburger'
    },
    {
        pathMenu: '../../db/menuHtml/06_stuzzicherie.html',
        title: 'Stuzzicheria'
    },
    {
        pathMenu: '../../db/menuHtml/07_dolci_gelati.html',
        title: 'Dolci'
    },
    {
        pathMenu: '../../db/menuHtml/08_bibite.html',
        title: 'Bibite'
    }
]

listOfMenu.forEach((el, i) => mergeMenu(el.pathMenu, el.title, i))


function mergeMenu(pathMenu, title, i) {
    fs.createReadStream(path.join(__dirname, pathMenu))
        .on('data', (file) => {
            menu += `<h2>${title}</h2><table><tbody>${file.toString()}</tbody></table>`;
            console.log('Merged', title)
            if (i === listOfMenu.length -1) {
                fs.writeFile(path.join(__dirname, '../../../tableMenu.html'), menu, function (err) {
                    if (err) throw err;
                });

                fs.createReadStream(path.join(__dirname, '../../../templateMenu.html'))
                    .on('data', (file) => {
                        const fileWithImport = file
                            .toString()
                            .replace('@@menu@@', menu)
                        fs.writeFile(path.join(__dirname, '../../../menu.html'), fileWithImport, function (err) {
                            if (err) throw err;
                            console.log('\n\nImport all in menu.html')
                        });
                    })
            }
        })
}