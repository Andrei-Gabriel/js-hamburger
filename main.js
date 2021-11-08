(document.querySelector(".fa, .fa-bars")).addEventListener("click", 
    function() {
        document.querySelector(".hamburger-menu").style.display = "initial";
    }
);

(document.querySelector(".fa, .fa-times")).addEventListener("click", 
    function() {
        document.querySelector(".hamburger-menu").style.display = "none";
    }
);