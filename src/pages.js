//const orfanatos = require('./database/fakedata.js')
const database = require('./database/db');
const salvarBd = require('./database/salvarOrfanato')

module.exports = {

    index(request, response) {
        return response.render('index')
    },
    async orfanato(request, response) {
        const id = request.query.id;

        try {
            const db = await database
            const result = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            result[0].fotos = result[0].fotos.split(",")
            result[0].firstImage = result[0].fotos[0];
            if (result[0].atende_fim_semana == '1') {
                result[0].fimDeSemana = 'Atendemos fim de semana.'
            } else {
                result[0].fimDeSemana = 'Não atendemos fim de semana.'
            }
            return response.render('orfanato', { result: result[0] })

        } catch (error) {
            // return response.render('erro')
        }

    },
    async orfanatos(request, response) {
        try {
            const db = await database;
            const orfanatos = await db.all("SELECT * FROM orphanages");
            return response.render('orfanatos', { orfanatos })
        } catch (erro) {
            console.log(erro)
        }

    },
    cadastroOrfanato(request, response) {
        return response.render('cadastro-orfanato')
    },

    async salvarOrfanato(request, response) {
        try {
            const fiels = request.body;
            const db = await database
            salvarBd(db, {
                lat: fiels.lat,
                lng: fiels.lng,
                name: fiels.name,
                sobre: fiels.sobre,
                whats: fiels.whats,
                fotos: fiels.fotos,
                instrucoes: fiels.instrucoes,
                hora_visitas: fiels.hora_visitas,
                atende_fim_semana: fiels.atende_fim_semana
            })
        } catch (error) {
            return response.send("Erro no banco")
        }

        response.redirect('/orfanatos')
    }


}