
function conversaoDeIdade(idadeEmDias) {
    var anos 
    var meses
    var dias
    anos = parseInt(idadeEmDias / 365)
    meses = parseInt((idadeEmDias % 365) / 30)
    dias = ((idadeEmDias % 365) % 30)

    console.log("ANOS: " + anos + " MESES: " + meses + " DIAS: " + dias)
}

conversaoDeIdade(1452)
