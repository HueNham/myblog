// const dropdowns = document.querySelectorAll('#menu ul li');

// for (let i = 0; i < dropdowns.length; i++) {
//   dropdowns[i].addEventListener('click', function(event) {
//     event.stopPropagation();
//     if (this.querySelector('.sub-menu')) {
//       const subMenu = this.querySelector('.sub-menu');
//       if (subMenu.style.display === 'block') {
//         subMenu.style.display = 'none';
//       } else {
//         subMenu.style.display = 'block';
//       }
//     }
//   });
// }

// document.addEventListener('click', function(event) {
//   const subMenus = document.querySelectorAll('.sub-menu');
//   for (let i = 0; i < subMenus.length; i++) {
//     subMenus[i].style.display = 'none';
//   }
// });
//Search

// $(document).ready(function(){
//     $(".searchBtn").on("click", function(){
//       let searchInput = $(".searchInput").val().toLowerCase();
//       $(".container *").filter(function() {
//         $(this).toggle($(this).text().toLowerCase().indexOf(searchInput) > -1)
//       });
//     });
//   });
  
$(document).ready(function(){
    $(".searchBtn").on("click", function(){
      let searchInput = $(".searchInput").val().toLowerCase();
      $(".container *").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(searchInput) > -1)
      }).addClass("highlight"); // Thêm class "highlight" vào các phần tử đã tìm thấy
    });
  });
  