//PROGRESS BAR
const progressBar = document.querySelector(".progress-bar");
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrolled = (scrollTop / height) * 100;

  progressBar.style.width = `${scrolled}%`;
});

// CAROUSEL
let count = 1;

document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}