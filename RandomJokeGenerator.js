const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don't skeletons fight each other? They don't have the guts.",
  "What do you call fake spaghetti? An impasta!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "Why don't programmers like nature? It has too many bugs.",
  "Why do cows wear bells? Because their horns don't work.",
  "What do you call cheese that isn't yours? Nacho cheese.",
  "Why can't you give Elsa a balloon? Because she will let it go.",
  "What do you get if you cross a snowman and a vampire? Frostbite.",
  "How do you organize a space party? You planet.",
  "Why did the math book look sad? Because it had too many problems.",
  "Why are ghosts bad at lying? Because they are too transparent.",
  "Why don't some couples go to the gym? Because some relationships don't work out.",
  "What do you call an alligator in a vest? An investigator.",
  "What do you call a bear with no teeth? A gummy bear.",
  "Why did the golfer bring an extra pair of pants? In case he got a hole in one.",
  "Why was the math book depressed? It had too many problems.",
  "Why did the coffee file a police report? It got mugged.",
  "Why was the broom late? It swept in.",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "Why don't some fish like to play basketball? They are afraid of the net.",
  "Why did the cookie go to the hospital? Because it felt crummy.",
  "Why are pirates called pirates? Because they arrrrr.",
  "Why did the computer go to the doctor? Because it had a virus.",
  "Why did the grape stop in the middle of the road? Because it ran out of juice.",
  "What do you call a sleeping bull? A bulldozer.",
  "Why was the math book sad? Because it had too many problems.",
  "Why did the bicycle fall over? Because it was two-tired.",
  "Why do elephants never use computers? They are afraid of the mouse.",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  "What do you call a bear with no teeth? A gummy bear.",
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field.",
  "Why was the broom late? It swept in.",
  "Why don't some couples go to the gym? Because some relationships don't work out.",
  "Why did the coffee file a police report? It got mugged.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "Why did the computer go to the doctor? Because it had a virus.",
  "What do you call cheese that isn't yours? Nacho cheese.",
  "Why can't you give Elsa a balloon? Because she will let it go.",
  "Why was the math book sad? Because it had too many problems.",
  "Why did the bicycle fall over? Because it was two-tired.",
  "What do you call a bear with no teeth? A gummy bear.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "Why don't some couples go to the gym? Because some relationships don't work out.",
  "Why did the coffee file a police report? It got mugged.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "Why did the computer go to the doctor? Because it had a virus.",
  "Why do cows wear bells? Because their horns don't work.",
  "Why did the golfer bring an extra pair of pants? In case he got a hole in one.",
  "Why don't programmers like nature? It has too many bugs.",
  "What do you call fake spaghetti? An impasta!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why was the math book sad? Because it had too many problems.",
  "Why did the bicycle fall over? Because it was two-tired.",
  "What do you call cheese that isn't yours? Nacho cheese.",
  "Why can't you give Elsa a balloon? Because she will let it go.",
  "Why don't some couples go to the gym? Because some relationships don't work out.",
  "Why did the coffee file a police report? It got mugged.",
  "Why was the math book sad? Because it had too many problems.",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "Why don't some fish like to play basketball? They are afraid of the net.",
  "Why did the cookie go to the hospital? Because it felt crummy.",
  "Why are pirates called pirates? Because they arrrrr.",
  "Why did the computer go to the doctor? Because it had a virus.",
  "Why did the grape stop in the middle of the road? Because it ran out of juice.",
  "What do you call a sleeping bull? A bulldozer.",
  "Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field.",
  "Why was the broom late? It swept in.",
  "Why don't some couples go to the gym? Because some relationships don't work out.",
  "Why did the coffee file a police report? It got mugged.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "Why did the computer go to the doctor? Because it had a virus.",
  "What do you call cheese that isn't yours? Nacho cheese.",
  "Why can't you give Elsa a balloon? Because she will let it go.",
  "Why was the math book sad? Because it had too many problems.",
  "Why did the bicycle fall over? Because it was two-tired.",
  "What do you call a bear with no teeth? A gummy bear.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "Why don't some couples go to the gym? Because some relationships don't work out.",
  "Why did the coffee file a police report? It got mugged.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "Why did the computer go to the doctor? Because it had a virus.",
  "Why do cows wear bells? Because their horns don't work.",
  "Why did the golfer bring an extra pair of pants? In case he got a hole in one.",
  "Why don't programmers like nature? It has too many bugs.",
  "What do you call fake spaghetti? An impasta!",
  "Why don’t skeletons fight each other? They don’t have the guts",
  "I told my wife she was drawing her eyebrows too high. She looked surprised",
  "Why did the scarecrow win an award? Because he was outstanding in his field",
  "What do you call fake spaghetti? An impasta",
  "I used to play piano by ear, but now I use my hands",
  "Why don’t oysters donate to charity? Because they’re shellfish",
  "Why did the coffee file a police report? It got mugged",
  "Parallel lines have so much in common. It’s a shame they’ll never meet",
  "I’m reading a book on anti-gravity. It’s impossible to put down!",
  "Why did the bicycle fall over? It was two-tired",
  "I told my computer I needed a break, and now it’s frozen",
  "What did the zero say to the eight? Nice belt!",
  "I couldn’t figure out why I wasn’t getting any sleep, then I realized it was because I had too many sleepless nights",
  "Why do cows wear bells? Because their horns don’t work",
  "What do you call cheese that isn’t yours? Nacho cheese",
  "I used to play soccer, but I couldn’t get the goal right. It was a penalty!",
  "What do you call a pile of cats? A meow-tain", "I tried to catch some fog yesterday. I mist",
  "Why don’t some couples go to the gym? Because some relationships don’t work out",
  "I don’t trust stairs. They’re always up to something"
];

function displayJoke(){
    let joke = jokes[Math.floor(Math.random() * jokes.length)]
    let ptag = document.getElementById("jokes")

    if(!ptag){
        ptag = document.createElement("p")
        ptag.id = "jokes"
        document.body.append(ptag)
    }

    ptag.innerText = joke;
}

function createReloadButton(){
    let reload = document.getElementById("reloadButton")
    if(!reload){
        reload = document.createElement("button")
        reload.id = "reloadButton"
        reload.innerText = "Reload"
        reload.addEventListener('click', displayJoke) // It is calling the function to make changes rather than calling to return some value into the eventListener
        document.body.append(reload)
    }

}

displayJoke();
createReloadButton();
