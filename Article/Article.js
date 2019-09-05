/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: "Nov 5th, 2018",
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: "Javascript and You, ES6",
    date: "May 7th, 2019",
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: "React vs Angular vs Vue",
    date: "June 7th, 2019",
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: "Professional Software Development in 2019",
    date: "Jan 1st, 2019",
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: "Web Development 101",
    date: "Sep 4th, 2019",
    firstParagraph: `Cat ipsum dolor sit amet, be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day present belly, scratch hand when stroked you are a captive audience while 
    sitting on the toilet, pet me. Stick butt in face. Kick up litter favor packaging over toy or demand to be let outside at once, and expect owner to wait for me as i think about it but it's 3am, time to create some chaos . 
    I'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, guess i'll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me 
    with your foot?!?! leap into the air in greatest offense! adventure always for kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute? lick human with sandpaper tongue so russian blue. 
    Pooping rainbow while flying in a toasted bread costume in space. Kitty power good now the other hand, too find a way to fit in tiny box but your pillow is now my pet bed. I just saw other cats inside the house and nobody ask me before 
    using my litter box fall asleep upside-down i like big cats and i can not lie. Cats are the world. Cats are the world jump off balcony, onto stranger's head. If it smells like fish eat as much as you wish put toy mouse in food bowl run 
    out of litter box at full speed . Soft kitty warm kitty little ball of furr mouse so i love cuddles. Proudly present butt to human put toy mouse in food bowl run out of litter box at full speed . Groom forever, stretch tongue and leave 
    it slightly out, blep stand in doorway, unwilling to chose whether to stay in or go out. 
    `,

    secondParagraph: `Try to jump onto window and fall while scratching at wall plays league of legends let me in let me out let me in let me out let me in let me out who broke this door anyway for chew on cable. 
    I will ruin the couch with my claws. Make it to the carpet before i vomit mmmmmm scratch me there, elevator butt, yet thinking longingly about tuna brine, attack dog, run away and pretend to be victim. Sleeps on my head. 
    Find something else more interesting do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life or ask to be pet then attack owners hand sit in box, scratch at the door 
    then walk away stretch, caticus cuteicus. Sitting in a box no, you can't close the door, i haven't decided whether or not i wanna go out and do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter 
    i live in luxury cat life or sleep. Hide at bottom of staircase to trip human kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute? friends are not food, bite off human's toes, flop 
    over slap owner's face at 5am until human fills food dish. Scratch leg; meow for can opener to feed me. Cat cat moo moo lick ears lick paws love you, then bite you.  `,

    thirdParagraph: `Meowwww. If human is on laptop sit on the keyboard refuse to leave cardboard box, 
    weigh eight pounds but take up a full-size bed. Fall asleep on the washing machine chase red laser dot or playing with balls of wool and small kitty warm kitty little balls of fur or good now the other hand, 
    too for slap owner's face at 5am until human fills food dish. Massacre a bird in the living room and then look like the cutest and most innocent animal on the planet ignore the squirrels, you'll never catch them anyway 
    and fall asleep on the washing machine. Mewl for food at 4am. Always ensure to lay down in such a manner that tail can lightly brush human's nose there's a forty year old lady there let us feast yet nap all day sleep. 
    Bite nose of your human. Eats owners hair then claws head hide when guests come over. Do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life. Show belly floof tum, 
    tickle bum, jellybean footies curly toes for cough hairball on conveniently placed pants.`
  }
]; //array closes
//** SELECTORS **/
const site = document.querySelector(".articles");

//** ARTICLE **/
function createArticle(
  title,
  date,
  firstParagraph,
  secondParagraph,
  thirdParagraph
) {
  //* Created Elements
  const article = document.createElement("div");
  const articleTitle = document.createElement("h2");
  const articleDate = document.createElement("p");
  const articleParaOne = document.createElement("p");
  const articleParaTwo = document.createElement("p");
  const articleParaThree = document.createElement("p");
  const articleButton = document.createElement("span");

  //* Classes
  article.classList.add("article");
  articleTitle.classList.add("title");
  articleDate.classList.add("date");
  articleParaOne.classList.add("paragraphone");
  articleParaTwo.classList.add("paragraphtwo");
  articleParaThree.classList.add("paragraphthree");
  articleButton.classList.add("expandButton");

  //* Append Children
  article.appendChild(articleTitle);
  article.appendChild(articleDate);
  article.appendChild(articleParaOne);
  article.appendChild(articleParaTwo);
  article.appendChild(articleParaThree);
  article.appendChild(articleButton);

  //* Text Content
  articleTitle.textContent = title;
  articleDate.textContent = date;
  articleParaOne.textContent = firstParagraph;
  articleParaTwo.textContent = secondParagraph;
  articleParaThree.textContent = thirdParagraph;
  articleButton.textContent = "Read More";

  //* Event Listeners
  articleButton.addEventListener("click", event => {
    //classes
    article.classList.toggle("article-open");
  }); //event listerner close
  return article;
} //article

//* FOR EACH *//

data.forEach(data => {
  site.appendChild(createArticle(data.title, data.date, data.firstParagraph, data.secondParagraph, data.thirdParagraph))
})

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/
