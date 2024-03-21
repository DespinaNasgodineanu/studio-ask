const generateFullImg = (source) => {
   const body = document.querySelector("body");
   const wrapper = document.createElement("div");
   const img = document.createElement("img");

   wrapper.classList.add("full-img-wrapper");
   img.classList.add("full-img");
   img.src = source;

   img.addEventListener("click", () => {
      wrapper.remove()
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