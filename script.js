/* question 18 */
let compteur = 0;

/* question 12 */
function Deplacer(){
    const message = document.getElementById('clavier').value;
    const affichage = document.querySelector('.affichage');
    console.log(message);
    
    const msg = document.createElement('div');
    msg.innerHTML = message;
    msg.classList = 'texte';
    if (compteur % 2 == 0){
        console.log(compteur);
        msg.classList.add('droite');
    } else {
        console.log(compteur);
        msg.classList.add('gauche');
    }
    compteur++;
    affichage.appendChild(msg);

    document.getElementById("clavier").value = "";
}

/* questiion 13 */
function ModifierAspectClavier(){
    const clavier = document.getElementById('clavier');
    clavier.style.resize = 'vertical';
    clavier.style.overflow = 'auto';
    clavier.style.width = '50%';
    clavier.style.minWidth = '400px';
}    

window.addEventListener('load', ModifierAspectClavier);