const firstNames = [
    "Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "George", "Hannah", 
  "Iris", "Jasper", "Kara", "Liam", "Mira", "Noah", "Olivia", "Piper", 
  "Quinn", "Rowan", "Silas", "Talia", "Uriel", "Vera", "Wes", "Xander", 
  "Yara", "Zane", "Aiden", "Bridget", "Cassian", "Dorian", "Elara", "Finn", 
  "Gwen", "Hector", "Isla", "Juno", "Kai", "Leona", "Magnus", "Nina", "Oscar",
  "Penelope", "Quentin", "Riley", "Samantha", "Thomas", "Ursula", "Vincent", 
  "Willow", "Xavier", "Yuna", "Zander", "Anya", "Boris", "Chloe", "Darius", 
  "Eleanor", "Finn", "Greta", "Hugo", "Ivy", "Jake", "Katrina", "Liam", "Maya"
];

const lastNames = [
  "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", 
  "Thorne", "Blackwood", "Ravencrest", "Stormwind", "Silverleaf", "Ironfoot", 
  "Goldmane", "Stonehammer", "Brightwood", "Ashdown", "Greystone", "Hawke", 
  "Ironfist", "Rivers", "Flint", "Winterborn", "Lightbringer", "Shadowmend", 
  "Firebrand", "Drake", "Bane", "Stoneshield", "Brighthelm", "Moonbeam", 
  "Starlight", "Sunbeam", "Cloudchaser", "Windrunner", "Earthwalker", "Seafarer",
  "Skydancer", "Fireheart", "Icefang", "Stormcaller", "Shadowstalker", 
  "Lightbringer", "Darkwhisper", "Moonwatcher", "Stargazer", "Sunseeker"
];

const sexes = ["Male", "Female", "Non-binary", "Genderfluid", "Agender"];

const races = [
  "Human", "Elf", "Dwarf", "Halfling", "Gnome", "Half-Orc", "Tiefling", 
  "Dragonborn", "Half-Elf", "Tabaxi", "Aarakocra", "Genasi", "Firbolg", 
  "Kenku", "Goliath"
];

const classes = [
  "Fighter", "Wizard", "Rogue", "Cleric", "Paladin", "Bard", "Ranger", "Druid", 
  "Warlock", "Sorcerer", "Monk", "Barbarian", "Artificer", "Blood Hunter"
];

const backgrounds = [
  "Acolyte", "Criminal", "Folk Hero", "Noble", "Sage", "Soldier", "Merchant", 
  "Artisan", "Urchin", "Pirate", "Entertainer", "Hermit", "Gladiator", "Outlander", 
  "Charlatan", "Spy", "Knight", "Haunted One", "Courtier", "Adventurer"
];

const professions = [
  "Blacksmith", "Farmer", "Merchant", "Guard", "Sailor", "Tailor", "Innkeeper", 
  "Miner", "Alchemist", "Apothecary", "Hunter", "Fisherman", "Librarian", 
  "Jeweler", "Cook", "Stable Master", "Tavern Bard", "Cobbler", "Cartographer", 
  "Gravedigger", "Herbalist", "Scribe", "Shipwright", "Weaver", "Woodcutter", 
  "Leatherworker", "Baker", "Carpenter", "Mason", "Smith", "Potter", "Weaver", 
  "Sculptor", "Painter", "Musician", "Dancer", "Actor", "Writer", "Artist", 
  "Engineer", "Inventor", "Scientist", "Doctor", "Lawyer", "Teacher", "Priest",
  "Philosopher", "Historian", "Archaeologist", "Detective", "Spy", "Assassin",
  "Thief", "Gambler", "Beggar", "Prostitute", "Criminal", "Gangster"
];

const demeanors = [
  "Friendly", "Suspicious", "Arrogant", "Shy", "Eccentric", "Calm", "Nervous", 
  "Jovial", "Stern", "Charming", "Mysterious", "Grumpy", "Energetic", "Melancholic", 
  "Proud", "Dutiful", "Lazy", "Stoic", "Hot-tempered", "Optimistic", "Pessimistic"
];

const motivations = [
  "Wealth", "Power", "Knowledge", "Love", "Revenge", "Adventure", "Fame", "Peace", 
  "Justice", "Redemption", "Freedom", "Glory", "Survival", "Family", "Honor", 
  "Curiosity", "Vengeance", "Escape", "To prove themselves", "Duty"
];

const secrets = [
  "Hidden treasure buried beneath their family's ancestral home",
  "A dark past involving forbidden magic that could resurface at any time",
  "A secret identity as a royal heir of a long-lost kingdom",
  "Forbidden love with someone from an enemy faction or race",
  "An ancient curse that threatens not only them but their entire bloodline",
  "They are the true heir to a powerful and ancient artifact, but someone else is after it",
  "A betrayal of a close friend that resulted in that friend's downfall, now haunting them",
  "They possess a hidden power that could change the world, but they fear using it",
  "They know the location of a long-lost artifact that many are willing to kill for",
  "They were once part of a secretive assassin's guild and are now in hiding",
  "Their family was involved in a great betrayal that led to the downfall of a noble house",
  "They once made a deal with a powerful demon, and now that demon is coming to collect",
  "They are the last living member of an ancient and forgotten race",
  "They are cursed to forget everything they experience every seven years",
  "They possess knowledge of an ancient, apocalyptic prophecy",
  "They are in hiding from a notorious crime syndicate they once worked for",
  "They have a twin that they believe died, but is secretly alive and working against them",
  "They are a member of an underground rebellion aiming to overthrow the local government",
  "They once betrayed their kingdom to enemy forces and now live in shame",
  "They discovered a portal to another plane but are afraid of what lies beyond it"
];

const quirks = [
  "Talks to plants", "Always rhymes", "Collects odd trinkets", "Afraid of heights", 
  "Constantly hums", "Never blinks", "Speaks in third person", "Obsessed with cleanliness", 
  "Always has a pocket full of snacks", "Compulsively lies, even about small things", 
  "Afraid of small animals", "Wears mismatched shoes", "Believes they are constantly being watched", 
  "Has a fascination with fire", "Refuses to eat anything green", "Has a collection of strange masks", 
  "Makes jokes in serious situations", "Whistles when they're nervous", "Cannot remember names", 
  "Hates the sound of music", "Reads people's fortunes using random objects", 
  "Constantly flips a coin and bases decisions on the result", "Writes down everything they say", 
  "Always smells faintly of garlic", "Incredibly superstitious about numbers", 
  "Thinks they are cursed but aren't", "Believes every stranger is an old friend in disguise", 
  "Compulsively collects buttons", "Taps their foot to an unheard rhythm", 
  "Refuses to ever walk under a ladder", "Never sleeps in the same place twice", 
  "Constantly fidgets with their hands", "Always carries a flower in their pocket", 
  "Can only sleep while standing up"
];

