const generateFullImg1 = (source) => {
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

const images1 = document.querySelectorAll(".full-img");
images1.forEach(image => {
   image.addEventListener("click", (e) => {
      const img = e.target;
      const src = img.src;

      generateFullImg1(src)
   })
})