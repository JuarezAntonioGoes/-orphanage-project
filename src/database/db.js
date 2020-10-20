const Data = require('sqlite-async');
const path = require('path')


function execute(db) {
    return db.exec(`
    CREATE TABLE IF NOT EXISTS orphanages(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lat TEXT,
        lng TEXT,
        name TEXT,
        sobre TEXT,
        whats TEXT,
        fotos TEXT,
        instrucoes TEXT,
        hora_visitas TEXT,
        atende_fim_semana TEXT
    )
    `)
}


module.exports = Data.open(path.join(__dirname, 'database.sqlite')).then(execute)