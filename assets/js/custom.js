const tabs = document.querySelectorAll('.trigger-image');
const contents = document.querySelectorAll('.image-visible');


tabs.forEach((tab) => {
    tab.addEventListener('mouseover', () => {
        const contentId = tab.getAttribute('data-content');
        contents.forEach((content) => {
            content.classList.remove('show-content');
        });
        document.getElementById(contentId).classList.add('show-content');

        tabs.forEach((t) => {
            t.classList.remove('active');
        });
        tab.classList.add('active');
    });
});

$(document).ready(function () {
    $('#hero-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});
