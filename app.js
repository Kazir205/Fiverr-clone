/*profile options*/
let profileOptions = document.querySelector(".profile-options");
let profilePic = document.querySelector(".profile-pic-img");


profilePic.addEventListener("click", function() {
    console.log("working");
 
    profileOptions.classList.toggle("show");
});