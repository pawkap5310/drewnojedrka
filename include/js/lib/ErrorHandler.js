window.addEventListener('error', function(e) {

    // se c'è un errore rimuovo la class hidden dall'html così riesco a vedere la pagina
    this.dispatchEvent(window.ErrorGetLast);

    var errorMsg = '',
        message = '',
        filename = '',
        line = '',
        colno = '';

    if ('string' == typeof e.error) {
        errorMsg += e.error;
    } else {
        errorMsg = e.error;
    }

    console.log(errorMsg);
});