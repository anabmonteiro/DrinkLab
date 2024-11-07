

document.addEventListener('DOMContentLoaded', function () {
    let sim = document.getElementById('button-sim')
    let nao = document.getElementById('button-nao')

    sim.addEventListener('click', () => {
        localStorage.setItem('ageModalShown', 'true');

    });

    nao.addEventListener('click', () => {
        window.location.href = 'https://www.google.com.br';
    });

    // Check if the modal should be displayed
    if (!localStorage.getItem('ageModalShown')) {
        var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
        myModal.show();
    }

    let currentSectionIndex = 0;
    const sections = document.querySelectorAll('section');
    const navHeight = document.querySelector('nav').offsetHeight;
    document.getElementById('scrollButton').addEventListener('click', function () {
        // Scroll to the next section
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
            const scrollToY = sections[currentSectionIndex].offsetTop - navHeight;
            window.scrollTo({ top: scrollToY, behavior: 'smooth' });
        }
        currentSectionIndex = 0;
    })

    // Function to create the gallery based on screen size
    function createGallery() {
        var galleryContainer = document.getElementById('container-galeria');
        var screenWidth = window.innerWidth;

        // Clear existing content
        galleryContainer.innerHTML = '';

        // Determine the appropriate code based on screen size
        var galleryCode;
        if (screenWidth >= 992) { // Desktop
            galleryCode = `
             <!--banner grande-->
        <div class="row row-banner">

            <div class="col col-1-banner ">
                <div class="banner-overlay" id="bannerum">
                    <img class="banner-image img-fluid" src="assets/imagens/comoharmonizargrande.png">
                    <div class="banner-text" id="banner-textum">
                        <h2> Drinks e comida:</h2>
                        <p> Como encontrar a </br>
                            harmonia?</p>
                        <a id="buttonsaibamais" href="./components/dicacomidaebebida.html"
                            class="btn btn-primary btn-custom">
                            Saiba mais
                            <i class="bi bi-chevron-right"></i>
                        </a>



                    </div>
                </div>
            </div>

        </div>

        <!--banners pequenos-->
        <div class=" row row-banner">

            <div class="col-6 " id="col-2-banner">
                <a href="./components/dicamexeroubater.html">
                    <div class="banner-overlay">
                        <img src="assets/imagens/bannermexeroubater.png" class="img-fluid banner-image "
                            id="mexeroubater">
                        <div class="banner-text" id="banner-textdois">
                            <p2> Como escolher entre </br>
                                mexer e bater um drink?</p2>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-6" id="col-3-banner">
                <a href="./components/dicaqualcopousar.html">
                    <div class="banner-overlay">
                        <img src="assets/imagens/bannerqualcopousar.png" class="img-fluid banner-image ">
                        <div class="banner-text" id="banner-texttres">
                            <p2> Qual o copo ideal para </br>o seu drink?</p2>
                        </div>
                    </div>
                </a>
            </div>

        </div>


        <p id="drink" class="text-center"> Categorias </p>
             <div class="container" id="containerfotos">
               <div class="row justify-content-center" id="gradefotos">

                <div class="col-sm-12 col-md-4 justify-content-center" id="coluna-1">
                    <div class="row">
                        <div class="col">
                            <div class="row">
                                <a class="img-container-overlay" href="components/catquente.html">
                                    <img src="assets/imagens/categoriaquentes.png" class="img-fluid " alt="quentes"
                                        id="img">
                                    <div class="overlay ">
                                        Quentes
                                    </div>
                                </a>
                            </div>
                            <div class="row ">
                                <a class="img-container-overlay" href="components/catencorpados.html">
                                    <img src="assets/imagens/categoriaemcorpados.png" class="img-fluid" alt="encorpados"
                                        id="imgencorpados">
                                    <div class="overlay ">
                                        Encorpados
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="col ">
                            <a class="img-container-overlay" href="components/catsemalcool.html">
                                <img src="assets/imagens/categoriasemalcool.png" class="img-fluid" alt="semalcool"
                                    id="img">
                                <div class="overlay ">
                                    Sem álcool
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="row ">
                        <a class="img-container-overlay" href="components/catsofisticados.html">
                            <img src="assets/imagens/categoriasofisticados.png" class="img-fluid" alt="sofisticado"
                                id="imgsofisticados">
                            <div class="overlay">
                                Sofisticados
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-sm-12 col-md-2" id="coluna-2">
                    <div class="row justify-content-center text-overlay">
                        <a class="img-container-overlay" href="components/catsemacucar.html">
                            <img src="assets/imagens/categoriasemacucar.png" class="img-fluid" alt="semacucar" id="img">
                            <div class="overlay ">
                                Sem açúcar
                            </div>
                        </a>
                    </div>

                    <div class="row justify-content-center text-overlay">
                        <a class="img-container-overlay" href="components/catdia.html">
                            <img src="assets/imagens/categoriadia.png" class="img-fluid" alt="dia" id="imgdia">
                            <div class="overlay">
                                Dia
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-sm-12 col-md-4 justify-content-center" id="coluna-3">
                    <div class="row ">
                        <div class="col">
                            <a class="img-container-overlay" href="components/catnoite.html">
                                <img src="assets/imagens/categorianoite.png" class="img-fluid" alt="noite" id="img">
                                <div class="overlay">
                                    Noite
                                </div>
                            </a>
                        </div>

                        <div class="col">
                            <a class="img-container-overlay" href="components/catclassicos.html">
                                <img src="assets/imagens/categoriaclassicos.png" class="img-fluid" alt="classicos"
                                    id="img">
                                <div class="overlay ">
                                    Clássicos
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="row">
                        <a class="img-container-overlay" href="components/catrefrescantes.html">
                            <img src="assets/imagens/categoriarefrescantes.png" class="img-fluid" alt="refrescantes"
                                id="imgrefrescantes">
                            <div class="overlay ">
                                Refrescantes
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            </div>
            `;
        } else { // Mobile/Tablet
            galleryCode = `
                <div class="iphone">
      <div class="overlap-group-wrapper">
        <div class="overlap-group">
          <div class="rectangle"></div>
          <div class="text-wrapper">Categorias</div>
          <a href="components/catquente.html"><img class="img" src="assets/imagens/quente-mobile.png" /></a>
          <a href="components/catencorpados.html"><img class="rectangle-2" src="assets/imagens/encorpado-mobile.png" /></a>
          <a href="components/catsofisticados.html"><img class="rectangle-3" src="assets/imagens/sofisticado-mobile.png" /></a>
          <a href="components/catsemalcool.html"><img class="rectangle-4" src="assets/imagens/semalcool-mobile.png" /></a>
          <a href="components/catsemacucar.html"><img class="rectangle-5" src="assets/imagens/semacucar-mobile.png" /></a>
          <a href="components/catdia.html"><img class="rectangle-6" src="assets/imagens/dia-mobile.png" /></a>
          <a href="components/catnoite.html"><img class="rectangle-7" src="assets/imagens/noite-mobile.png" /></a>
          <a href="components/catrefrescantes.html"><img class="rectangle-8" src="assets/imagens/refrescantes-mobile.png" /></a>
          <a href="components/catclassicos.html"><img class="rectangle-9" src="assets/imagens/classicos-mobile.png" /></a>

          <a href="components/catquente.html"><div class="div">Quentes</div></a>
          <a href="components/catencorpados.html"><div class="text-wrapper-2">Encorpados</div></a>
          <a href="components/catsofisticados.html"><div class="text-wrapper-3">Sofisticados</div></a>
          <a href="components/catsemalcool.html"><div class="text-wrapper-4">Sem álcool</div></a>
          <a href="components/catsemacucar.html"><div class="text-wrapper-5">Sem açúcar</div></a>
          <a href="components/catdia.html"><div class="text-wrapper-6">Noite</div></a>
          <a href="components/catnoite.html"><div class="text-wrapper-7">Clássicos</div></a>
          <a href="components/catrefrescantes.html"><div class="text-wrapper-8">Refrescantes</div></a>
          <a href="components/catclassicos.html"><div class="text-wrapper-9">Dia</div></a>
          <a href="./components/dicamexeroubater.html"><img class="group" src="assets/imagens/banner-2-mobile.png" /></a>
          <a href="./components/dicacomidaebebida.html"><img class="group-2" src="assets/imagens/banner-1-mobile.png" /></a>
          <a href="./components/dicaqualcopousar.html"><img class="group-3" src="assets/imagens/banner-3-mobile.png" /></a>
        </div>
      </div>
    </div>
            `;
        }

        // Insert the chosen gallery code into the container
        galleryContainer.innerHTML = galleryCode;
    }

    // Call the function initially
    createGallery();

    // Add an event listener to update the gallery when the window is resized
    window.addEventListener('resize', createGallery);
});