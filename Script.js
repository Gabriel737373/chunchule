/*var Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut : function (rutCompleto) {
    rutCompleto = rutCompleto.replace("‐","-");
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
    return false;
    var tmp = rutCompleto.split('-');
    var digv= tmp[1]; 
    var rut = tmp[0];
    if ( digv == 'K' ) digv = 'k' ;
    
    return (Fn.dv(rut) == digv );
    },
    dv : function(T){
    var M=0,S=1;
    for(;T;T=Math.floor(T/10))
    S=(S+T%10*(9-M++%6))%11;
    return S?S-1:'k';
    }
    }
    
    
    $("#verificar").click(function(){
    if (Fn.validaRut( $("#frut").val() )){
    $("#VerificadarRut").html("El rut ingresado es válido :D");
    } else {
    $("#VerificadarRut").html("El Rut no es válido :'( ");
    }
    });*/

    var Fn = {
        // Valida el rut con su cadena completa "XXXXXXXX-X"
        validaRut : function (rutCompleto) {
            rutCompleto = rutCompleto.replace("‐","-");
            if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
                return false;
            var tmp = rutCompleto.split('-');
            var digv= tmp[1]; 
            var rut = tmp[0];
            if ( digv == 'K' ) digv = 'k' ;
            
            return (Fn.dv(rut) == digv );
        },
        dv : function(T){
            var M=0,S=1;
            for(;T;T=Math.floor(T/10))
                S=(S+T%10*(9-M++%6))%11;
            return S?S-1:'k';
        }
    }
    
    $("#verificar").click(function(event){
        event.preventDefault();
        if (Fn.validaRut( $("#frut").val() )){
            window.location.href='Bagget.html';
        } else {
            $("#VerificadarRut").html("El Rut no es válido :'( ");
        }
    });
    