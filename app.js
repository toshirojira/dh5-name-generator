var descriptionArray = new Array(
	// adjectives,
	// strong, curious, descriptors
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
	"Charismatic",
	"Penetrating",
	"Sweaty",
	"Formidable",
	"Psychadelic",
	"Sanguine",
	"Blood Thirsty",
	"Drunken",
	"Illuminated",
	"Shimmering",
	"Malevolent",
	"Recalcitrant",
	"Unfettered",
	"Zealous",
	"Cosmic",
	"Stellar"
);

var exoticArray = new Array(
	// exotic,
	// ancient, aged, foreign
	"WonTon",
	"Bouillon",
	"Kung Fu",
	"Sunrise",
	"Affogato",
	"Beef",
	"Oolong",
	"Bai Jiguan",
	"Golden",
	"Kombucha",
	"Jin Fo",
	"Obi Wan",
	"Tiramisu",
	"Zeppole",
	"Fujian",
	"Guang-Xi",
	"Char Siu",
	"Guanyin",
	"Zao-Shen"
);

var weaponArray = new Array(
	// weapon types
	"Bow",
	"Staff",
	"Glaive",
	"Blade",
	"Sword",
	"Pillar",
	"Stick",
	"Knife",
	"Wand",
	"Saber",
	"Cutlass",
	"Curtana",
	"Scimitar",
	"Machete",
	"Axe",
	"Bludgeon",
	"Bazooka",
	"Hatchet",
	"Brass Knuckles",
	"Naked Fist",
	"Tomahawk",
	"Scythe",
	"Gauntlet",
	"Katana",
	"Trident",
	"Arbalest",
	"Revolver",
	"Incantation",
	"Sceptar",
	"Spell",
	"Hex"
);

var ofTheArray = new Array(
	"of the Abyss",
	"of Days Dead and Gone",
	"of Wrath",
	"of the Wicked",
	"of the Immortals",
	"of the Righteous Few",
	"of Sorrow",
	"of the Clouds",
	"of the Wretched Eight",
	"of Monk Rememberance",
	"of Time",
	"of the He-Said-She-Said",
	"of the Great Pontificator",
	"of Woe",
	"of the Wild Hordes",
	"of the Undead",
	"of the Chosen Twelve",
	"of Dreams",
	"of the Deep",
	"of Bone",
	"of the Mountain",
	"of the Nakatomi Tower",
	"of Olympus",
	"of the Long Winter",
	"of the Thirteen Heavens",
	"of the Starry Vault",
	"of Mycenae",
	"of the Azores"
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
	"No gems can purchase this, no hack can acquire. So, basically, not for SAINT.",
	"Red Velvet, star jammer, armory slammer, took this into battle and decimated even the memory of her foe."
);

var gifArray = new Array(
	"https://giphy.com/embed/APkGlErgBzB1S",
	"https://giphy.com/embed/3otOKtA77RkcN5Nk08",
	"https://giphy.com/embed/2Pk9newN8fkbu",
	"https://giphy.com/embed/DgHgSffICoOIM",
	"https://giphy.com/embed/1TeeymZ8F66yc",
	"https://giphy.com/embed/l2YSDjeuAppV2KpCo",
	"https://giphy.com/embed/ZVInKmVN7N4AM",
	"https://giphy.com/embed/3oEjI1erPMTMBFmNHi",
	"https://giphy.com/embed/mSaovYb6MCJmE",
	"https://giphy.com/embed/hELBTNNaxNWp2",
	"https://giphy.com/embed/110PaHIohJywso",
	"https://giphy.com/embed/XzE41LGp5WYE0",
	"https://giphy.com/embed/zJ2CCqGQC82Zi"
);

function generateName() {
	var randomDescription = descriptionArray[Math.floor(Math.random() * descriptionArray.length)];
	var randomExotic = exoticArray[Math.floor(Math.random() * exoticArray.length)];
	var randomWeapon = weaponArray[Math.floor(Math.random() * weaponArray.length)];
	var randomOfThe = ofTheArray[Math.floor(Math.random() * ofTheArray.length)];
	var randomStory = storyArray[Math.floor(Math.random() * storyArray.length)];
	var randomGif = gifArray[Math.floor(Math.random() * gifArray.length)];
	
	var description = document.getElementById("description");
	var exotic = document.getElementById("exotic");
	var weapon = document.getElementById("weapon");
	var ofThe = document.getElementById("ofThe");
	var story = document.getElementById("story");
	var gifSrc = document.getElementById("gif");

	var mainContent = $('.main-content');

	mainContent.fadeOut();
	
	setTimeout(function() { // wait 1000ms for the fadeOut to complete, then write the innerHTML
		description.innerHTML=randomDescription;
		exotic.innerHTML=randomExotic;
		weapon.innerHTML=randomWeapon;
		ofThe.innerHTML=randomOfThe;
		story.innerHTML=randomStory;
		// gifSrc.setAttribute('src', randomGif);
	}, 500);

	setTimeout(function() { // wait 1000ms for the innerHTML to write, then fade it all back in
		mainContent.fadeIn();
	}, 500);
}

generateName();

// store and return the number of combinations possible,
// and the number of combinations found.