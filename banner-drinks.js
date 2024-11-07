
document.addEventListener('DOMContentLoaded', function () {
    function createGallery() {
        var galleryContainer = document.getElementById('container-banner-drinks');
        var screenWidth = window.innerWidth;

        // Clear existing content
        galleryContainer.innerHTML = '';

        // Determine the appropriate code based on screen size
        var galleryCode;
        if (screenWidth >= 992) { // Desktop
            galleryCode = `
        <div class="row row-banner">

        <div class="col col-1-banner ">
            <div class="banner-overlay" id="bannerum">
                <img class="banner-image img-fluid" src="../../assets/imagens/comoharmonizargrande.png">
                <div class="banner-text" id="banner-textum">
                    <h2> Drinks e comida:</h2>
                    <p> Como encontrar a </br>
                        harmonia?</p>
                    <a id="buttonsaibamais" href="../../components/dicacomidaebebida.html"
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
            <a href="../../components/dicamexeroubater.html">
                <div class="banner-overlay">
                    <img src="../../assets/imagens/bannermexeroubater.png" class="img-fluid banner-image "
                        id="mexeroubater">
                    <div class="banner-text" id="banner-textdois">
                        <p2> Como escolher entre </br>
                            mexer e bater um drink?</p2>
                    </div>
                </div>
            </a>
        </div>

        <div class="col-6" id="col-3-banner">
            <a href="../../components/dicaqualcopousar.html">
                <div class="banner-overlay">
                    <img src="../../assets/imagens/bannerqualcopousar.png" class="img-fluid banner-image ">
                    <div class="banner-text" id="banner-texttres">
                        <p2> Qual o copo ideal para </br>o seu drink?</p2>
                    </div>
                </div>
            </a>
        </div>

    </div>
            `;
        } else { // Mobile/Tablet
            galleryCode = `
                <div class="iphone">
      <div class="overlap-group-wrapper">
        <div class="overlap-group">
          <div class="rectangle"></div>
          <a href="../../components/dicamexeroubater.html"><img class="group" src="../../assets/imagens/banner-2-mobile.png" /></a>
          <a href="../../components/dicacomidaebebida.html"><img class="group-2" src="../../assets/imagens/banner-1-mobile.png" /></a>
          <a href="../../components/dicaqualcopousar.html"><img class="group-3" src="../../assets/imagens/banner-3-mobile.png" /></a>
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