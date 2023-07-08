window.addEventListener("scroll", function () {
    const progressBarFill = document.getElementById("progress-bar-fill");
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBarFill.style.width = scrolled + "%";
  });
  