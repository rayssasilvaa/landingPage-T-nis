const changeThemeBtn = document.querySelector("#change-theme")

//adicionando o evento de click
changeThemeBtn.addEventListener("change", function(){
    document.body.classList.toggle("dark");

})