// ==================================================
// MENU ACTIVE & SMOOTH SCROLL
// ==================================================

const menuLinks = document.querySelectorAll(".nav-link");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        // Mencegah perpindahan langsung
        event.preventDefault();

        // Mengambil id section dari href
        const targetId = this.getAttribute("href");

        // Mencari section tujuan
        const targetSection = document.querySelector(targetId);

        // Scroll secara halus
        targetSection.scrollIntoView({
            behavior: "smooth"
        });

        // Menghapus active dari semua menu
        menuLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        // Memberikan active pada menu yang dipilih
        this.classList.add("active");

    });

});


// ==================================================
// MENU ACTIVE SESUAI SECTION YANG TERLIHAT
// ==================================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    menuLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// ==================================================
// CHART JS - GRAFIK ABOUT
// ==================================================

const chart = document.getElementById("myChart");

new Chart(chart, {

    type: "bar",

    data: {

        labels: [
            "HTML & CSS",
            "Bootstrap",
            "Programming",
            "JavaScript"
        ],

        datasets: [{

            label: "Tingkat Penguasaan (%)",

            data: [
                80,
                70,
                85,
                75
            ]

        }]

    },

    options: {

        responsive: true,

        scales: {

            y: {

                beginAtZero: true,

                max: 100

            }

        }

    }

});