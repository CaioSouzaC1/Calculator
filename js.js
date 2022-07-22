function efetuarCalculo(tipo, valor) {
    
    if (tipo === 'acao') {
        if (valor === 'clear') {
            document.getElementById('visor').value = '';
        } 
        if (valor === '=') {
            var resultCalc = document.getElementById('visor').value;
            document.getElementById('visor').value = eval(resultCalc)
        } 
        if (valor === '/' ||valor === '*' ||valor === '-' ||valor === '+' ||valor === '.' ) {
            document.getElementById('visor').value += valor;
        }
    } else {
        document.getElementById('visor').value += valor;
    }

}