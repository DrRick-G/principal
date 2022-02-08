//https://disease.sh/v3/covid-19/historical/all?lastdays=all

$('.page-1').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
$('.page-2').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
$('.page-3').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
// $('.page-4').slick({
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });
// $('.page-5').slick({
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });

let droite = document.querySelectorAll('.slick-next');
let gauche = document.querySelectorAll('.slick-prev');
for (let i = 0; i < droite.length; i++) {
  gauche.innerHTML = `<i class="fas fa-chevron-circle-left"></i>`;
  droite.innerHTML = `<i class="fas fa-chevron-circle-right"></i>`;
}

let calculImc = document.getElementById("imc");
calculImc.addEventListener('click',()=>{
  let poids = prompt("ENTRER VOTRE POIDS\nNB: Veuillez mettre un point (.) à la place de la virgule pour les nombres à virgule");
  if(poids!=null || typeof poids == Number){
    let taille = prompt("ENTRER VOTRE TAILLE");
    let p = parseFloat(poids);
    console.log(p)
    let t = parseFloat(taille)
    imc = (p/(t*t)).toFixed(2)
    if (imc<18.5) {
      alert("Votre IMC est "+imc +" et vous êtes en insuffisance pondérale")
    } else if (18.5<imc<24.9) {
      alert("Votre IMC est "+imc +" et vous avez un poids normal")
    } else if (25<imc<29.9) {
      alert("Votre IMC est "+imc +" et vous êtes en surpoids")
      
    } else {
      alert("Votre IMC est "+imc +" et vous êtes en situation d'obésité")
      
    }{
      
    }{
      
    }
  }
});





// for (let i = 0; i < gauche.length; i++) {
//     gauche[i].innerHTML = `<i class="fas fa-chevron-circle-left"></i>`;
//   droite[i].innerHTML = '<i class="fas fa-chevron-circle-right"></i>';
// }
      