const items = [
  "Mysterious key with strange engravings that seem to change every time it's viewed",
  "Old map of a forgotten city that no longer appears on any other charts",
  "Family heirloom necklace that is said to protect its wearer from curses",
  "Lucky charm that was found in a dragon's hoard, rumored to bring great fortune",
  "Strange coin that always lands on its edge no matter how it's flipped",
  "Magical trinket that glows faintly whenever danger is near",
  "Ancient book written in a long-dead language, with illustrations of mysterious rituals",
  "Unusual pet, a small, glowing lizard that never eats or sleeps",
  "Broken sword hilt that vibrates slightly when near magic",
  "Tattered cloak that seems to blend into the surroundings when worn",
  "Music box that plays a haunting tune when opened, but no one knows the melody",
  "Compass that doesn't point north, but always points to something the user seeks",
  "A glass vial that contains a swirling mist, said to hold the soul of an ancient warrior",
  "A black candle that cannot be extinguished by any normal means",
  "A pocket watch that stops time for a few seconds when wound backward",
  "A ring that makes the wearer invisible, but only to cats",
  "A skull that whispers cryptic warnings when danger approaches",
  "A mirror that shows the reflection of one's true self, no matter their disguise",
  "A shield that absorbs light and becomes nearly invisible in the dark",
  "A feather quill that writes on its own, but only in riddles",
      "A mundane-looking rock that is actually a powerful artifact",
    "A simple wooden staff that can transform into various weapons",
    "A worn leather journal filled with cryptic symbols and codes",
    "A common house key that unlocks a hidden door in a seemingly ordinary building",
    "A pocketknife with a hidden compartment that contains a small potion",
    "A tattered cloak that provides temporary invisibility when worn backwards",
    "A pair of ordinary-looking gloves that grant enhanced dexterity",
    "A musical instrument that plays a soothing melody when played correctly",
    "A compass that points to the nearest source of fresh water",
    "A lantern that never runs out of oil",
    "A small, cuddly teddy bear that is actually a powerful guardian spirit",
    "A broken mirror that shows glimpses of alternate realities",
    "A pair of boots that grant the wearer incredible speed",
    "A simple wooden box that contains a treasure map with hidden clues",
    "A pocket watch that can stop time for a short period",
    "A ring that grants the wearer protection from elemental damage",
    "A necklace that grants the wearer resistance to poison",
    "A cloak that grants the wearer immunity to cold",
    "A pair of gloves that grant the wearer immunity to fire",
    "A shield that absorbs magical energy",
    "A broken pocket watch",
    "A rusty key",
    "A worn-out pair of socks",
    "A chipped mug",
    "A faded book",
    "A cracked mirror",
    "A tangled necklace",
    "A dusty old map",
    "A half-eaten apple",
    "A pair of mismatched gloves",
    "A torn piece of paper",
    "A loose tooth",
    "A shiny pebble",
    "A dried-up flower",
    "A broken seashell"
];

const tavernNames = [
    "The Drunken Dragon", "The Rusty Sword", "The Prancing Pony", "The Silver Flagon",
    "The Laughing Bard", "The Sleeping Giant", "The Salty Sailor", "The Witch's Brew",
    "The Golden Goblin", "The Whispering Willow", "The Shady Tavern", "The Quiet Corner", "The Last Resort", "The Friendly Inn",
    "The Jolly Jack", "The Golden Dragon", "The Silver Rose", "The Copper Kettle",
    "The Iron Anchor", "The Wooden Wheel"
];

const campDescriptions = [
    "A small clearing surrounded by dense forest",
    "A rocky outcrop overlooking a valley",
    "A secluded beach with a natural cove",
    "A grassy meadow near a babbling brook",
    "A sheltered spot at the base of a cliff",
    "A peaceful clearing surrounded by a babbling brook",
    "A secluded grove with towering ancient trees",
    "A rocky outcrop overlooking a vast, rolling plain",
    "A hidden cave with a small waterfall",
    "A deserted windmill perched on a hilltop",
    "A small clearing surrounded by a dense thicket",
    "A rocky outcropping with a panoramic view",
    "A secluded grove with a babbling brook",
    "A grassy meadow dotted with wildflowers",
    "A deserted windmill perched on a hilltop"
];

const staffRoles = [
    "Bartender", "Waitress", "Cook", "Bouncer", "Entertainer", "Stablehand", "Innkeeper", "Stablemaster", "Cook's Assistant", "Barmaid", "Musician", "Gambler"
];

