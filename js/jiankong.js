(function () {
    var choseTab = document.getElementsByClassName('choseTab');
    var showTab = document.getElementsByClassName('showTab');

    for (var i = 0; i < choseTab.length; i++) {
        choseTab[i].setAttribute('index', i);

        choseTab[i].onclick = function () {
            var index_ = this.getAttribute('index');

            for (var j = 0; j < choseTab.length; j++) {
                choseTab[j].classList.remove('active');
                choseTab[index_].classList.add('active');
            }

            for (var k = 0; k < showTab.length; k++) {
                showTab[k].style.display = 'none';
                showTab[index_].style.display = 'block';
            }
        }
    }

})();