function realizarLogin() {
    // Lógica de autenticação aqui

    // Exemplo: Se as credenciais forem válidas, redireciona para a página de projetos
    var credenciaisValidas = true; // Substitua por sua lógica de autenticação
    if (credenciaisValidas) {
        window.location.href = 'projetos.html';
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }

    // Impede o envio do formulário padrão
    return false;
}
try{
    xmlhttp = new XMLHttpRequest();
}catch(ee){
    try{
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }catch(e){
        try{
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(E){
            xmlhttp = false;
        }
    }
}	
//////////////////////////////////////////////////////////////////////////
function doBusca(tmestre, campo_detalhe, select, from, where, order){
//limpa o select
var c=document.getElementById(campo_detalhe)
while(c.options.length>0)c.options[0]=null
c.options[0]=new Option(" -- Aguarde ... -- "," -- Aguarde ... -- ")

//Monta a url com o curso
xmlhttp.open("GET", "ajax_resultado.php?select="+select+"&from="+from+"&where="+where+"&order="+order,true);

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4){
        //limpa o select
        var c=document.getElementById(campo_detalhe)
        while(c.options.length>0)c.options[0]=null
        //Transforma a lista de turmas JSON em Javascript
        var aDetalhe=eval((xmlhttp.responseText))
        //popula o select com a lista de turmas obtida

        for(var i=0;i<aDetalhe.length;i++){
            aDetalhe[i]=unescape(aDetalhe[i])
            codDetalhe = aDetalhe[i].substring(0,aDetalhe[i].indexOf("@", 0));
            descDetalhe = aDetalhe[i].substring(aDetalhe[i].indexOf("@", 0)+1)
            c.options[c.options.length]=new Option(descDetalhe, codDetalhe);
        }
    }
}
xmlhttp.send(null)
}

////////////////////////////////////////////////////////////////////////////

