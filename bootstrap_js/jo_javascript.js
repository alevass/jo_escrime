let formulaire = document.getElementById("Formulaire");
let nom = document.getElementById("Nom");
let prenom = document.getElementById("Prenom");
let erreur_n = document.getElementById("erreurN");
let erreur_p = document.getElementById("erreurP");
let valide_n = document.getElementById("valideN")
let valide_p = document.getElementById("valideP");

let civilite = document.getElementById("msg_civilite");
let radios = document.getElementsByName("radio");

let nationalite = document.getElementById("nationalite");
let msg_nationalite_f = document.getElementById("msgf_nationalite");

let motdp = document.getElementById("mdp");
let cmdp = document.getElementById("cmdp");
let msg_mdp = document.getElementById("message_mdp");
let msg_mdp_v = document.getElementById("message_mdpV");

let email_nom = document.getElementById("email_nom");
let nom_domaine = document.getElementById("nom_domaine");
let msg_mail = document.getElementById("message_email");
let msg_mailv = document.getElementById("message_emailV");
let msg_domaine = document.getElementById("message_domaine");

let options = document.getElementById("options_msg");

let op1 = document.getElementById("op1");
let op2 = document.getElementById("op2");
let op3 = document.getElementById("op3");
let op4 = document.getElementById("op4");
let op5 = document.getElementById("op5");
let op6 = document.getElementById("op6");
let op7 = document.getElementById("op7");
let op8 = document.getElementById("op8");

function verif_civilite() {
    let selection = false;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selection = true;
        }
    }
    if (selection == false) {
        civilite.classList.remove("d-none");
    }
    return selection;
}

function verif_nationalite() {
    if (nationalite.value == "aucune") {
        msg_nationalite_f.classList.remove("d-none");
        return false;
    } else {
        return true;
    }
}

let majuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let minuscules = "abcdefghijklmnopqrstuvwxyz";
let chiffres = "0123456789";
let speciaux = "!@#$%^&*()-_=+[]{};:'\",.<>/?\\|`~";

function ch_mdp() {

    let mdp = motdp.value;
    let maj = false;
    let min = false;
    let chiff = false;
    let sp = false;

    for (let i = 0; i < mdp.length; i++) {
        if (majuscules.includes(mdp[i])){
            maj = true; }
        else if (minuscules.includes(mdp[i])){
            min = true; }
        else if (chiffres.includes(mdp[i])){
            chiff = true; }
        else if (speciaux.includes(mdp[i])){
             sp = true; }
        }

    if (maj && min && chiff && sp) {
        return true;
    } else {
        return false;
    }

}

formulaire.addEventListener("submit", function (e) {

    e.preventDefault();
    erreur_n.classList.add("d-none");
    erreur_p.classList.add("d-none");
    valide_n.classList.add("d-none");
    valide_p.classList.add("d-none");
    civilite.classList.add("d-none");
    msg_nationalite_f.classList.add("d-none");
    msg_mdp.classList.add("d-none");
    msg_mdp_v.classList.add("d-none");
    msg_mail.classList.add("d-none");
    msg_mailv.classList.add("d-none");
    msg_domaine.classList.add("d-none");
    options.classList.add("d-none");
    nom.classList.remove("is-valid")
    nom.classList.remove("is-invalid")
    prenom.classList.remove("is-valid");
    prenom.classList.remove("is-invalid");
    motdp.classList.remove("is-valid");
    motdp.classList.remove("is-invalid")
    cmdp.classList.remove("is-valid");
    cmdp.classList.remove("is-invalid")
    email_nom.classList.remove("is-valid");
    email_nom.classList.remove("is-invalid");
    nom_domaine.classList.remove("is-valid");

    if (nom.value == "") {
         erreur_n.classList.remove("d-none"); 
         nom.classList.add("is-invalid"); }
    else { valide_n.classList.remove("d-none"); nom.classList.add("is-valid"); 
    }


    if (prenom.value == "") {
        erreur_p.classList.remove("d-none"); 
        prenom.classList.add("is-invalid"); 
        }
    else { valide_p.classList.remove("d-none");
        prenom.classList.add("is-valid"); }


    if (motdp.value.length < 8 || ch_mdp() == false || cmdp.value != motdp.value) {
        msg_mdp.classList.remove("d-none"); 
        motdp.classList.add("is-invalid"); 
        cmdp.classList.add("is-invalid");}
        else { 
        msg_mdp_v.classList.remove("d-none"); 
        motdp.classList.add("is-valid"); 
        cmdp.classList.add("is-valid"); }


    if (email_nom.value == "") { 
        msg_mail.classList.remove("d-none");
        email_nom.classList.add("is-invalid");
        } else { 
            msg_mailv.classList.remove("d-none");
            email_nom.classList.add("is-valid"); 
        }

    if (nom_domaine.value == "gmail.com"){ 
        msg_domaine.classList.remove("d-none");
        nom_domaine.classList.add("is-valid"); 
    }

    let compteur = 0;

    if (op1.checked) { 
        compteur++; 
    } 
    if (op2.checked) { 
        compteur++;
     }
    if (op3.checked) { 
        compteur++; 
    } 
    if (op4.checked) { 
        compteur++; 
    }
    if (op5.checked) { 
        compteur++; 
    } 
    if (op6.checked) { 
        compteur++; 
    }
    if (op7.checked) { 
        compteur++; 
    }
    if (op8.checked) {
         compteur++; 
        }

    if (compteur < 2) { options.classList.remove("d-none"); }

    verif_civilite();
    verif_nationalite();
});