const regions = {
    "Township": [
        "A street performer requests a donation",
        "A beggar asks for alms",
        "A child offers to sell a shiny trinket",
        "A suspicious character follows the party",
        "A local guard asks for identification",
        "A merchant tries to sell the party a faulty item",
        "A street vendor offers a delicious snack",
        "A mysterious figure leaves a cryptic message",
        "A noise is heard coming from an abandoned building",
        "A group of children play a game in the street",
        "A street fight breaks out nearby",
        "A carriage accident occurs in front of the party",
        "A sudden downpour forces the party to seek shelter",
        "A public execution takes place in the town square",
        "A festival is taking place in the city"
    ],
    "Bar": [
        "A drunken patron starts a fight",
        "A mysterious figure whispers a secret to the party",
        "A bard sings a haunting song",
        "A gambler offers a risky bet",
        "A suspicious character slips a note under the party's table",
        "A rat scurries across the floor",
        "A ghost is rumored to haunt the tavern",
        "A secret door is discovered behind a bookshelf",
        "A hidden passageway leads to a secret room",
        "A hidden trap door is discovered in the floor",
        "A secret compartment is found in a table",
        "A secret message is written in invisible ink on a napkin",
        "A secret tunnel leads to a hidden lair",
        "A secret room contains a hidden treasure",
        "A secret passageway leads to a forbidden area"
    ],
    "Forest": [
        "A group of hostile pixies steals something valuable from the party",
        "The party stumbles upon a hidden druid grove",
        "A talking tree requests help with an urgent matter",
        "A group of mischievous sprites play pranks on the party",
        "The party encounters a wise old hermit who offers advice",
        "A swarm of ravenous insects attacks the party",
        "A shadowy figure stalks the party through the trees.",
        "A mysterious portal appears in the heart of the forest.",
        "An ancient, gnarled tree whispers secrets to the party.",
        "A hidden underground river flows beneath the forest floor.",
        "A herd of wild deer stampede through the forest, nearly trampling the party.",
        "A group of friendly satyrs offer the party a feast.",
        "A swarm of poisonous spiders attacks the party from their hidden webs.",
        "A lone wolf howls at the moon, drawing the attention of other creatures.",
        "A hidden treasure chest is buried at the base of a towering oak tree.",
        "A giant, sentient mushroom offers the party knowledge in exchange for a favor.",
        "A group of bandits sets up an ambush in the dense undergrowth.",
        "A magical aura surrounds a particular area of the forest, causing strange effects.",
        "A group of mischievous sprites steal the party's belongings and hide them in the forest.",
        "A talking owl warns the party of impending danger.",
        "A hidden grove of glowing mushrooms illuminates the forest floor.",
        "A group of friendly dryads offer the party shelter in their hidden grove.",
        "A mysterious fog rolls through the forest, obscuring everything from view.",
        "A group of ancient, towering trees form a natural circle, radiating a powerful energy.",
        "A hidden waterfall cascades down a cliff, creating a natural pool.",
        "A group of friendly treants offer the party assistance in their quest."
    ],
    "Mountains": [
        "A sudden rockslide blocks the path ahead",
        "The party discovers an abandoned dwarven mine",
        "A griffon swoops down, looking for an easy meal",
        "A yeti guards a hidden treasure",
        "The party discovers a secret passage leading to a hidden temple",
        "A mountain goat leads the party to a hidden waterfall",
        "A hidden cave contains a hoard of dragon's treasure.",
        "A group of snow trolls attack the party from the icy peaks.",
        "A mountain eagle soars overhead, surveying the landscape.",
        "A hidden waterfall cascades down a rocky cliff, creating a natural pool.",
        "A group of friendly mountain goats lead the party to a hidden pass.",
        "A sudden avalanche forces the party to seek shelter in a nearby cave.",
        "A mysterious voice echoes through the mountains, guiding the party towards a hidden secret.",
        "A group of friendly dwarves offer the party hospitality in their underground city.",
        "A giant, sentient mountain offers the party a test of strength.",
        "A hidden temple is carved into the side of a mountain, filled with ancient artifacts.",
        "A group of frost giants guard a frozen lake, searching for prey.",
        "A powerful storm sweeps through the mountains, forcing the party to seek shelter.",
        "A hidden hot spring bubbles up from the ground, offering warmth and relaxation.",
        "A group of friendly rock gnomes live in the crevices of the mountains, offering the party information.",
        "A hidden cave contains a magical crystal that grants the party special abilities.",
        "A group of mountain climbers are stranded on a cliff face, needing rescue.",
        "A mysterious fog rolls through the mountains, obscuring everything from view.",
        "A group of ancient, towering mountains form a natural circle, radiating a powerful energy.",
        "A hidden waterfall cascades down a rocky cliff, creating a natural pool.",
        "A group of friendly mountain giants offer the party protection."
    ],
    "Desert": [
        "A sandstorm forces the party to seek shelter",
        "The party finds an oasis, but it's not what it seems",
        "Ancient ruins emerge from the shifting sands",
        "A mirage leads the party astray",
        "The party encounters a caravan of merchants seeking protection",
        "A hidden oasis is guarded by a powerful guardian",
        "A group of sandworms burrow beneath the desert floor, threatening to swallow the party whole.",
        "A hidden oasis is guarded by a powerful sphinx.",
        "A group of nomadic merchants offer the party supplies and information.",
        "A powerful sandstorm forces the party to seek shelter in a hidden cave.",
        "A group of desert bandits ambush the party from a hidden dune.",
        "A mysterious creature lurks in the shadows of the desert, watching the party.",
        "A hidden temple is buried beneath the shifting sands, filled with ancient treasures.",
        "A group of friendly genies offer the party three wishes.",
        "A powerful djinn is trapped within a magical lamp, waiting to be freed.",
        "A group of desert nomads offer the party guidance and protection.",
        "A hidden oasis is guarded by a powerful guardian.",
        "A group of friendly desert snakes guide the party to a hidden treasure.",
        "A powerful sandstorm forces the party to seek shelter in a hidden oasis.",
        "A group of friendly desert nomads offer the party hospitality in their tent.",
        "A hidden cave contains a powerful artifact that grants the party special abilities.",
        "A group of desert bandits ambush the party from a hidden dune.",
        "A mysterious fog rolls through the desert, obscuring everything from view.",
        "A group of ancient, towering sand dunes form a natural circle, radiating a powerful energy.",
        "A hidden waterfall cascades down a rocky cliff, creating a natural pool.",
        "A group of friendly desert dragons offer the party protection."
    ],
    "Coast": [
        "A shipwreck washes ashore with a lone survivor",
        "Sirens' songs lure unsuspecting sailors to their doom",
        "A kraken's tentacles are spotted on the horizon",
        "A sea serpent attacks the party's ship",
        "The party finds a hidden treasure chest on a deserted island",
        "A storm forces the party to seek shelter in a secluded cove",
        "A group of friendly mermaids offer the party guidance and protection.",
        "A powerful storm forces the party's ship to seek shelter in a hidden cove.",
        "A group of sea monsters attack the party's ship.",
        "A hidden treasure chest is buried on a deserted island.",
        "A mysterious fog rolls in from the sea, obscuring everything from view.",
        "A group of friendly sea elves offer the party hospitality in their underwater city.",
        "A powerful whirlpool threatens to swallow the party's ship.",
        "A group of pirates ambush the party's ship.",
        "A hidden treasure chest is buried on a deserted island.",
        "A powerful storm forces the party's ship to seek shelter in a hidden cove.",
        "A group of friendly sea turtles lead the party to a hidden island.",
        "A powerful whirlpool threatens to swallow the party's ship.",
        "A group of friendly sea elves offer the party hospitality in their underwater city.",
        "A powerful storm forces the party's ship to seek shelter in a hidden cove.",
        "A group of friendly sea turtles lead the party to a hidden island.",
        "A powerful whirlpool threatens to swallow the party's ship.",
        "A group of friendly sea elves offer the party hospitality in their underwater city.",
        "A powerful storm forces the party's ship to seek shelter in a hidden cove.",
        "A group of friendly sea turtles lead the party to a hidden island."
    ]
};

// New noticeboards data
const noticeboardsData = {
    tavernNotices: [
        "Wanted: Brave adventurers to clear out a goblin camp. Reward offered.",
        "Lost cat: Fluffy white Persian. Last seen near the old mill. Reward for safe return.",
        "Seeking skilled alchemist for potion brewing. Inquire at the Magician's Guild.",
        "Bodyguards needed for merchant caravan. Good pay, dangerous work.",
        "Magic show tonight at the Silver Unicorn Inn! Half-price drinks for all attendees.",
        "Seeking information on the whereabouts of a missing nobleman. Discretion assured.",
        "Rat infestation in the sewers. City offering bounty per rat tail turned in.",
        "Local baker seeks rare spice for special recipe. Will pay handsomely.",
        "Arm wrestling competition this weekend. Entry fee 5 gold. Winner takes all!",
        "Seeking brave souls to test experimental teleportation device. Volunteers compensated.",
        "Local militia recruiting. Free training and equipment provided.",
        "Ghost sightings reported in old mansion. Paranormal investigators wanted.",
        "Rare book collector seeking tomes on ancient magic. Will trade or purchase.",
        "Experienced guide needed for expedition into the nearby mountains.",
        "Annual pie-eating contest next week. Grand prize: Golden rolling pin!"
    ],
    streetGossip: [
        "Did you hear about the strange lights seen in the old tower last night?",
        "They say the baker's daughter ran off with a traveling bard. How scandalous!",
        "I heard the mayor's been making secret deals with the thieves' guild.",
        "There's talk of a hidden treasure buried somewhere in the town square.",
        "Rumor has it that the blacksmith's apprentice is actually a disguised prince.",
        "They say the old witch in the forest can brew a potion to cure any ailment.",
        "I've heard whispers that dragons have been spotted in the northern mountains.",
        "There's a new merchant in town selling exotic goods from far-off lands.",
        "Some say the abandoned mine is haunted by the ghosts of trapped miners.",
        "Word is, the king's taxes are going to double next month. People are furious!",
        "I overheard that the local innkeeper used to be a famous adventurer.",
        "There's a rumor that a powerful artifact is hidden beneath the city.",
        "They say the town guard captain is secretly in love with the court jester.",
        "I heard the harvest might fail this year due to strange magical weather.",
        "There's talk of rebellion brewing in the nearby villages. Exciting times!"
    ],
    townNotices: [
        "Town hall meeting this evening: Discussion on increased taxes and infrastructure improvements.",
        "Volunteers needed for the harvest festival. Sign up at the mayor's office.",
        "Reward offered for information leading to the capture of the Shadowcloak Bandit.",
        "New trade agreement with neighboring kingdom. Merchants wanted for expanded market.",
        "Public execution of notorious criminal scheduled for next week in the town square.",
        "Mage's Guild offering free magic lessons to gifted youngsters every Moonday.",
        "Local hero seeking companions for dangerous quest. Inquire at the Rusty Sword Tavern.",
        "Royal census to begin next month. All citizens required to participate.",
        "Artisan's fair coming soon. Craftspeople invited to showcase their wares.",
        "Epidemic warning: Strange illness reported in nearby village. Take precautions.",
        "New city wall construction to begin. Workers needed, apply at foreman's tent.",
        "Annual archery contest announced. Winner to receive royal commendation.",
        "Adventurer's Guild now accepting new members. Prove your worth to join!",
        "Donations sought for orphanage expansion. Contact local temple for details.",
        "Unexplained disappearances near the old forest. Increased patrols implemented."
    ]
};

