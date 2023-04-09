


// function gotolink(link){
//     console.log(link.value);
//     //location.href = link.value;
//     window.open(link.value);
// };

<script>
        const toggleBtn = document.querySelector('.toggle_btn')
        const toggleBtnIcon = document.querySelector('.toggle_btn i')
        const dropDownMenu = document.querySelector('.dropdown_menu')
        
        toggleBtn.onclick = function()
        {
            dropDownMenu.classList.toggle('open')
            const isOpen = dropDownMenu.classList.contains('open')
      
            toggleBtnIcon.classList = isOpen?'fa-solid fa-xmark':'fa-solid fa-bars'
            }
           </script>

function redirectToPage(url) {
    window.open(url, '_blank');
  }