function PreencheCombo(tmestre, campo_detalhe, select, from, where, order, todos){
//limpa o select
var c=document.getElementById(campo_detalhe)
while(c.options.length>0)c.options[0]=null
c.options[0]=new Option(" -- Aguarde ... -- "," -- Aguarde ... -- ")

//Monta a url com o curso
if (todos == 'true'){
    xmlhttp.open("GET", "ajax_resultado.php?select="+select+"&from="+from+"&where="+where+"&order="+order+"&todos=true",true);
} else {
    xmlhttp.open("GET", "ajax_resultado.php?select="+select+"&from="+from+"&where="+where+"&order="+order,true);	
}
xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4){
        //limpa o select
        var c=document.getElementById(campo_detalhe)
        while(c.options.length>0)c.options[0]=null
        //Transforma a lista de turmas JSON em Javascript
        var aDetalhe=eval((xmlhttp.responseText))
        //popula o select com a lista de turmas obtida
        for(var i=0;i<aDetalhe.length;i++){
            aDetalhe[i]=unescape(aDetalhe[i])
            codDetalhe = aDetalhe[i].substring(0,aDetalhe[i].indexOf("@", 0));
            descDetalhe = aDetalhe[i].substring(aDetalhe[i].indexOf("@", 0)+1);
            c.options[c.options.length]=new Option(descDetalhe, codDetalhe)

        }
    }
}
xmlhttp.send(null)
}
//////////////////////////////////////////////////////////////////////////
function inverteCheckbox(campo_mestre, campo_detalhe, quantidade){
       campo_mestre = document.getElementById(campo_mestre);
    for (i = 0 ; i < quantidade; i++){
        check_detalhe = document.getElementById(campo_detalhe+i);
        check_detalhe.checked = campo_mestre.checked;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Adiciona() {
document.form.btn_remove.disabled = false;
document.form.btn_remove_tudo.disabled = false;


tamanho = document.form.select1.options.length;
var d1text=eval("document.form.select.value");
var d2text=eval("document.form.select.options[document.form.select.selectedIndex].text")
var vs1=document.form.select.selectedIndex;
if (vs1!=-1){
  dop2="var option2 = new Option('"+d2text+"', '"+d1text+"');";
  eval(dop2);
  var x2="document.form.select1.options["+tamanho+"]=option2;"
  eval(x2);
  document.form.select.options[vs1]=null;
}
if (document.form.select.options.length == 0)
{
    document.form.btn_adiciona.disabled = true;
  document.form.btn_adiciona_tudo.disabled = true;
} 	

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function AdicionaTudo() {
    document.form.btn_remove.disabled = false;
    document.form.btn_remove_tudo.disabled = false;
    tamanho = document.form.select.options.length
    tamanho1 = document.form.select1.options.length;
    for (j = 0; j < tamanho; j++){
        y = "document.form.select.options["+j+"].value;";
        x = "document.form.select.options["+j+"].text;"
             dop2 = "var option2 = new Option('"+eval(x)+"', '"+eval(y)+"')";
          eval(dop2);
          var x2="document.form.select1.options["+(j+tamanho1)+"]=option2;";
          eval(x2);
      }   
    for (i = 0; i <= tamanho; i++)
    {
            document.form.select.options[0]=null;
    }
    if (document.form.select.options.length == 0)
    {
        document.form.btn_adiciona.disabled = true;
        document.form.btn_adiciona_tudo.disabled = true;
     } 	
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Remover() {
document.form.btn_adiciona.disabled = false;
document.form.btn_adiciona_tudo.disabled = false;
tamanho = document.form.select.options.length;
var d1text=eval("document.form.select1.value");
var d2text=eval("document.form.select1.options[document.form.select1.selectedIndex].text");
var vs1=document.form.select1.selectedIndex;
if (vs1!=-1){
  dop2="var option2 = new Option('"+d2text+"', '"+d1text+"');";
  eval(dop2);
  var x2="document.form.select.options["+tamanho+"]=option2;"
  eval(x2);
  document.form.select1.options[vs1]=null;
}
if (document.form.select1.options.length == 0)
{
    document.form.btn_remove.disabled = true;
  document.form.btn_remove_tudo.disabled = true;
} 
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function SalvarSelecionados() {

    tamanho = document.form.select1.options.length;
    document.form.tamanho.value = tamanho;
    x = "document.form.selecionados.value = 'inicio = 1'";
    v1 = eval(x); 
    for (j = 0; j < tamanho; j++)
    {
        x = "document.form.selecionados.value = document.form.selecionados.value +'&campo["+j+"]='+ document.form.select1.options["+j+"].value";
        v1 = eval(x); 
    }	    
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function RemoverTudo() {
    document.form.btn_adiciona.disabled = false;
    document.form.btn_adiciona_tudo.disabled = false;

    tamanho = document.form.select1.options.length;
    tamanho1 = document.form.select.options.length;
    for (j = 0; j < tamanho; j++)
    {
        y = "document.form.select1.options["+j+"].value;";
        x = "document.form.select1.options["+j+"].text;";
             dop2 = "var option2 = new Option('"+eval(x)+"', '"+eval(y)+"')";
          eval(dop2);
          var x2="document.form.select.options["+(j+tamanho1)+"]=option2;";
          eval(x2);
       }	
    for (i = 0; i < tamanho; i++)
    {
        document.form.select1.options[0]=null;
    }
    
    if (document.form.select1.options.length == 0)
    {
        document.form.btn_remove.disabled = true;
        document.form.btn_remove_tudo.disabled = true;
    } 
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	

function validaCPF(campo) {
             str = campo.value;
                str = str.replace("-","");  
             str = str.replace(".","");  
                 str = str.replace(".","");  
             cpf = str;  
             erro = new String;  
                if (cpf.length < 11) erro += "Sao necessarios 11 digitos para verificacao do CPF! \n\n";   
                var nonNumbers = /\D/;  
               if (nonNumbers.test(cpf)) erro += "A verificacao de CPF suporta apenas numeros! \n\n";   
               if (cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999"){  
                       erro += "Numero de CPF invalido!"  
            }  
             var a = [];  
             var b = new Number;  
             var c = 11;  
             for (i=0; i<11; i++){  
                     a[i] = cpf.charAt(i);  
                     if (i < 9) b += (a[i] * --c);  
             }  
             if ((x = b % 11) < 2) { a[9] = 0 } else { a[9] = 11-x }  
             b = 0;  
             c = 11;  
             for (y=0; y<10; y++) b += (a[y] * c--);   
             if ((x = b % 11) < 2) { a[10] = 0; } else { a[10] = 11-x; }  
             if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10])){  
                     erro +="Digito verificador com problema!";  
             }  
             if (erro.length > 0){
                      alert(erro);  
                     campo.value = '';
                     return false;  
                     campo.focus();
             }  
             return true;  
     }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////         
