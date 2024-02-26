$(document).ready(function () {

	var seccionUno = "colaboradores";
    var seccionDos = "beneficio";
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
		$(".text-colaboradores").val(valUno);
		$(".text-colaboradores-second").val(valDos);
	}
});
function validaNumericos(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
      return true;
     }
     return false;        
}
function restarColaboradores(){
    var total = document.getElementById('text-colaboradores');
	if(total.value > 0)	{
		total.value = parseInt(total.value)-1; 
	}
}
function SumarColaboradores(){
    var total = document.getElementById('text-colaboradores');
    total.value = parseInt(total.value)+1; 
}
function resultado(){
	var colaboradorVal = $("#text-colaboradores").val();
	var beneficiosVal = $("#text-colaboradores-second").val();

	if(colaboradorVal != '' && beneficiosVal != '' && !colaboradorVal.includes('-') && !beneficiosVal.includes('-') ){
		var re = new RegExp(/^.*\//);
		var URLRaiz = re.exec(window.location.href);
		var URLRString = URLRaiz.toString();
		var URL = URLRString.substr(0, URLRString.length - 12); //recortamos la URL para redirigir a la nueva pagina
		URL = URL + 'resultados/index.html'+'?'+'seccionUno='+ colaboradorVal +'&'+'seccionDos='+beneficiosVal; //ponemos parte de la URL donde nos dirigiremos
		window.location.href = URL;
	}
}
