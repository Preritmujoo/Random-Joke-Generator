const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don't skeletons fight each other? They don't have the guts.",
  "What do you call fake spaghetti? An impasta!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "Why don't programmers like nature? It has too many bugs.",
  "Why do cows wear bells? Because their horns don't work.",
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
  "Why don't some fish like to play basketball? They are afraid of the net.",
  "Why did the cookie go to the hospital? Because it felt crummy.",
  "Why are pirates called pirates? Because they arrrrr.",
  "Why did the computer go to the doctor? Because it had a virus.",
  "Why did the grape stop in the middle of the road? Because it ran out of juice.",
  "What do you call a sleeping bull? A bulldozer.",
  "Why do elephants never use computers? They are afraid of the mouse.",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  "Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field.",
  "What do you call cheese that isn't yours? Nacho cheese.",
  "Why was the math book sad? Because it had too many problems.",
  "What do you call a bear with no teeth? A gummy bear.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why don’t oysters donate to charity? Because they’re shellfish.",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "I’m reading a book on anti-gravity. It’s impossible to put down!",
  "I told my computer I needed a break, and now it’s frozen.",
  "What did the zero say to the eight? Nice belt!",
  "I couldn’t figure out why I wasn’t getting any sleep, then I realized it was because I had too many sleepless nights.",
  "I used to play soccer, but I couldn’t get the goal right. It was a penalty!",
  "What do you call a pile of cats? A meow-tain.",
  "I tried to catch some fog yesterday. I mist.",
  "I don’t trust stairs. They’re always up to something.",
  "Why was the belt arrested? For holding up a pair of pants.",
  "Why do birds fly south in the winter? It’s faster than walking.",
  "What’s orange and sounds like a parrot? A carrot.",
  "Why don’t eggs tell jokes? Because they might crack up.",
  "What do you call a dinosaur with an extensive vocabulary? A thesaurus.",
  "I asked my dog what's two minus two. He said nothing.",
  "Why do cows make great musicians? They’re very good at moo-sic.",
  "Why did the chicken join a band? Because it had the drumsticks.",
  "What do you get when you cross a snowman and a dog? Frostbite.",
  "Why did the banana go to the doctor? Because it wasn’t peeling well.",
  "I couldn’t figure out how to put my seatbelt on, and then it clicked.",
  "What did the janitor say when he jumped out of the closet? Supplies!",
  "Why did the stadium get hot after the game? All the fans left.",
  "Why can’t your nose be 12 inches long? Because then it would be a foot!",
  "What do you call a can opener that doesn’t work? A can’t opener.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "Why do cows have hooves instead of feet? Because they lactose.",
  "What’s a skeleton’s least favorite room in the house? The living room.",
  "What’s the best way to watch a fly fishing tournament? Live stream.",
  "Why don’t some fish play piano? Because you can’t tuna fish.",
  "I told my wife she should embrace her mistakes. She gave me a hug.",
  "What’s a skeleton’s least favorite room? The living room.",
  "What did the baby corn say to the mama corn? Where’s popcorn?",
  "Why did the golfer bring an extra pair of socks? In case he got a hole in one.",
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "I don’t trust those trees. They’re shady.",
  "Why did the grape stop in the middle of the road? Because it ran out of juice.",
  "How does a penguin build its house? Igloos it together.",
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "Why do bananas never feel lonely? Because they hang out in bunches.",
  "What do you call a dog magician? A labracadabrador.",
  "Why don’t some couples go to the gym? Because some relationships don’t work out.",
  "I asked my computer for a joke, but it gave me a byte.",
  "What’s a skeleton’s favorite instrument? The trom-bone.",
  "Why don’t some skeletons like to play poker? They can’t keep a straight face.",
  "What’s a skeleton’s favorite instrument? The trom-bone.",
  "I tried to take a photo of some fog. I mist.",
  "What did one ocean say to the other? Nothing, they just waved.",
  "What did the triangle say to the circle? You’re pointless.",
  "I’m reading a book on anti-gravity. It’s impossible to put down!",
  "Why do cows wear bells? Because their horns don’t work.",
  "What do you call cheese that isn’t yours? Nacho cheese.",
  "What did one ocean say to the other? Nothing, they just waved.",
  "I have an inferiority complex, but it's not a very good one.",
  "What do you call a lazy kangaroo? A pouch potato.",
  "My wife and I laugh about how competitive we are. But I laugh more.",
  "My wife told me to stop impersonating a flamingo. I had to put my foot down.",
  "Have you heard about the guy who stole the calendar?! Well, he got 12 months!",
  "Why did the ghost go to rehab? He was addicted to boos.",
  "How did the hipster burn his mouth? He ate his pizza before it was cool.",
  "Have you heard about the band 1023MB? It’s probably because they haven’t got a gig yet…",
  "What did the janitor say when he jumped out of the closet? SUPPLIES!!!!",
  "I stayed up all night and tried to figure out where the sun was. Then it dawned on me.",
  "Why should you wear glasses to maths class? Because it helps with division.",
  "Why does it take pirates so long to learn the alphabet? Because they could spend years at C.",
  "I'm so good at sleeping I can do it with my eyes closed!",
  "What do you call someone who doesn't like carbs? Lack-Toast Intolerant.",
  "Why did the birthday boy wrap himself in paper? He wanted to live in the present.",
  "Want to hear a pizza joke? Nahhh, it's too cheesy!",
  "Why is it impossible to starve in the desert? Because of all the sand which is there!",
  "Why did the developer go broke? Because he used up all his cache.",
  "A man goes to the zoo. There's only ONE exhibit in the entire zoo. It was a Shih Tzu."
  
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
