function openModal(src){
    const modal = document.getElementById("imageModal");
    const img = document.getElementById("modalImg");

    img.src = src;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeModal(){
    const modal = document.getElementById("imageModal");
    modal.classList.add("hidden");
}