var colaboradores ='';
var beneficio ='';
internationalNumberFormat = new Intl.NumberFormat('en-US');
$(document).ready(function () {
    var seccionUno = "seccionUno";
    var seccionDos = "seccionDos";
	var valUno='';
	var valDos='';
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == seccionUno) {
            var validarvalor = pair[1];
			if (!isNaN(validarvalor)) {
				valUno = pair[1];
				colaboradores = valUno;
			}
        }
		if (pair[0] == seccionDos) {
            var validarValorDos = pair[1];
			if (!isNaN(validarValorDos)) {
				valDos = pair[1];
				beneficio = valDos;
			}
        }
    }	
    if(valUno != '' && valDos != '' && !valUno.includes('-') && !valDos.includes('-') ){
        
        var ConBenefiAlimenTraba = document.getElementById('ConBenefiAlimenTraba');
        var ConPoderAdquisiTrabaVal = document.getElementById('ConPoderAdquisiTrabaVal');
        var ConCostoporEntrega = document.getElementById('ConCostoporEntrega');
        var ConAhorroMensual = document.getElementById('ConAhorroMensual');
        var ConAhorroTotal = document.getElementById('ConAhorroTotal');

        var SinBenefiAlimenTraba = document.getElementById('SinBenefiAlimenTraba');
        var SinPoderAdquisiTrabaVal = document.getElementById('SinPoderAdquisiTrabaVal');
        var SinCostoporEntrega = document.getElementById('SinCostoporEntrega');
        var SinAhorroMensual = document.getElementById('SinAhorroMensual');
        var SinAhorroTotal = document.getElementById('SinAhorroTotal');
        ConBenefiAlimenTraba=valDos;
        ConPoderAdquisiTrabaVal=valDos;

        SinBenefiAlimenTraba=valDos;
        SinPoderAdquisiTrabaVal=valDos*0.7;
        SinPoderAdquisiTrabaVal=Math.round(SinPoderAdquisiTrabaVal.toFixed(1));  
        ConCostoporEntrega=Math.round(valUno*valDos);
        SinCostoporEntrega=Math.round(valUno*valDos*1.49);
        ConAhorroMensual=Math.round(valUno*valDos*0.49);
        SinAhorroMensual=Math.round(ConAhorroMensual);
        ConAhorroTotal=Math.round(ConAhorroMensual*12);
        SinAhorroTotal=Math.round(SinAhorroMensual*12);
        $("#ConBenefiAlimenTraba").text(internationalNumberFormat.format(ConBenefiAlimenTraba));
        $("#ConPoderAdquisiTrabaVal").text(internationalNumberFormat.format(ConPoderAdquisiTrabaVal));
        $("#SinBenefiAlimenTraba").text(internationalNumberFormat.format(SinBenefiAlimenTraba));
        $("#SinPoderAdquisiTrabaVal").text(internationalNumberFormat.format(SinPoderAdquisiTrabaVal));
        $("#ConCostoporEntrega").text(internationalNumberFormat.format(ConCostoporEntrega));
        $("#SinCostoporEntrega").text(internationalNumberFormat.format(SinCostoporEntrega));
        $("#ConAhorroMensual").text(internationalNumberFormat.format(ConAhorroMensual));
        $("#ConAhorroTotal").text(internationalNumberFormat.format(ConAhorroTotal));
        $("#SinAhorroMensual").text(internationalNumberFormat.format(SinAhorroMensual));
        $("#SinAhorroTotal").text(internationalNumberFormat.format(SinAhorroTotal));
        $(".label-trabajadores").text(valUno);
        $(".sin-label-trabajadores").text(valUno);
    }else{
		var re = new RegExp(/^.*\//);
		var URLRaiz = re.exec(window.location.href);
		var LocationActual=window.location;
		var URLRString = URLRaiz.toString();
		var URL = URLRString.substr(0, URLRString.length - 11); //recortamos la URL para redirigir a la nueva pagina
		URL = URL + 'calculadora/index.html'; //ponemos parte de la URL donde nos dirigiremos
		window.location.href = URL;
	}

});

function regresar(){
	var re = new RegExp(/^.*\//);
    var URLRaiz = re.exec(window.location.href);
	var URLRString = URLRaiz.toString();
	var URL = URLRString.substr(0, URLRString.length - 11); //recortamos la URL para redirigir a la nueva pagina
	URL = URL + 'calculadora/index.html' + '?' + 'colaboradores=' + colaboradores + '&' + 'beneficio=' + beneficio; //ponemos parte de la URL donde nos dirigiremos
	window.location.href = URL;
}
function AbrirPluxeeConsumidores(){
    window.location.href='https://www.sodexo.pe/productos/pluxee-alimentacion/';
}