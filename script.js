function gerartabuada(){
    let num = document.getElementById('numero')
    let tab = document.getElementById('tabuada')
    let esc = document.getElementById('escolha')
    if (num.value.length == 0) {
        alert('Por favor ! Digite um número')
   } else {
       let n = Number(num.value)
       let c = 0
       tab.innerHTML = ''
       while (c <= 10 ) {
           let item = document.createElement('option')
           item.text = `${n} x ${c} = ${n*c}`
           item.value = `tab${c}`
           tab.appendChild(item)
           c ++ 
           esc.innerHTML = `Tabuada de 0 á 10 do número ${n}`
       }
   }
}


