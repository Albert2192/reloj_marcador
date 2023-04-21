var position = 1;
var ciObtenido = '';

$('.clic').click(function (e) {
    e.preventDefault();
    let valor = $(this).attr('data-value');
    $('#dig_' + position).text(valor);
    position <= 7 ? position++ : 1;
});

$('#clear').click(function (e) {
    e.preventDefault();
    LimpiarCodigo();
});

const obtenerCI = function(){
    for (let i = 1; i <= 7; i++){
        ciObtenido += $('#dig_' + i).text();
    }
    return ciObtenido;
}

$('#ok').click(function (e) {
    e.preventDefault();
    var ci = obtenerCI();
    console.log(ci);
    $.ajax({
        url: `${url_base}marcador-data.php`,
        type: 'POST',
        dataType: 'JSON',
        cache: false,
        async: false,
        data: {q: 'registrar', ci: ci},
        success: function (data, textStatus, jqHRX) {
    
        }, 
        error: function (jqHRX) {
            //console.log(jqHRX);
        }
    });

    $('.alert').addClass('active');
    setTimeout(function () {
        $('.alert').removeClass('active');
        LimpiarCodigo();
    }, 3000);
    /* setTimeout(function(){
        location.href = "index.html";
    }, 5000); */
});

function LimpiarCodigo() {
    for (let i = 1; i <= 7; i++) {
        $('#dig_' + i).html(`<i class="fa fa-asterisk" aria-hidden="true"></i>`);
    }
    position = 1;
    ciObtenido = '';
}