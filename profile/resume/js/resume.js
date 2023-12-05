var linkToggle = document.querySelectorAll('.toggle-btn');

for (i = 0; i < linkToggle.length; i++) {
    linkToggle[i].addEventListener('click', function (event) {

        event.preventDefault();

        var container = document.getElementById(this.dataset.container);
        var icon = this.querySelector('i'); // <i> 요소를 찾음

        if (!container.classList.contains('active')) {

            container.classList.add('active');
            icon.classList.remove('fa-angle-down'); // 'active' 클래스가 추가되면 'fa-angle-down' 클래스를 제거
            icon.classList.add('fa-angle-up'); // 'active' 클래스가 추가되면 'fa-angle-up' 클래스를 추가

            container.style.height = 'auto';
            var height = container.clientHeight + 'px';
            container.style.height = '0px';

            setTimeout(function () {
                container.style.height = height;
            }, 0);

        } else {

            container.style.height = '0px';

            container.addEventListener('transitionend', function () {
                container.classList.remove('active');
                icon.classList.remove('fa-angle-up'); // 'active' 클래스가 제거되면 'fa-angle-up' 클래스를 제거
                icon.classList.add('fa-angle-down'); // 'active' 클래스가 제거되면 'fa-angle-down' 클래스를 추가
            }, {
                once: true
            });

        }
    });
}