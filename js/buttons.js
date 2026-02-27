function changeStyle() {
    document.body.style.backgroundColor = '#397ae3';
    document.body.style.color = '#ffffff';

    var hrs = document.getElementsByTagName('hr');
    for (var i = 0; i < hrs.length; i++) {
        hrs[i].style.color = '#ffffff';
    }
}