const trustLevels = [
    "Overt Enemy",
    "Hostile",
    "Unfriendly",
    "Wary",
    "Neutral",
    "Cordial",
    "Friendly",
    "Loyal",
    "Devoted Ally"
];

const trustEvents = {
    low: [
        "The NPC spreads false rumors about the party.",
        "The NPC refuses to help the party, even in dire circumstances.",
        "The NPC secretly reports the party's activities to local authorities.",
        "The NPC attempts to sabotage the party's equipment.",
        "The NPC tries to turn other NPCs against the party."
    ],
    medium: [
        "The NPC hesitantly shares some useful information with the party.",
        "The NPC offers limited assistance, but at a high price.",
        "The NPC invites the party to a social event, but keeps a watchful eye on them.",
        "The NPC asks the party for a small favor to test their reliability.",
        "The NPC shares a minor secret with the party as a show of growing trust."
    ],
    high: [
        "The NPC becomes a valuable informant, sharing crucial information.",
        "The NPC offers substantial help or resources to the party.",
        "The NPC introduces the party to influential contacts.",
        "The NPC entrusts the party with a personal quest or mission.",
        "The NPC reveals a major secret that could impact the campaign's storyline."
    ]
};

const weatherEvents = {
    "Clear skies": [
        "A rainbow appears in the distance, arching over a nearby landmark.",
        "The bright sunlight reveals hidden details in the surrounding environment.",
        "A flock of colorful birds soars overhead, their feathers glinting in the sunlight.",
        "The clear weather allows for exceptionally long-distance visibility.",
        "A gentle breeze carries the scent of nearby flowers."
    ],
    "Light rain": [
        "The light rain creates a soothing ambiance, perfect for quiet conversation.",
        "Small puddles form, reflecting the world around them like tiny mirrors.",
        "The rain brings out earthy scents from the ground and vegetation.",
        "A colorful array of umbrellas appears as people seek shelter.",
        "The gentle patter of raindrops creates a natural rhythm."
    ],
    "Heavy rain": [
        "Flash flooding threatens low-lying areas.",
        "The heavy rain obscures vision, making navigation difficult.",
        "Lightning illuminates the sky, followed by booming thunder.",
        "The downpour creates a cacophony of sound, drowning out normal conversation.",
        "Roads and paths become slick and treacherous."
    ],
    "Thunderstorm": [
        "A lightning bolt strikes a nearby tree, causing it to catch fire.",
        "The deafening thunder causes animals to panic and flee.",
        "Powerful winds accompany the storm, threatening to knock over unsecured objects.",
        "The air feels charged with electricity.",
        "Hail begins to fall, ranging from pea-sized to golf ball-sized."
    ],
    "Foggy": [
        "Mysterious shapes loom in the fog, playing tricks on the eyes.",
        "Sounds become muffled and disorienting in the thick mist.",
        "The fog seems to swirl and move with a life of its own.",
        "Lanterns and lights create eerie glows in the misty air.",
        "Navigation becomes challenging as familiar landmarks disappear in the fog."
    ],
    "Windy": [
        "Loose objects become dangerous projectiles in the strong wind.",
        "Trees sway violently, with some weaker branches snapping off.",
        "The wind howls through buildings and natural formations, creating an eerie soundtrack.",
        "Sand or dust is kicked up, reducing visibility and irritating eyes.",
        "Flying creatures struggle against the powerful gusts."
    ],
    "Scorching heat": [
        "The intense heat causes mirages to appear in the distance.",
        "Water sources begin to dry up, becoming precious commodities.",
        "The hot air shimmers, distorting distant views.",
        "Plants and vegetation wilt under the oppressive heat.",
        "The ground becomes hot enough to be uncomfortable to touch."
    ],
    "Freezing cold": [
        "Exposed water freezes, creating dangerous icy patches.",
        "Breath becomes visible in the frigid air, creating small clouds.",
        "Fingers and exposed skin quickly become numb in the cold.",
        "A layer of frost forms on surfaces, creating a glittering effect.",
        "The cold causes metal objects to contract, sometimes resulting in creaking sounds."
    ],
    "Partly cloudy": [
        "Cloud shapes inspire imaginative interpretations among observers.",
        "Sunbeams occasionally break through the clouds, creating spotlight effects on the ground.",
        "The mix of sun and clouds creates a pleasant, moderate temperature.",
        "Shadows and light play across the landscape as clouds move overhead.",
        "The changing light conditions alter the appearance of colors in the environment."
    ],
    "Overcast": [
        "The gloomy weather seems to dampen spirits and energy levels.",
        "The diffused light creates a monotone appearance in the surroundings.",
        "A sense of impending rain hangs in the air, though it has yet to fall.",
        "The thick cloud cover makes it difficult to determine the time of day.",
        "Birds and other animals become unusually quiet in the dreary conditions."
    ]
};

const weatherConditions = [
    "Clear skies",
    "Light rain",
    "Heavy rain",
    "Thunderstorm",
    "Foggy",
    "Windy",
    "Scorching heat",
    "Freezing cold",
    "Partly cloudy",
    "Overcast"
];

const weatherEffects = {
    "Clear skies": "Improved mood for outdoor activities",
    "Light rain": "Slight inconvenience for travelers",
    "Heavy rain": "Difficult travel conditions, possible flooding",
    "Thunderstorm": "Dangerous conditions, possible property damage",
    "Foggy": "Reduced visibility, increased chance of getting lost",
    "Windy": "Difficult for ranged attacks, potential for fires to spread",
    "Scorching heat": "Risk of heatstroke, increased water consumption",
    "Freezing cold": "Risk of hypothermia, icy conditions",
    "Partly cloudy": "Pleasant conditions, no significant effects",
    "Overcast": "Gloomy atmosphere, slight chance of rain"
};



// Modify your initializeExtension 

// Function to initialize the extension
function initializeExtension() {
    OBR.onReady(async () => {
        const role = await OBR.player.getRole();
        const isGM = role === "GM";

        console.log("Player role:", role);
        console.log("Is GM:", isGM);
        if (isGM) {
            console.log("Initializing app for GM");
            initializeApp();
            showExtension();
        } else {
            console.log("Showing player message");
            showPlayerMessage();
        }

        // Set up the action to open/close the extension
        OBR.action.onOpenChange((open) => {
            console.log("Action open state changed:", open);
            if (open) {
                if (isGM) {
                    console.log("Showing extension for GM");
                    showExtension();
                } else {
                    console.log("Showing player message");
                    showPlayerMessage();
                }
            } else {
                console.log("Hiding extension");
                hideExtension();
            }
        });
    });
}

// Function to show the extension
function showExtension() {
    console.log("showExtension called");
    document.body.style.display = 'block';
}

// Function to hide the extension
function hideExtension() {
    console.log("hideExtension called");
    document.body.style.display = 'none';
}

