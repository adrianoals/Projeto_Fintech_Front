

// Função para esconder o Menu de Cadastro
function loginMenuClick(){
    document.getElementById("menuLogin").style.display = "";
    document.getElementById("menuCadastro").style.display = "none";
}

// Função para esconder o Menu de Login
function cadastroMenuClick(){
    document.getElementById("menuLogin").style.display = "none";
    document.getElementById("menuCadastro").style.display = "";
}


// Função para CPF 
function mascara(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
 }

 // Função para DDI e DDD
function mascaracel(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "3");
    
 }

 // Função para Celular 
function celmask(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 5) i.value += "-";
 
 }


 
 document.getElementById("user_name").innerHTML = 'Adriano';
