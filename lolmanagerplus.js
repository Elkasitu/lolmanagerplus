function translateToRiot()
{
	var champElems = document.getElementsByClassName("champion-name");
	
	for (i = 0; i < champElems.length; i++)
	{
		switch(champElems[i].innerText)
		{
			case "Mad Doctor":
				champElems[i].innerText = "Dr. Mundo";
				break;
			case "Rock":
				champElems[i].innerText = "Malphite";
				break;
			case "Barbarian King":
				champElems[i].innerText = "Tryndamere";
				break;
			case "Grandmaster":
				champElems[i].innerText = "Jax";
				break;
			case "The Bull":
				champElems[i].innerText = "Alistar";
				break;
			case "Sad Mummy":
				champElems[i].innerText = "Amumu";
				break;
			case "Ice Bird":
				champElems[i].innerText = "Anivia";
				break;
			case "Pyro Girl":
				champElems[i].innerText = "Annie";
				break;
			case "Frost Archer":
				champElems[i].innerText = "Ashe";
				break;
			case "Rocket Grab":
				champElems[i].innerText = "Blitzcrank";
				break;
			case "Chew'Gozz":
				champElems[i].innerText = "Cho'Gath";
				break;
			case "Valkyrie Pilot":
				champElems[i].innerText = "Corki";
				break;
			case "Invisible lady":
				champElems[i].innerText = "Evelynn";
				break;
			case "The Scarecrow":
				champElems[i].innerText = "Fiddlesticks";
				break;
			case "Pirate King":
				champElems[i].innerText = "Gangplank";
				break;
			case "Professor Brains":
				champElems[i].innerText = "Heimerdinger";
				break;
			case "Weather Girl":
				champElems[i].innerText = "Janna";
				break;
			case "Death Reaper":
				champElems[i].innerText = "Karthus";
				break;
			case "Void Walker":
				champElems[i].innerText = "Kassadin";
				break;
			case "Blade Dancer":
				champElems[i].innerText = "Katarina";
				break;
			case "Archangel":
				champElems[i].innerText = "Kayle";
				break;
			case "Blade Master":
				champElems[i].innerText = "Master Yi";
				break;
			case "Dark Angel":
				champElems[i].innerText = "Morgana";
				break;
			case "The Cane":
				champElems[i].innerText = "Nasus";
				break;
			case "Yeti Rider":
				champElems[i].innerText = "Nunu";
				break;
			case "Armadillo":
				champElems[i].innerText = "Rammus";
				break;
			case "Mana":
				champElems[i].innerText = "Ryze";
				break;
			case "Joker":
				champElems[i].innerText = "Shaco";
				break;
			case "Chemist":
				champElems[i].innerText = "Singed";
				break;
			case "Undead Juggernaut":
				champElems[i].innerText = "Sion";
				break;
			case "Boomerang":
				champElems[i].innerText = "Sivir";
				break;
			case "Starlight Healer":
				champElems[i].innerText = "Soraka";
				break;
			case "Gem Knight":
				champElems[i].innerText = "Taric";
				break;
			case "Mushrooms":
				champElems[i].innerText = "Teemo";
				break;
			case "Rocket Girl":
				champElems[i].innerText = "Tristana";
				break;
			case "Card Master":
				champElems[i].innerText = "Twisted Fate";
				break;
			case "Plague Rat":
				champElems[i].innerText = "Twitch";
				break;
			case "Evil Master":
				champElems[i].innerText = "Veigar";
				break;
			case "Werewolf":
				champElems[i].innerText = "Warwick";
				break;
			case "Time Bomber":
				champElems[i].innerText = "Zilean";
				break;
			default:
				champElems[i].innerText = champElems[i].innerText;
			
		}
	}
}