// Function to show a message to players
function showPlayerMessage() {
    console.log("showPlayerMessage called");
    // Hide the main content
    document.body.innerHTML = '';

    // Create and show the GM-only message
    const message = document.createElement('div');
    message.textContent = 'GM only';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 18px;
    `;
    document.body.appendChild(message);

    // Automatically close the extension after a short delay
    setTimeout(() => {
        console.log("Closing extension for player");
        OBR.action.close();
    }, 2000);
}

// Event listener for DOMContentLoaded to initialize the extension
document.addEventListener('DOMContentLoaded', () => {
    if (window.OBR) {
        initializeExtension();
    } else {
        console.error("OBR is not defined. Make sure the Owlbear Rodeo SDK is properly loaded.");
        initializeApp(); // Fall back to normal initialization if OBR is not available
    }
});




function generateNPCEvent(npcName) {
    const savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    const npc = savedNPCs[npcName];
    
    if (!npc) return "NPC not found";

    let eventCategory;
    if (npc.trust <= 2) eventCategory = 'low';
    else if (npc.trust <= 5) eventCategory = 'medium';
    else eventCategory = 'high';

    const event = getRandomElement(trustEvents[eventCategory]);
    return `${npc.name}: ${event}`;
}

function displayNPCEvents() {
    const savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    let eventsHTML = '<h3>NPC Events</h3><ul>';
    
    for (let npcName in savedNPCs) {
        const event = generateNPCEvent(npcName);
        eventsHTML += `<li>${event}</li>`;
    }
    
    eventsHTML += '</ul>';
    document.getElementById('npcEvents').innerHTML = eventsHTML;
}

// Add this to your initialization function
document.getElementById('generateNPCEventsBtn').addEventListener('click', displayNPCEvents);



// GENERATE WEATHER

function generateWeather() {
    const condition = getRandomElement(weatherConditions);
    return {
        condition: condition,
        effect: weatherEffects[condition]
    };
}

function displayWeather() {
    const weather = generateWeather();
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <h3>Current Weather</h3>
        <p><strong>Condition:</strong> ${weather.condition}</p>
        <p><strong>Effect:</strong> ${weather.effect}</p>
    `;
}

function initializeNoticeboardButtons() {
    const buttons = ['tavernNoticesBtn', 'streetGossipBtn', 'townNoticesBtn'];
    buttons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', () => {
                displayNotices(btnId.replace('Btn', ''));
            });
        }
    });
}

function generateWeatherEvent() {
    const currentWeather = generateWeather();
    const event = getRandomElement(weatherEvents[currentWeather.condition]);
    return { weather: currentWeather, event: event };
}

function displayWeatherEvent() {
    const weatherEvent = generateWeatherEvent();
    const weatherEventInfo = document.getElementById('weatherEventInfo');
    weatherEventInfo.innerHTML = `
        <h3>Weather Event</h3>
        <p><strong>Current Weather:</strong> ${weatherEvent.weather.condition}</p>
        <p><strong>Effect:</strong> ${weatherEvent.weather.effect}</p>
        <p><strong>Event:</strong> ${weatherEvent.event}</p>
    `;
}








// This function will be called when OBR is ready
    function onOBRReady() {
        console.log("OBR is ready");
        OBR.player.getRole().then(role => {
            console.log("Player role:", role);
            if (role === "GM") {
                console.log("Initializing app for GM");
                initializeApp();
                showExtension();
            } else {
                console.log("Showing player message");
                showPlayerMessage();
            }
    
            // Set up the action to open/close the extension
            OBR.action.onOpenChange((open) => {
                console.log("Action open state changed:", open);
                if (open) {
                    if (role === "GM") {
                        console.log("Showing extension for GM");
                        showExtension();
                    } else {
                        console.log("Showing player message");
                        showPlayerMessage();
                    }
                } else {
                    console.log("Hiding extension");
                    hideExtension();
                }
            });
        });
    }
    
    // This function will be called when the document is ready
    function onDocumentReady() {
        console.log("Document is ready");
        if (window.OBR) {
            console.log("OBR detected, waiting for it to be ready");
            OBR.onReady(onOBRReady);
        } else {
            console.error("OBR is not defined. Make sure the Owlbear Rodeo SDK is properly loaded.");
            initializeApp(); // Fall back to normal initialization if OBR is not available
        }
    }
    
    // Add this at the end of your script
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", onDocumentReady);
    } else {
        onDocumentReady();
    }




document.addEventListener('DOMContentLoaded', () => {
    if (window.OBR) {
        initializeExtension();
    } else {
        console.error("OBR is not defined. Make sure the Owlbear Rodeo SDK is properly loaded.");
        initializeApp();
    }
});


function initializeApp() {
    // Add event listeners to buttons
    const buttons = {
        'generateNPCBtn': generateNPC,
        'generateTavernBtn': () => generateLocation('Tavern'),
        'generateCampBtn': () => generateLocation('Camp'),
        'generateTownBtn': () => generateLocation('Town'),
        'generateCityBtn': () => generateLocation('City'),
        'generateEventBtn': generateEvent,
        'clearEventBtn': clearEvent,
        'saveNPCBtn': saveNPC,
        'clearNPCBtn': clearNPC,
        'saveLocationBtn': saveLocation,
        'clearLocationBtn': clearLocation,
        'clearNPCsBtn': clearSavedNPCs,
        'clearLocationsBtn': clearSavedLocations,
        'unlockFeaturesBtn': unlockFeatures,
        'generateWeatherBtn': displayWeather,
        'generateNPCEventsBtn': displayNPCEvents,
        'generateWeatherEventBtn': displayWeatherEvent
    };

    for (const [id, func] of Object.entries(buttons)) {
        const button = document.getElementById(id);
        if (button) {
            console.log("Adding event listener to button:", id);
            button.addEventListener('click', (event) => {
                console.log("Button clicked:", id);
                func(event);
            });
        } else {
            console.log("Button not found:", id);
        }
    }

    // Initialize feature lock state and fetch valid codes
    if (localStorage.getItem('featuresUnlocked') === null) {
        localStorage.setItem('featuresUnlocked', 'false');
    }
    fetchValidCodes(); // Fetch codes when the page loads
    updateFeatureAccess();

    // Initialize tabs
    const tabs = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab.dataset.tab);
        });
    });

    // Set the initial active tab
    switchTab('generate-tab');

    // Set up region select
    const regionSelect = document.getElementById('regionSelect');
regionSelect.innerHTML = '<option value="">--Select Region--</option>'; // Clear existing options
for (const region in regions) {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionSelect.appendChild(option);
    }

    // Initialize the application state
    updateSavedNPCsList();
    updateSavedLocationsList();
    updateNPCTrustList();
    updateFeatureAccess();
    displayVisitedItems();
    updateClearButtonVisibility();

    // Add event listeners for the noticeboard buttons
    const noticeboardButtons = ['tavernNoticesBtn', 'streetGossipBtn', 'townNoticesBtn'];
    noticeboardButtons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', () => {
                displayNotices(btnId.replace('Btn', ''));
            });
        }
    });
}




// Utility Functions
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateMoney() {
    const gold = Math.floor(Math.random() * 10);
    const silver = Math.floor(Math.random() * 20);
    const copper = Math.floor(Math.random() * 50);
    return `${gold} gold, ${silver} silver, ${copper} copper`;
}

