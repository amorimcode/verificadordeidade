function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.getElementById('res');
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('verifique novamente!');
    }
    else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = ''
        res.innerHTML = `Idade calculada ${idade}.`
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else if (idade < 150) {
                // idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            } else {
                img.setAttribute('src', 'rip.png')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else if (idade < 150) {
                // idoso
                img.setAttribute('src', 'foto-idoso-f.png')

            } else {
                img.setAttribute('src', 'rip.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. `
        res.appendChild(img)
    }
}