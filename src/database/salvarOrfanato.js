module.exports = async(db, { lat, lng, name, sobre, whats, fotos, instrucoes, hora_visitas, atende_fim_semana }) => {
    return db.run(`
    INSERT INTO orphanages (
        lat,
        lng,
        name,
        sobre,
        whats,
        fotos,
        instrucoes,
        hora_visitas,
        atende_fim_semana
    ) VALUES (
        "${lat}",
        "${lng}",
        "${name}",
        "${sobre}",
        "${whats}",
        "${fotos}",
        "${instrucoes}",
        "${hora_visitas}",
        "${atende_fim_semana}"
    )
    `)
}