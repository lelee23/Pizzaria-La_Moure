document.querySelector(".burger").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);


document.addEventListener("DOMContentLoaded", () => {
    const slideImages = document.querySelector(".slide-images");
    const manualButtons = document.querySelectorAll(".manual-btn");
  
    let currentSlide = 0;
  
    const updateSlider = (index) => {
      // Atualiza o slider para mostrar a imagem correta
      const offset = -900 * index; // Cada slide tem 900px de largura
      slideImages.style.transform = `translateX(${offset}px)`;
  
      // Atualiza os botões ativos
      manualButtons.forEach((btn, i) => {
        btn.classList.toggle("active", i === index);
      });
    };
  
    // Adiciona eventos de clique nos botões
    manualButtons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        currentSlide = index;
        updateSlider(currentSlide);
      });
    });
  
    // Define uma transição automática a cada 5 segundos
    setInterval(() => {
      currentSlide = (currentSlide + 1) % manualButtons.length;
      updateSlider(currentSlide);
    }, 5000);
  
    // Inicia no slide 0
    updateSlider(0);
  });
  
