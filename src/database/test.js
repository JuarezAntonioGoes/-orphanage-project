const data = require('./db')
const salvarOrfanato = require('./salvarOrfanato')

data.then(async db => {

    await salvarOrfanato(db, {
        lat: "-22.2315138",
        lng: "-45.9886988",
        name: "Pouso Alegre",
        sobre: "Juarez",
        whats: "Juarez",
        fotos: ["https://images.unsplash.com/photo-1597553954309-30454e8502f9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1601180964280-88c506668304?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ],
        instrucoes: "Juarez",
        hora_visitas: "Das 07 até as 18",
        atende_fim_semana: "0"
    })

    const resultado = await db.all("SELECT * FROM orphanages")
    console.log(resultado)
})