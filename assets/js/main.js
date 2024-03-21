//Navigation
document.addEventListener("scroll", () => {
    let nav = document.querySelector("#navigation");

    if( window.scrollY > 300) {
        nav.dataset.full = true;
    } else {
        nav.dataset.full = false;
    }
});


const generateFullImg = (source) => {
    const body = document.querySelector("body");
    const wrapper = document.createElement("div");
    const img = document.createElement("img");
 
    wrapper.classList.add("full-img-wrapper");
    img.classList.add("full-img");
    img.src = source;
 

    body.classList.add("disable-scroll")
    img.addEventListener("click", () => {
       wrapper.remove()
       body.classList.remove("disable-scroll")
    })
 
    wrapper.append(img)
    body.prepend(wrapper)
 }
 
 const images = document.querySelectorAll(".full-img");
 images.forEach(image => {
    image.addEventListener("click", (e) => {
       const img = e.target;
       const src = img.src;
 
       generateFullImg(src)
    })
 })