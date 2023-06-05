// am setat valoarea initiala 
let count = 0;
// Selectam valoarea + butoanele 
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
//Pentru const. 'btns' am invocat functia ' forEach()
// FUNCTIA forEach() = executa functia pe care  contine pentru fiecare element in parte 
//in forEach am creatt o functie 'bt' la care am adaucag un EventListner care 
//practic la click actioneaza functia 
btns.forEach( function (bt) {
    //cu "e" actionam functia de event si cu 'currentTarget' ( este o proprietare a lui 'e') practic alegem fiecare buton 
//classList selecteaza si fiecare clasa in parte a unui element 
    bt.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
// am pus o conditie cum ca daca functia styles , care atunci cnad dam clic verifica ce clase
//are fiecare butnon in parte corspunde cu clasa mentionata de noi atunci variabila 
//count va creste cu 1
        if(styles.contains("dec")){
            count--;
        }

        else if(styles.contains("inc")){
            count++;
        }

        else if(styles.contains("res")){
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }

        if (count < 0) {
            value.style.color = "red";
        }

        if (count == 0) {
            value.style.color = "black"
        }

//textContent este o prorpietate prin care adaugam continut in html cu jvs
//practic am spus ca in functie de valoarea lui count se va printa in value 
        value.textContent = count; 
    });
});