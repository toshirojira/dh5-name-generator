var descriptionArray = new Array(
	"Unspeakable",
	"Holy",
	"Heavenly",
	"Nefarious",
	"Almighty",
	"Redonkulous",
	"Notorious",
	"Unbelievable",
	"Uncanny",
	"Abominable",
	"Divine",
	"Hallowed",
	"Righteous",
	"Sublime",
	"Messianic",
	"Ridiculous",
	"Foul",
	"Immortal",
	"Majestic",
	"Eerie",
	"Scandelous",
	"Frothy",
	"Whimsical",
	"Floppy",
	"Charismatic",
	"Penetrating",
	"Sweaty"
);

var exoticArray = new Array(
	"WonTon",
	"Bouillon",
	"Kung Fu",
	"Sunrise",
	"Affogato",
	"Beef",
	"Oolong",
	"Crying Tiger",
	"Lashing Dragon",
	"Bai Jiguan",
	"Golden",
	"Shimmering",
	"Kombucha",
	"Jin Fo",
	"Obi Wan",
	"Dusk",
	"Red Moon"
);

var weaponArray = new Array(
	"Greatword",
	"Crossbow",
	"Staff",
	"Blades",
	"Glaive",
	"Blade",
	"Sword",
	"Pillar",
	"Stick",
	"Knife",
	"Wand",
	"Bow",
	"Saber",
	"Cutlass",
	"Curtana",
	"Scimitar",
	"Machete",
	"Axe",
	"Bludgeon",
	"Bazooka",
	"Hatchet",
	"Brass Knuckles"
);

var ofTheArray = new Array(
	"of the Abyss",
	"of Lore",
	"of Holy Worth",
	"of the Wicked",
	"of the Immortals",
	"of the Righteous Few",
	"of Sorrow",
	"of Cloud Cuckoo Land",
	"of the Wretched Eight",
	"of the Lion's Den",
	"of Monk Rememberance",
	"of Time",
	"of the He-Said-She-Said",
	"of the Great Pontificator",
	"of Woe",
	"of the Wild Hordes"
);

var storyArray = new Array(
	"It is said this ancient weapon clocked a Gurk upon his pate and the Gurk cried for Mommy.",
	"While other weapons sleep, this one tirelessly renders Elysian fairies around the clock.",
	"It is said Wise Ditch once dispatched the balls of Kaseus with this glorious weapon, then pan fried the little marbles and ate them with fava beans and a nice chianti!",
	"While King Melvin mysteriously disappeared to jog the night away, this one weapon was used to raze Sup3rn00bs to the ground.",
	"When Zync unearthed this ancient work, he kept it unsheathed, naked, as per his M.O.",
	"It is noted in the Ender Scrolls, that Gurks who dared to wield this item, were instantly torched by the flaming angel Kriegerrus.",
	"Following the War of Chow Mein, Lord Bas, used this to prop up the empty, bloody skin bags of the Gurks who dared to test him.",
	"Antonio tried to swing this beast, but he's a little bitch and dropped it on his toe.",
	"This weapon belongs to Sharon Jones, war chief of the Dap Kings. It shines red, healthy with the blood of its foes.",
	"Unearthed by the sands of time, this weapon made Natty shit his pants in fear.",
	"Attempting to wield it during their surge to Top 10, Sup3rn00bs nonetheless failed, drowning in their own Sea of Sorrow.",
	"No gems can purchase this, no hack can acquire. So, basically, not for SAINT."
);

function generateName() {
	var randomDescription = descriptionArray[Math.floor(Math.random() * descriptionArray.length)];
	var randomExotic = exoticArray[Math.floor(Math.random() * exoticArray.length)];
	var randomWeapon = weaponArray[Math.floor(Math.random() * weaponArray.length)];
	var randomOfThe = ofTheArray[Math.floor(Math.random() * ofTheArray.length)];
	var randomStory = storyArray[Math.floor(Math.random() * storyArray.length)];
	
	var description = document.getElementById("description");
	var exotic = document.getElementById("exotic");
	var weapon = document.getElementById("weapon");
	var ofThe = document.getElementById("ofThe");
	var story = document.getElementById("story");
	
	description.innerHTML=randomDescription;
	exotic.innerHTML=randomExotic;
	weapon.innerHTML=randomWeapon;
	ofThe.innerHTML=randomOfThe;
	story.innerHTML=randomStory;
}