// Task 1: Connect js file

// Taske 2: Change all h2 colors using TAG NAME
const headers2 = document.getElementsByTagName("h2");
for(const header2 of headers2){
    header2.style.color = "purple";
}

// Task 3; Change section background color Using ID
const sectionBackpackBg = document.getElementById("backpack");
sectionBackpackBg.style.backgroundColor = "tomato";
sectionBackpackBg.style.padding = "5px";

// task 4: change card radius using Class
const cards = document.getElementsByClassName("card");
for(const card of cards){
    card.style.borderRadius = "30px";
}

// Task 5: Show console log from a btn using click handler
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function(){
    console.log("Form Submitted");
    // inputfield.value = "";
})

// Task 6: Remove btn for many buttons.
const buttons = document.getElementsByClassName("btn");
for(const button of buttons){
    button.addEventListener('click', function(){
        button.style.display = "none";
    })
}

// Task 7: btn disabel active 
const inputfield = document.getElementById('exampleInputEmail1');
inputfield.addEventListener('keyup', function(event){
    const inputContains = event.target;
    const text = inputContains.value;
    console.log(text)
    if(text === "Email"){
        submitBtn.removeAttribute('disabled');
    }
    else{
        submitBtn.setAttribute('disabled', true)
    }
})

// Task 9: change bg color by doubleclick
const subscription = document.getElementById('subscribe');
subscription.addEventListener('dblclick', function(){
    subscription.style.backgroundColor = '#fcb4cf';
})