// Add this function to handle the Noticeboards tab
    function switchTab(tabId) {
        console.log("Switching to tab:", tabId);
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
            console.log("Removed active class from:", tab.id);
        });
        document.querySelectorAll('.tab-button').forEach(button => {
            button.classList.remove('active');
            console.log("Removed active class from button:", button.dataset.tab);
        });
        const selectedTab = document.getElementById(tabId);
        const selectedButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
        if (selectedTab && selectedButton) {
            selectedTab.classList.add('active');
            selectedButton.classList.add('active');
            console.log("Activated tab and button:", tabId);
        } else {
            console.log("Failed to find tab or button for:", tabId);
        }
    
        // Handle specific tab actions
        if (tabId === 'generate-tab') {
            const selectedNPCInfo = document.getElementById('selectedNPCInfo');
            if (selectedNPCInfo) {
                selectedNPCInfo.innerHTML = '';
            }
        } else if (tabId === 'noticeboards-tab') {
            handleNoticeboardsTab();
        } else if (tabId === 'weather-tab') {
            handleWeatherTab();
        }
    }
    
    function handleNoticeboardsTab() {
        const noticeboardsContent = document.getElementById('noticeboards-content');
        const noticeboardsDescription = document.getElementById('noticeboards-description');
        if (isPatreonUnlocked()) {
            noticeboardsContent.style.display = 'block';
            noticeboardsDescription.style.display = 'none';
        } else {
            noticeboardsContent.style.display = 'none';
            noticeboardsDescription.style.display = 'block';
        }
    }
    
    function handleWeatherTab() {
        // Any specific actions for the weather tab
        console.log("Weather tab activated");
    }
    
    

// Add event listeners for the new buttons
document.getElementById('tavernNoticesBtn').addEventListener('click', () => {
    displayNotices('tavernNotices');
});
document.getElementById('streetGossipBtn').addEventListener('click', () => {
    displayNotices('streetGossip');
});
document.getElementById('townNoticesBtn').addEventListener('click', () => {
    displayNotices('townNotices');
});

// Ensure the new tab button is included in the initialization
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab.dataset.tab);
        });
    });

    // Set the initial active tab
    switchTab('generate-tab');
});


function displayNotices(category) {
    console.log("displayNotices called with category:", category);
    console.log("isPatreonUnlocked:", isPatreonUnlocked());

    const noticeboardContent = document.getElementById('noticeboardContent');
    if (!noticeboardContent) {
        console.log("noticeboardContent element not found");
        return;
    }

    if (!isPatreonUnlocked()) {
        console.log("Patreon features are not unlocked");
        noticeboardContent.innerHTML = `<p>This feature is locked. Please unlock with a valid Patreon code.</p>`;
        return;
    }

    const notices = noticeboardsData[category];
    if (!notices) {
        console.log("No notices found for category:", category);
        return;
    }

    const randomNotices = [];
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * notices.length);
        randomNotices.push(notices[randomIndex]);
    }

    noticeboardContent.innerHTML = `<h3>${category.replace(/([A-Z])/g, ' $1').trim()}</h3><ul>`;
    randomNotices.forEach(notice => {
        noticeboardContent.innerHTML += `<li>${notice}</li>`;
    });
    noticeboardContent.innerHTML += '</ul>';

    console.log("Notices displayed successfully");
}








// Generator Functions
function generateNPC() {
    const npc = {
        firstName: getRandomElement(firstNames),
        lastName: getRandomElement(lastNames),
        race: getRandomElement(races),
        class: getRandomElement(classes),
        age: Math.floor(Math.random() * 70) + 18,
        profession: getRandomElement(professions),
        demeanor: getRandomElement(demeanors),
        motivation: getRandomElement(motivations),
        quirk: getRandomElement(quirks),
        money: generateMoney(),
        item: getRandomElement(items),
        secret: getRandomElement(secrets)
    };
    displayNPC(npc);
    document.getElementById('npcInfo').style.display = 'block';
    document.getElementById('locationInfo').style.display = 'none';
}

function generateLocation(type) {
    let locationInfo = "";
    let generatedNPCs = [];

    if (type === "Tavern") {
        const tavernName = getRandomElement(tavernNames);
        const patronCount = Math.floor(Math.random() * 10) + 5;
        const staffCount = Math.floor(Math.random() * 4) + 2;
        locationInfo += `<h2>${tavernName}</h2>`;
        locationInfo += `<p>Patrons: ${patronCount}</p>`;
        locationInfo += "<h3>Staff:</h3>";
        for (let i = 0; i < staffCount; i++) {
            const staffMember = {
                firstName: getRandomElement(firstNames),
                lastName: getRandomElement(lastNames),
                race: getRandomElement(races)
            };
            const role = getRandomElement(staffRoles);
            locationInfo += `<p>${role}: ${staffMember.firstName} ${staffMember.lastName} (${staffMember.race})</p>`;
            generatedNPCs.push(staffMember);
        }
    } else if (type === "Camp") {
        const campDescription = getRandomElement(campDescriptions);
        const travelerCount = Math.floor(Math.random() * 6) + 2;
        locationInfo += `<h2>Camp</h2>`;
        locationInfo += `<p>${campDescription}</p>`;
        locationInfo += `<p>Travelers: ${travelerCount}</p>`;
        for (let i = 0; i < travelerCount; i++) {
            const traveler = {
                firstName: getRandomElement(firstNames),
                lastName: getRandomElement(lastNames),
                race: getRandomElement(races),
                profession: getRandomElement(professions)
            };
            locationInfo += `<p>${traveler.firstName} ${traveler.lastName} (${traveler.race}, ${traveler.profession})</p>`;
            generatedNPCs.push(traveler);
        }
    } else if (type === "Town" || type === "City") {
        const name = `${getRandomElement(lastNames)}${type === "Town" ? "ton" : "ville"}`;
        const population = type === "Town" ? Math.floor(Math.random() * 4000) + 1000 : Math.floor(Math.random() * 50000) + 10000;
        const leaderTitle = type === "Town" ? "Mayor" : "Governor";
        const leader = {
            firstName: getRandomElement(firstNames),
            lastName: getRandomElement(lastNames),
            race: getRandomElement(races)
        };
        locationInfo += `<h2>${name}</h2>`;
        locationInfo += `<p>Population: ${population}</p>`;
        locationInfo += `<p>${leaderTitle}: ${leader.firstName} ${leader.lastName} (${leader.race})</p>`;
        locationInfo += "<h3>Notable Locations:</h3>";
        const locations = ["Town Hall", "Market Square", "Temple", "Blacksmith", "Inn"];
        locations.forEach(loc => {
            locationInfo += `<p>${loc}</p>`;
        });
        generatedNPCs.push(leader);
    }

    const locationInfoElement = document.getElementById('locationInfo');
    const npcInfoElement = document.getElementById('npcInfo');

    if (locationInfoElement && npcInfoElement) {
        locationInfoElement.innerHTML = locationInfo;
        locationInfoElement.style.display = 'block';
        npcInfoElement.style.display = 'none';
    }
    
    const saveLocationBtn = document.getElementById('saveLocationBtn');
    if (saveLocationBtn) {
        saveLocationBtn.style.display = 'inline-block';
    }
}

function generateEvent() {
    if (!isPatreonUnlocked()) {
        console.log("This feature is not available.");
        return;
    }
    const regionSelect = document.getElementById('regionSelect');
    const selectedRegion = regionSelect.value;
    if (selectedRegion && regions[selectedRegion]) {
        const event = getRandomElement(regions[selectedRegion]);
        document.getElementById('eventInfo').innerHTML = `<h3>${selectedRegion} Event:</h3><p>${event}</p>`;
    } else {
        document.getElementById('eventInfo').innerHTML = "<p>Please select a region first.</p>";
    }
}


// Display Functions
function displayNPC(npc) {
    const npcInfo = document.getElementById('npcInfo');
    npcInfo.innerHTML = `
        <h3>${npc.firstName} ${npc.lastName}</h3>
        <div class="info-content">
            <p><strong>Race:</strong> ${npc.race} | <strong>Class:</strong> ${npc.class} | <strong>Age:</strong> ${npc.age}</p>
            <p><strong>Profession:</strong> ${npc.profession} | <strong>Demeanor:</strong> ${npc.demeanor}</p>
            <p><strong>Motivation:</strong> ${npc.motivation}</p>
            <p><strong>Quirk:</strong> ${npc.quirk}</p>
            <p><strong>Money:</strong> ${npc.money}</p>
            <p><strong>Item:</strong> ${npc.item}</p>
            <p><strong>Secret:</strong> ${npc.secret}</p>
        </div>
    `;
}

