var DELAY = 200, timer = null, clickCnt = 0;

var funcClick = function() {
    console.log('click');
    var theDiv = document.getElementById('abc');
    theDiv.innerHTML = 'single click';
};

var funcDbClick = function() {
    clearTimeout(timer);
    console.log('dbl click');
    clickCnt = 0;
    var theDiv = document.getElementById('abc');
    theDiv.innerHTML = 'double click';
};

$("#abc").on('click', (e) => {
    clickCnt++;
    if (clickCnt === 1) {
        alert('single click');
        timer = setTimeout(funcClick, DELAY);
    } else {
        alert('duble click');
        funcDbClick();
    }
}).on('dbclick', (e) => {
    e.preventDefault();
});

