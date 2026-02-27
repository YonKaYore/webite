function changeStyle() {
    document.body.style.backgroundColor = '#397ae3';
    document.body.style.color = '#ffffff';

    var hrs = document.getElementsByTagName('hr');
    for (var i = 0; i < hrs.length; i++) {
        hrs[i].style.color = '#ffffff';
    }
}

var darkMode = false;

function toggleTheme() {
    var hrs = document.getElementsByTagName('hr');
    var i;

    if (darkMode == false) {
        document.body.style.backgroundColor = '#373841';
        document.body.style.color = '#ffffff';
        
        for (i = 0; i < hrs.length; i++) {
            hrs[i].style.color = '#ffffff';
        }
        
        darkMode = true;
    } else {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
        
        for (i = 0; i < hrs.length; i++) {
            hrs[i].style.color = '#000000';
        }
        
        darkMode = false;
    }
}