const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const servicesToggle = document.getElementById("servicesToggle");
const servicesMenu = document.getElementById("servicesMenu");
const videoTrigger = document.getElementById("videoTrigger");
const videoModal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const closeVideo = document.getElementById("closeVideo");

menuToggle?.addEventListener("click", () => {
    const isOpen = !mobileMenu.hasAttribute("hidden");
    if (isOpen) {
        mobileMenu.setAttribute("hidden", "");
        menuToggle.setAttribute("aria-expanded", "false");
        servicesMenu?.classList.add("hidden");
        servicesToggle?.setAttribute("aria-expanded", "false");
    } else {
        mobileMenu.removeAttribute("hidden");
        menuToggle.setAttribute("aria-expanded", "true");
    }
});

servicesToggle?.addEventListener("click", () => {
    const isHidden = servicesMenu?.classList.contains("hidden");
    if (isHidden) {
        servicesMenu?.classList.remove("hidden");
        servicesToggle.setAttribute("aria-expanded", "true");
    } else {
        servicesMenu?.classList.add("hidden");
        servicesToggle.setAttribute("aria-expanded", "false");
    }
});

const openVideoModal = () => {
    if (!videoModal || !videoFrame || !videoTrigger) return;
    const videoUrl = videoTrigger.getAttribute("data-video");
    if (videoUrl) {
        videoFrame.setAttribute("src", videoUrl);
    }
    videoModal.classList.remove("hidden");
    videoModal.setAttribute("aria-hidden", "false");
};

const closeVideoModal = () => {
    if (!videoModal || !videoFrame) return;
    videoModal.classList.add("hidden");
    videoModal.setAttribute("aria-hidden", "true");
    videoFrame.setAttribute("src", "");
};

videoTrigger?.addEventListener("click", openVideoModal);
closeVideo?.addEventListener("click", closeVideoModal);
videoModal?.addEventListener("click", (event) => {
    if (event.target === videoModal) {
        closeVideoModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeVideoModal();
    }
});