function displayVisitedItems() {
    const savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    const savedLocations = JSON.parse(localStorage.getItem('savedLocations')) || {};
    let visitedItems = '<h3>Visited NPCs</h3><ul>';
    for (let npcName in savedNPCs) {
        if (savedNPCs[npcName].met) {
            visitedItems += `<li>${savedNPCs[npcName].name}</li>`;
        }
    }
    visitedItems += '</ul><h3>Visited Locations</h3><ul>';
    for (let locationName in savedLocations) {
        if (savedLocations[locationName].visited) {
            visitedItems += `<li>${savedLocations[locationName].name}</li>`;
        }
    }
    visitedItems += '</ul>';
    document.getElementById('visitedItems').innerHTML = visitedItems;
}

// Save and Load Functions
function saveNPC() {
    if (!isPatreonUnlocked()) {
        alert("This feature is locked. Please unlock with a valid Patreon code.");
        return;
    }

    const npcInfo = document.getElementById('npcInfo').innerHTML;
    if (!npcInfo.trim()) return;
    
    const npcName = npcInfo.match(/<h3>(.*?)<\/h3>/)[1];
    const npcRace = npcInfo.match(/<strong>Race:<\/strong> (.*?) \|/)[1];
    const npcAge = npcInfo.match(/<strong>Age:<\/strong> (.*?)<\/p>/)[1];
    
    let savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    savedNPCs[npcName] = { name: npcName, race: npcRace, age: npcAge, info: npcInfo, met: false, trust: 4 };
    localStorage.setItem('savedNPCs', JSON.stringify(savedNPCs));
    
    updateSavedNPCsList();
    updateNPCTrustList();
    alert(`NPC "${npcName}" has been saved!`);
}

function saveLocation() {
    if (!isPatreonUnlocked()) {
        alert("This feature is locked. Please unlock with a valid Patreon code.");
        return;
    }

    const locationInfo = document.getElementById('locationInfo').innerHTML;
    if (!locationInfo.trim()) return;
    const locationName = locationInfo.match(/<h2>(.*?)<\/h2>/)[1];
    let savedLocations = JSON.parse(localStorage.getItem('savedLocations')) || {};
    savedLocations[locationName] = { name: locationName, info: locationInfo, visited: false };
    localStorage.setItem('savedLocations', JSON.stringify(savedLocations));
    updateSavedLocationsList();
    alert(`Location "${locationName}" has been saved!`);
}


function loadNPC(npcName) {
    const savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    if (savedNPCs[npcName]) {
        document.getElementById('selectedNPCInfo').innerHTML = savedNPCs[npcName].info;
        updateNPCTrustList();
        switchTab('trust-tab');
    }
}

function loadLocation(locationName) {
    const savedLocations = JSON.parse(localStorage.getItem('savedLocations')) || {};
    if (savedLocations[locationName]) {
        document.getElementById('locationInfo').innerHTML = savedLocations[locationName].info;
        document.getElementById('locationInfo').scrollIntoView({behavior: "smooth"});
    }
}

// Update Display Functions
function updateSavedNPCsList() {
    const savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    const savedNPCsList = document.getElementById('savedNPCsList');
    savedNPCsList.innerHTML = '';
    for (let npcName in savedNPCs) {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="saved-item-name">${savedNPCs[npcName].name}</div>
            <div class="saved-item-details">${savedNPCs[npcName].race}, ${savedNPCs[npcName].age} years old</div>
            <label><input type="checkbox" ${savedNPCs[npcName].met ? 'checked' : ''} onchange="updateNPCMet('${npcName}', this.checked)"> Met</label>
        `;
        li.addEventListener('click', (event) => {
            if (event.target.tagName !== 'INPUT') {
                loadNPC(npcName);
            }
        });
        savedNPCsList.appendChild(li);
    }
    updateClearButtonVisibility();
}

function updateSavedLocationsList() {
    const savedLocations = JSON.parse(localStorage.getItem('savedLocations')) || {};
    const savedLocationsList = document.getElementById('savedLocationsList');
    savedLocationsList.innerHTML = '';
    for (let locationName in savedLocations) {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="saved-item-name">${savedLocations[locationName].name}</div>
            <label><input type="checkbox" ${savedLocations[locationName].visited ? 'checked' : ''} onchange="updateLocationVisited('${locationName}', this.checked)"> Visited</label>
        `;
        li.addEventListener('click', (event) => {
            if (event.target.tagName !== 'INPUT') {
                loadLocation(locationName);
            }
        });
        savedLocationsList.appendChild(li);
    }
    updateClearButtonVisibility();
}

