function hideAll() {
    $('#container-covers').hide('slow')
    $('#container-vetements').hide('slow')
    $('#container-illustrations').hide('slow')
    $('#container-audiovisuel').hide('slow')
    $('#container-web').hide('slow')
}

function showContainer(name) {
    hideAll();
    console.log(name);
    $('#container-' + name).show('slow');
}