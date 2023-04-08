const dropdowns = document.querySelectorAll('#menu ul li');

for (let i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener('click', function(event) {
    event.stopPropagation();
    if (this.querySelector('.sub-menu')) {
      const subMenu = this.querySelector('.sub-menu');
      if (subMenu.style.display === 'block') {
        subMenu.style.display = 'none';
      } else {
        subMenu.style.display = 'block';
      }
    }
  });
}

document.addEventListener('click', function(event) {
  const subMenus = document.querySelectorAll('.sub-menu');
  for (let i = 0; i < subMenus.length; i++) {
    subMenus[i].style.display = 'none';
  }
});
//search
function search() {
    let searchText = document.getElementById("searchInput").value;
    let searchBtn = document.getElementById("searchBtn");
  
    // Bắt sự kiện click vào button "searchBtn"
    searchBtn.addEventListener("click", function() {
      let highlightedText = window.getSelection().toString();
  
      // Nếu có đoạn text được bôi đen thì tìm kiếm vào đoạn text đó
      if (highlightedText !== "") {
        searchText = highlightedText;
      }
  
      // Tiến hành tìm kiếm
      // ...
    });
  }
  
  