function updateNPCTrustList() {
    const savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    const npcTrustList = document.getElementById('npcTrustList');
    npcTrustList.innerHTML = '';
    for (let npcName in savedNPCs) {
        const npc = savedNPCs[npcName];
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="npc-trust-item">
                <span class="npc-name">${npc.name}</span>
                <div class="trust-slider-container">
                    <input type="range" min="0" max="8" value="${npc.trust}" 
                           oninput="updateTrustLabel(this, '${npcName}')" 
                           onchange="updateNPCTrust('${npcName}', this.value)">
                    <div class="trust-labels">
                        <span class="trust-min"> </span>
                        <span class="trust-value" id="trustLabel-${npcName}">${trustLevels[npc.trust]}</span>
                        <span class="trust-max"> </span>
                    </div>
                </div>
            </div>
        `;
        npcTrustList.appendChild(li);
    }
}

function updateNPCTrust(npcName, trustValue) {
    let savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    if (savedNPCs[npcName]) {
        savedNPCs[npcName].trust = parseInt(trustValue);
        localStorage.setItem('savedNPCs', JSON.stringify(savedNPCs));
        updateNPCTrustList();
    }
}

function updateTrustLabel(slider, npcName) {
    const trustLabelElement = document.getElementById(`trustLabel-${npcName}`);
    if (trustLabelElement) {
        trustLabelElement.textContent = trustLevels[slider.value];
    }
}

function updateNPCMet(npcName, met) {
    let savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    if (savedNPCs[npcName]) {
        savedNPCs[npcName].met = met;
        localStorage.setItem('savedNPCs', JSON.stringify(savedNPCs));
    }
    displayVisitedItems();
}

function updateLocationVisited(locationName, visited) {
    let savedLocations = JSON.parse(localStorage.getItem('savedLocations')) || {};
    if (savedLocations[locationName]) {
        savedLocations[locationName].visited = visited;
        localStorage.setItem('savedLocations', JSON.stringify(savedLocations));
    }
    displayVisitedItems();
}

function updateClearButtonVisibility() {
    const savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    const savedLocations = JSON.parse(localStorage.getItem('savedLocations')) || {};
    document.getElementById('clearNPCsBtn').style.display = Object.keys(savedNPCs).length ? 'inline-block' : 'none';
    document.getElementById('clearLocationsBtn').style.display = Object.keys(savedLocations).length ? 'inline-block' : 'none';
}

// Clear Functions
function clearNPC() {
    document.getElementById('npcInfo').innerHTML = '';
}

function clearLocation() {
    document.getElementById('locationInfo').innerHTML = '';
}

function clearEvent() {
    document.getElementById('eventInfo').innerHTML = '';
}

function clearSavedNPCs() {
    localStorage.removeItem('savedNPCs');
    updateSavedNPCsList();
    updateNPCTrustList();
    displayVisitedItems();
}

function clearSavedLocations() {
    localStorage.removeItem('savedLocations');
    updateSavedLocationsList();
    displayVisitedItems();
}


function displayNotices(category) {
    console.log("displayNotices called with category:", category);
    console.log("isPatreonUnlocked:", isPatreonUnlocked());

    const noticeboardContent = document.getElementById('noticeboardContent');
    if (!noticeboardContent) {
        console.log("noticeboardContent element not found");
        return;
    }

    if (!isPatreonUnlocked()) {
        console.log("Patreon features are not unlocked");
        noticeboardContent.innerHTML = `<p>This feature is locked. Please unlock with a valid Patreon code.</p>`;
        return;
    }

    const notices = noticeboardsData[category];
    if (!notices) {
        console.log("No notices found for category:", category);
        return;
    }

    const randomNotices = [];
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * notices.length);
        randomNotices.push(notices[randomIndex]);
    }

    noticeboardContent.innerHTML = `<h3>${category.replace(/([A-Z])/g, ' $1').trim()}</h3><ul>`;
    randomNotices.forEach(notice => {
        noticeboardContent.innerHTML += `<li>${notice}</li>`;
    });
    noticeboardContent.innerHTML += '</ul>';

    console.log("Notices displayed successfully");
}



function initializeNoticeboardButtons() {
    const buttons = ['tavernNoticesBtn', 'streetGossipBtn', 'townNoticesBtn'];
    buttons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', () => {
                displayNotices(btnId.replace('Btn', ''));
            });
        }
    });
}


// Patreon Functions
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ97oEz8hWLDsmt0rNCGJOfby-jyXfGn846EHQwKTCrHeUFYWiY1g4lK3Ti1vreTpwUswWpT6KzPm98/pub?output=csv';

let validCodes = new Set();

async function fetchValidCodes() {
    try {
        const response = await fetch(SHEET_URL);
        const data = await response.text();
        const rows = data.split('\n').slice(1); // Skip header row
        validCodes.clear();
        rows.forEach(row => {
            const [code, isActive] = row.split(',');
            if (isActive.trim().toLowerCase() === 'true') {
                validCodes.add(code.trim());
            }
        });
    } catch (error) {
        console.error('Error fetching valid codes:', error);
    }
}

function validateCode(code) {
    if (!validCodes.has(code)) return false;
    if (code.length !== 7) return false;
    const firstDigit = parseInt(code[0]);
    const lastDigit = parseInt(code[6]);
    return firstDigit + lastDigit === 13;
}

function isPatreonUnlocked() {
    const unlocked = localStorage.getItem('featuresUnlocked') === 'true';
    console.log("isPatreonUnlocked called, returning:", unlocked);
    return unlocked;
}

async function unlockFeatures() {
    const patreonCode = document.getElementById('patreonCode').value;
    await fetchValidCodes(); // Refresh the codes before checking
    if (validateCode(patreonCode)) {
        localStorage.setItem('featuresUnlocked', 'true');
        console.log("Features unlocked, localStorage set to:", localStorage.getItem('featuresUnlocked'));
        updateFeatureAccess();
        alert('Features unlocked successfully!');
    } else {
        alert('Invalid code. Please try again.');
    }
}

function updateFeatureAccess() {
    const isUnlocked = isPatreonUnlocked();
    console.log("updateFeatureAccess called, isUnlocked:", isUnlocked);

    const lockedElements = document.querySelectorAll('.patreon-locked');
    lockedElements.forEach(el => {
        el.style.display = isUnlocked ? 'inline-block' : 'none';
    });

    const unlockFeaturesBtn = document.getElementById('unlockFeaturesBtn');
    if (unlockFeaturesBtn) {
        unlockFeaturesBtn.textContent = isUnlocked ? 'Change Patreon Code' : 'Unlock Patreon Features';
    }

    // Handle Noticeboards tab
    const noticeboardsContent = document.getElementById('noticeboards-content');
    const noticeboardsDescription = document.getElementById('noticeboards-description');
    if (noticeboardsContent && noticeboardsDescription) {
        console.log("Updating noticeboard visibility");
        noticeboardsContent.style.display = isUnlocked ? 'block' : 'none';
        noticeboardsDescription.style.display = isUnlocked ? 'none' : 'block';
    } else {
        console.log("Noticeboard elements not found");
    }

    // Update save buttons text and functionality
    const saveNPCBtn = document.getElementById('saveNPCBtn');
    const saveLocationBtn = document.getElementById('saveLocationBtn');
    if (saveNPCBtn && saveLocationBtn) {
        if (isUnlocked) {
            saveNPCBtn.textContent = 'Save NPC';
            saveLocationBtn.textContent = 'Save Location';
            saveNPCBtn.onclick = saveNPC;
            saveLocationBtn.onclick = saveLocation;
        } else {
            saveNPCBtn.textContent = 'Save NPC (Locked)';
            saveLocationBtn.textContent = 'Save Location (Locked)';
            saveNPCBtn.onclick = () => alert("This feature is locked. Please unlock with a valid Patreon code.");
            saveLocationBtn.onclick = () => alert("This feature is locked. Please unlock with a valid Patreon code.");
        }
    }

    // Update the locked features message
    const lockedMessage = document.querySelector('#generate-tab p');
    if (lockedMessage) {
        lockedMessage.style.display = isUnlocked ? 'none' : 'block';
    }

    console.log("updateFeatureAccess completed");
}



// Initialize the application
// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners to buttons
    const buttons = {
        'generateNPCBtn': generateNPC,
        'generateTavernBtn': () => generateLocation('Tavern'),
        'generateCampBtn': () => generateLocation('Camp'),
        'generateTownBtn': () => generateLocation('Town'),
        'generateCityBtn': () => generateLocation('City'),
        'generateEventBtn': generateEvent,
        'clearEventBtn': clearEvent,
        'saveNPCBtn': saveNPC,
        'clearNPCBtn': clearNPC,
        'saveLocationBtn': saveLocation,
        'clearLocationBtn': clearLocation,
        'clearNPCsBtn': clearSavedNPCs,
        'clearLocationsBtn': clearSavedLocations,
        'unlockFeaturesBtn': unlockFeatures
    };

    for (const [id, func] of Object.entries(buttons)) {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', func);
        }
    }

    // Initialize feature lock state and fetch valid codes
    if (localStorage.getItem('featuresUnlocked') === null) {
        localStorage.setItem('featuresUnlocked', 'false');
    }
    fetchValidCodes(); // Fetch codes when the page loads
    updateFeatureAccess();

    // Initialize tabs
    const tabs = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab.dataset.tab);
        });
    });

    // Set the initial active tab
    switchTab('generate-tab');

    // Set up region select
    const regionSelect = document.getElementById('regionSelect');
    for (const region in regions) {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionSelect.appendChild(option);
    }

    // Initialize the application state
    updateSavedNPCsList();
    updateSavedLocationsList();
    updateNPCTrustList();
    updateFeatureAccess();
    displayVisitedItems();
    updateClearButtonVisibility();

    if (window.OBR) {
        console.log("OBR detected, initializing extension");
        initializeExtension();
    } else {
        console.error("OBR is not defined. Make sure the Owlbear Rodeo SDK is properly loaded.");
        initializeApp(); // Fall back to normal initialization if OBR is not available
    }
});
