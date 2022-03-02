  function testForm(e){
    //evento evita da pagina recarregar
    //e.preventDefault(); 
    
  
    //adicionando item no localstorage
  var transacaoVaga = localStorage.getItem('transacao')
    if (transacaoVaga != null){
      var transacao = JSON.parse(transacaoVaga)
    } else{
      var transacao = []
    } 


    //adicionando item no array
    transacao.push({
      select: (e.target.elements['select'].value== 'true' ),
      merch: e.target.elements['merch'].value ,
      price: e.target.elements['price'].value ,
    })

    //persistir novo item no localstorage
    localStorage.setItem('transacao', JSON.stringify(transacao))
    
} 
  
  
  // Máscara de formato de moeda pra input 'valor'
String.prototype.reverse = function(){
    return this.split('').reverse().join(''); 
};
function mascaraMoeda(campo,evento){
    
    var tecla = (!evento) ? window.event.keyCode : evento.which;
    var valor  =  campo.value.replace(/[^\d]+/gi,'').reverse();
    var resultado  = "";
    var mascara = "##.###.###,##".reverse();
    
    for (var x=0, y=0; x<mascara.length && y<valor.length;) {
      if (mascara.charAt(x) != '#') {
        resultado += mascara.charAt(x);
        x++;
      } else {
        resultado += valor.charAt(y);
        y++;
        x++;
      }
      
    }
    campo.value = resultado.reverse();
}

function extratoTransacao(){

    //adicionando lista no localstorage. 
    var transacaoVaga = localStorage.getItem('transacao')
    if (transacaoVaga != null){
      var transacao = JSON.parse(transacaoVaga)
    } else{
      var transacao = []
    }
      

    //looping da lista
    for( trans in transacao){
      
      document.querySelector('table.extract tbody').innerHTML += ` 
          <tr class="conteudo-dinamico">
          <td class="underline center">
          ${ (transacao[trans].select ? '+' : '-')}
          </td>
          <td class="underline">
          ${ transacao[trans].merch}
          </td>
          <td class="underline right">
          ${transacao[trans].price }
          </td>

        </tr>
    `
    }
 //segunda linha vazia acima do total
 document.querySelector('table.extract tbody ').innerHTML += `<tr>
 <td style = "border-bottom: 1px solid #979797" > </td>
 <td style = "border-bottom: 1px solid #979797" > </td>
 <td style = "border-bottom: 1px solid #979797" > </td>
 
 </tr>`

}


  




extratoTransacao()