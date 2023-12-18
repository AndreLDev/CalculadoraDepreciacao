function calcular(){
    const vn = document.getElementById("vn").value;
    const vr = document.getElementById("Tipo").value;
    const n = document.getElementById("n").value;
    
    const da = (vn - (vn * vr)) / n;
    
    document.getElementById("resultado").innerHTML = `
      Depreciação anual: R$ ${da.toFixed(2)}
    `;
}



function LoadTipo() {
    const selectTipo = document.getElementById('Tipo');
    selectTipo.innerHTML = "";

    const optFirst = document.createElement('option');
    optFirst.value = 0;
    optFirst.text = "Selecione um Tipo";

    selectTipo.add(optFirst);

    tipos.forEach((tipo) => {
        const opt = document.createElement('option');
        opt.value = tipo.Valor;
        opt.text = tipo.Descricao;

        selectTipo.add(opt);
    });
}

LoadTipo();

