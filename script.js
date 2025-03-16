// Mousemove Effect - Fire Particle
document.addEventListener("mousemove", function (e) {
    let particle = document.createElement("div");
    particle.classList.add("particle");

    // Gán vị trí ban đầu theo con trỏ chuột
    document.body.appendChild(particle);
    particle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

    // Xóa hạt sau khi hiệu ứng kết thúc để tránh tràn bộ nhớ
    setTimeout(() => {
        particle.remove();
    }, 600);
});


// Transition page
function smoothTransition(page) {
    document.body.style.opacity = "0"; // Làm mờ trang
    setTimeout(() => {
        window.location.href = page; // Chuyển trang sau 0.5 giây
    }, 500);
}

// Khi tải lại trang, làm mượt hiệu ứng xuất hiện
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";
});

// slides action
document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelector(".slides");

    function showSlides() {
        slideIndex++;
        if (slideIndex >= 5) slideIndex = 0; // Quay lại ảnh đầu tiên
        slides.style.transform = `translateX(-${slideIndex * 20}%)`;
    }

    setInterval(showSlides, 3000); // Chuyển ảnh mỗi 3 giây
});

// Hiệu ứng Fade-in khi cuộn trang
document.addEventListener("DOMContentLoaded", function () {
    let fadeElements = document.querySelectorAll(".fade-in");

    function checkFadeIn() {
        let windowHeight = window.innerHeight;

        fadeElements.forEach(function (element) {
            let position = element.getBoundingClientRect().top;

            if (position < windowHeight - 100) { // Nếu phần tử xuất hiện trên màn hình
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkFadeIn);
    checkFadeIn(); // Gọi ngay khi tải trang để kiểm tra
});


