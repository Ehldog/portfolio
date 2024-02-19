// Constante du carousel
const boutons = document.querySelectorAll(".carousel_btn");
const slides = document.querySelectorAll(".slide");

// Constante modal
const bouton_ouvrir = document.querySelector("#btn_open_form");
const bouton_fermer = document.querySelector("#btn_close_form");
const modal = document.querySelector("#form_contact");

boutons.forEach((bouton) => {
    bouton.addEventListener("click", (e) => {
        const calcSlideSuivant = e.target.id === "carousel_arrow_right" ? 1 : -1;   // est-ce que le target id est "carousel_arrow_right" ? si oui alors +1 si non (:) alors -1
        const slideActive = document.querySelector(".active");

        nouvelIndex = calcSlideSuivant + [...slides].indexOf(slideActive);          // On transforme la liste de slides en tableau [slides]

        if (nouvelIndex < 0){                                                       // Conditions permettant de continuer à passer d'un slide à l'autre même en arrivant au bout du tableau
            nouvelIndex = [...slides].length - 1;
        }

        if (nouvelIndex >= [...slides].length){
            nouvelIndex = 0;
        }

        slides[nouvelIndex].classList.add("active");                                // Déplacement du .active
        slideActive.classList.remove("active");

    });
});

// Changement de slide active via les boutons du menu

function ActivationMenu(idCible){                                                   
    const slideActive = document.querySelector(".active");
    let slidecible = idCible;

    slidecible.classList.add("active");
    if (slidecible !== slideActive){
        slideActive.classList.remove("active");
    }
    
}

// Fonction d'ouverture et fermeture de la fenêtre dialog

bouton_ouvrir.addEventListener("click", () => {
    modal.showModal();
});

bouton_fermer.addEventListener("click", () => {
    modal.close();
});

// Recupération des info contacts

document.getElementById("btn_submit").onclick = function(){
    let nom = document.getElementById("form_name").value;
    let prenom = document.getElementById("form_surname").value;
    let age = document.getElementById("form_age").value;
    let email = document.getElementById("form_mail").value;

    if(nom.trim() != '' && prenom.trim() != '' && age.trim() != '' && email.trim() != ''){
        console.log("nom :" + nom);
        console.log("prénom :" + prenom);
        console.log("âge :" + age);
        console.log("email :" + email);

        document.getElementById("your_name").innerHTML = nom;
        document.getElementById("your_surname").innerHTML = prenom;
        document.getElementById("your_age").innerHTML = age;
        document.getElementById("your_mail").innerHTML = email;
    }
    
}

