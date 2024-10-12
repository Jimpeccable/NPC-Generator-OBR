//ARRAYS

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
  "They discovered a portal to another plane but are afraid of what lies beyond it",
  "They secretly harbor feelings for Larissa, the blacksmith’s daughter, but believe their love is unrequited.",
  "They accidentally caused the disappearance of their best friend, Theren, during a botched magical experiment.",
  "They are the child of two rival guild leaders and have been hiding their lineage to avoid conflict.",
  "They secretly write anonymous letters to the town council offering advice on political matters.",
  "They have been keeping a dragon egg hidden under their bed, waiting for it to hatch.",
  "They once stole a rare artifact from the local temple and buried it in the forest.",
  "They are secretly working for Alric, the head of the thieves' guild, but they want out.",
  "They are responsible for the mysterious fire that destroyed the old library, but nobody suspects them.",
  "They know the true identity of the masked vigilante terrorizing the local noble family.",
  "They are deathly afraid of water and cannot swim, despite claiming to be an experienced sailor.",
  "They have been receiving cryptic dreams from a forgotten god, but they fear what it means.",
  "They are actually a shape-shifter who has been living as the village merchant for the past decade.",
  "They secretly despise their spouse, Elara, and are planning to run away with a mysterious lover.",
  "They are addicted to a rare magical herb sold by shady merchants, but keep it hidden from everyone.",
  "They have been blackmailing Baron Yoren for years, holding knowledge of his past crimes.",
  "They faked their own death five years ago to escape a powerful debt owed to a warlord.",
  "They secretly adopted an orphaned goblin child, raising it in secret outside of town.",
  "They possess a forbidden book of necromancy and have been experimenting with it in secret.",
  "They believe they were once reincarnated from a legendary hero but have no proof.",
  "They have been hiding a letter from their long-lost sibling, Kyra, who is now a powerful warlock."
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
    TavernNotices: [
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
        "Annual pie-eating contest next week. Grand prize: Golden rolling pin!",
        "Wanted: Blacksmith apprentice. No experience necessary, must handle heat well.",
        "Found: A silver locket engraved with initials. Claim at the Singing Fox Tavern.",
        "Potion-making class every Starday at the Golden Ale Inn. Beginners welcome.",
        "Seeking bard for weekly storytelling at the Velvet Harp Inn. Payment in food and drink.",
        "Knight tournament in two weeks. Armor repair specialists sought urgently.",
        "Barmaid needed for busy weekends. Must know how to handle rowdy adventurers.",
        "Wanted: Juggler with flaming sword skills for traveling circus. High pay, risky work.",
        "Mysterious benefactor seeking mercenaries for 'discreet' task. Details upon meeting.",
        "Need expert lockpicker for treasure hunt. Reward based on performance.",
        "Trade rare gemstones for magical items at the Silver Serpent Inn.",
        "Tavern brawl night: Bet on your favorite fighter this Freeday. Drinks included.",
        "Looking for brave adventurers to deliver a cursed artifact to a far-off land.",
        "Ale contest tomorrow! Bring your best brew for a chance to win the Golden Keg!",
        "Poetry night at the Drowned Dragon Inn. Share your woes, and get a free drink!",
        "Wanted: Potion tester. Side effects may include nausea and spontaneous dancing.",
        "Free drinks for any adventurer who can defeat the tavern's arm-wrestling champion.",
        "Wizard seeking someone to retrieve his hat from an angry griffon. Reward negotiable.",
        "Annual tavern cleaning day next Tenday. Volunteers rewarded with free meals.",
        "Seeking someone to catch a rogue chicken. It’s faster than it looks!",
        "Attention gamblers! Card tournament at the Three Coins Inn this evening.",
        "The famous dwarf brewmaster is in town for one week only! Sample his legendary ale!",
        "Adventurers needed to escort a cart of pies through dangerous territory. Payment in pies.",
        "Looking for a healer to join our mercenary crew. Pay increases with danger level.",
        "Armored knight seeking repairs after an unfortunate dragon encounter. Payment in gold.",
        "Wanted: Rat-catcher for the tavern cellar. Payment in ale or coin.",
        "Horseshoe tossing contest next Moonday. Winner receives a magical lucky charm!",
        "Seeking wizard to enchant the tavern’s signpost. Payment in runes and reagents.",
        "Mysterious map found under a tavern table. Whoever can decipher it keeps the treasure.",
        "Haunted piano playing at the Red Dagger Inn. Ghost hunters needed!",
        "Free meal for anyone who can tell a joke that makes the tavern owner laugh!"
    ],
    StreetGossip: [
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
        "There's talk of rebellion brewing in the nearby villages. Exciting times!",
        "I heard the miller's wife is secretly a werewolf. She only goes out on full moons!",
    "They say there's a hidden tunnel beneath the temple leading to ancient ruins.",
    "Rumor has it that the baroness was once a pirate queen in disguise.",
    "A black cat has been following people around town. Some say it brings bad luck.",
    "Did you hear? The old blacksmith vanished, and his tools are still making noise at night.",
    "Word on the street is that someone found a giant egg in the forest. What could it hatch?",
    "They say the local tailor's scissors are enchanted to cut through anything—even armor!",
    "I heard a strange ship docked last night, but no one saw the crew. Spooky, huh?",
    "The baker’s bread has been extra delicious lately. Some say he's using fairy flour!",
    "Someone claimed to have seen a ghostly carriage racing through the streets at midnight.",
    "They say there's a secret society meeting in the catacombs beneath the church.",
    "I overheard that a powerful sorcerer has taken residence in the nearby mountains.",
    "The clocktower stopped at midnight last week and hasn’t chimed since. Ominous!",
    "Did you hear about the merchant who sells talking animals? They say his wares are cursed.",
    "There's a rumor going around that the mayor can talk to animals. Odd, isn't it?",
    "Some believe the innkeeper’s ale is so good because he uses magical water from a hidden spring.",
    "They say a wandering knight appeared, claiming he’s from a different time.",
    "I heard the local midwife delivered a baby with a dragon birthmark. What could it mean?",
    "Rumor has it that the tavern owner was once an assassin for the royal family.",
    "People are whispering about a strange figure watching from the old clock tower at dusk.",
    "I heard someone found a message in a bottle washed ashore, but no one can read it.",
    "Apparently, there's a band of thieves planning to rob the royal treasury next month.",
    "They say the librarian is a retired spy who still gets mysterious messages.",
    "I overheard that the town's statue might actually be a petrified person.",
    "Rumor is, the old forest is growing faster than normal—something's changing it.",
    "There's been talk that the sun will not rise for three days next month. Prophecy or nonsense?",
    "I heard the court jester's jokes contain hidden messages from a secret order.",
    "Some say there's a dragon's hoard hidden in the well beneath the town square.",
    "They say the adventurers' guild has a secret vault where they store magical artifacts.",
    "I overheard the new tax collector might be an imp in disguise."
    ],
    TownNotices: [
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
        "Unexplained disappearances near the old forest. Increased patrols implemented.",
        "New library opening soon! Volunteers needed for book sorting and cataloging.",
    "Seeking carpenters for repairs to the town bridge. Apply at the town hall.",
    "Local bard competition next Tenday. Prizes for best ballad, epic tale, and humorous ditty.",
    "Warning: Wolves spotted near the eastern farms. Stay vigilant!",
    "Lost: A small golden ring with a dragon emblem. Finder will be richly rewarded.",
    "Notice: Street performances are now restricted to designated areas. Apply for a permit.",
    "Seamstress wanted to help craft uniforms for the town guard. Good pay for swift hands.",
    "Town militia training every Freeday. Free meal provided for participants.",
    "New art gallery opening in the market district. Artists welcome to display works.",
    "Apprenticeship opportunities available at the blacksmith’s forge. Apply now!",
    "Public feast next Moonday to celebrate the town’s founding. All are welcome!",
    "Job openings at the mayor’s office for scribes and record keepers.",
    "Missing: A golden retriever named Rufus. Last seen near the town gates.",
    "Mage needed for annual fireworks display. Good pay for spectacular results.",
    "Curfew imposed in response to recent disappearances. Stay indoors after nightfall.",
    "Local farmers market moving to the town square every Starday.",
    "Crafters needed to help restore the town's ancient statue. Contact the mayor's office.",
    "Festival of lights next Tenday! Bring lanterns and participate in the parade!",
    "Job posting: Rat-catcher for the town’s granaries. Tools provided.",
    "Notice: Stray animals being rounded up. Visit the kennel to reclaim lost pets.",
    "Scholarship available for those interested in studying magic at the Arcane Academy.",
    "Wanted: Volunteers for scouting expeditions into the haunted forest.",
    "Construction workers needed for new orphanage building. Sign up at the temple.",
    "Open auditions for the town play next week. Roles available for all ages.",
    "Notice: The northern road will be closed for repairs starting next week.",
    "New magic item shop opening in the market district. Grand opening sale this Moonday!",
    "Seeking volunteers to join the town watch. Shifts are flexible, training provided.",
    "Public baths now open to all citizens. Free entry every second Starday!",
    "Official complaint box now available in town hall for citizen grievances.",
    "Herbalist wanted to create potions for the town healer’s shop. Experience required."
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
        "The NPC tries to turn other NPCs against the party.",
        "The NPC tries to extort the party for money or resources.",
        "The NPC gives the party false or misleading information.",
        "The NPC refuses to acknowledge the party in public.",
        "The NPC spreads rumors about the party’s weaknesses.",
        "The NPC deliberately withholds critical information.",
        "The NPC alerts local bandits or criminals to the party’s movements.",
        "The NPC demands payment or a bribe for even basic services.",
        "The NPC attempts to steal from the party during an encounter.",
        "The NPC sets a trap for the party in a dangerous location.",
        "The NPC blames the party for local problems or mishaps."
    ],
    medium: [
        "The NPC hesitantly shares some useful information with the party.",
        "The NPC offers limited assistance, but at a high price.",
        "The NPC invites the party to a social event, but keeps a watchful eye on them.",
        "The NPC asks the party for a small favor to test their reliability.",
        "The NPC shares a minor secret with the party as a show of growing trust.",
        "The NPC cautiously invites the party to their home but remains guarded.",
        "The NPC warns the party about a potential threat, but only after hesitation.",
        "The NPC asks the party to assist in a minor personal dispute.",
        "The NPC offers the party a mundane but useful item, like a map or tool.",
        "The NPC shares a local rumor or piece of gossip to build rapport.",
        "The NPC becomes willing to engage in trade but at inflated prices.",
        "The NPC confides a moderate concern but withholds more sensitive information.",
        "The NPC offers to introduce the party to someone else for a small favor.",
        "The NPC gives the party advice on how to avoid a local danger.",
        "The NPC provides vague hints about their past or motivations."
    ],
    high: [
        "The NPC becomes a valuable informant, sharing crucial information.",
        "The NPC offers substantial help or resources to the party.",
        "The NPC introduces the party to influential contacts.",
        "The NPC entrusts the party with a personal quest or mission.",
        "The NPC reveals a major secret that could impact the campaign's storyline.",
        "The NPC gives the party a family heirloom or deeply personal item for safekeeping.",
        "The NPC offers the party refuge in their home or safehouse during danger.",
        "The NPC becomes willing to sacrifice something valuable for the party’s sake.",
        "The NPC helps the party avoid or navigate local laws or customs.",
        "The NPC offers detailed intelligence about powerful enemies or rivals.",
        "The NPC insists on joining the party for an upcoming mission or journey.",
        "The NPC reveals a hidden talent or magical ability to assist the party.",
        "The NPC provides the party with a unique item or resource they can’t get elsewhere.",
        "The NPC asks the party to act as a representative in an important negotiation.",
        "The NPC promises to intervene on the party’s behalf in political or legal matters."
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

// Updated shop items data with descriptions
const shopItems = {
    blacksmith: [
        { name: "Sword", baseCost: 15, description: "A well-balanced longsword" },
        { name: "Shield", baseCost: 10, description: "A sturdy wooden shield with metal rim" },
        { name: "Chain Mail", baseCost: 75, description: "Chain mail armor, offering good protection" },
        { name: "Dagger", baseCost: 2, description: "A sharp, easily concealable blade" },
        { name: "Mace", baseCost: 5, description: "A heavy-headed bludgeoning weapon" },
        { name: "Battleaxe", baseCost: 10, description: "A versatile axe for melee combat" },
        { name: "Warhammer", baseCost: 15, description: "A powerful hammer for crushing blows" },
        { name: "Greatsword", baseCost: 50, description: "A massive two-handed sword" },
        { name: "Light Hammer", baseCost: 2, description: "A small, throwable hammer" },
        { name: "Javelin", baseCost: 0.5, description: "A light spear designed for throwing" },
        { name: "Breastplate", baseCost: 400, description: "A fitted metal chest piece" },
        { name: "Splint Armor", baseCost: 200, description: "Strips of metal fastened to a leather backing" },
        { name: "Plate Armor", baseCost: 1500, description: "The best non-magical armor available" }
    ],
    general: [
        { name: "Rope", baseCost: 1, description: "50 feet of sturdy hemp rope" },
        { name: "Lantern", baseCost: 5, description: "A hooded lantern for illumination" },
        { name: "Backpack", baseCost: 2, description: "A durable leather backpack" },
        { name: "Bedroll", baseCost: 1, description: "A comfortable sleeping roll for camping" },
        { name: "Rations (1 day)", baseCost: 0.5, description: "Preserved food for a day's travel" },
        { name: "Waterskin", baseCost: 0.2, description: "A leather container for holding water" },
        { name: "Crowbar", baseCost: 2, description: "A useful tool for prying things open" },
        { name: "Hammer", baseCost: 1, description: "A simple tool with many uses" },
        { name: "Tinderbox", baseCost: 0.5, description: "Used for starting fires" },
        { name: "Torch", baseCost: 0.01, description: "A simple light source" },
        { name: "Candle", baseCost: 0.01, description: "A small wax light source" },
        { name: "Ink (1 ounce bottle)", baseCost: 10, description: "For writing and scribing" },
        { name: "Ink Pen", baseCost: 0.02, description: "A simple writing implement" },
        { name: "Parchment (one sheet)", baseCost: 0.1, description: "High-quality paper for writing" },
        { name: "Soap", baseCost: 0.02, description: "For cleaning and hygiene" }
    ],
    magic: [
        { name: "Potion of Healing", baseCost: 50, description: "Restores 2d4+2 hit points when consumed" },
        { name: "Scroll of Fireball", baseCost: 150, description: "A spell scroll containing the Fireball spell" },
        { name: "Wand of Magic Missiles", baseCost: 200, description: "Casts Magic Missile 7 times per day" },
        { name: "Ring of Protection", baseCost: 300, description: "Grants +1 to AC and saving throws" },
        { name: "Cloak of Elvenkind", baseCost: 250, description: "Grants advantage on Stealth checks" },
        { name: "Bag of Holding", baseCost: 500, description: "A bag that's bigger on the inside" },
        { name: "Potion of Greater Healing", baseCost: 100, description: "Restores 4d4+4 hit points when consumed" },
        { name: "Scroll of Invisibility", baseCost: 200, description: "A spell scroll containing the Invisibility spell" },
        { name: "Wand of Web", baseCost: 250, description: "Casts Web 7 times per day" },
        { name: "Amulet of Health", baseCost: 400, description: "Sets the wearer's Constitution to 19" },
        { name: "Boots of Elvenkind", baseCost: 250, description: "Grants advantage on Stealth checks related to moving quietly" },
        { name: "Decanter of Endless Water", baseCost: 300, description: "Produces water on command" },
        { name: "Eversmoking Bottle", baseCost: 200, description: "Produces smoke when uncorked" },
        { name: "Eyes of Minute Seeing", baseCost: 350, description: "Grants advantage on Investigation checks related to small details" },
        { name: "Rope of Climbing", baseCost: 200, description: "A 60-foot rope that can move on its own" }
    ],
    alchemist: [
        { name: "Antitoxin", baseCost: 50, description: "Grants advantage on saving throws against poison for 1 hour" },
        { name: "Alchemist's Fire", baseCost: 50, description: "A sticky, adhesive fluid that ignites when exposed to air" },
        { name: "Acid (vial)", baseCost: 25, description: "Corrosive liquid that deals 2d6 acid damage" },
        { name: "Healer's Kit", baseCost: 5, description: "Contains bandages and herbs, has 10 uses" },
        { name: "Herbalism Kit", baseCost: 5, description: "A collection of clippers, mortar and pestle, and pouches" },
        { name: "Potion of Climbing", baseCost: 75, description: "Grants a climbing speed equal to walking speed for 1 hour" },
        { name: "Oil of Slipperiness", baseCost: 100, description: "Grants the effects of Freedom of Movement for 8 hours" },
        { name: "Philter of Love", baseCost: 90, description: "Causes the drinker to become charmed by the next creature they see" },
        { name: "Potion of Animal Friendship", baseCost: 80, description: "Allows the user to cast Animal Friendship" },
        { name: "Potion of Fire Breath", baseCost: 100, description: "Allows the user to exhale fire" },
        { name: "Potion of Growth", baseCost: 150, description: "Increases the drinker's size for 1d4 hours" },
        { name: "Potion of Water Breathing", baseCost: 100, description: "Allows breathing underwater for 1 hour" },
        { name: "Bottled Breath", baseCost: 75, description: "Contains a breath of air, useful underwater" },
        { name: "Keoghtom's Ointment", baseCost: 120, description: "Heals 2d8+2 hit points and cures poison and disease" },
        { name: "Dust of Dryness", baseCost: 90, description: "Absorbs water when sprinkled on a surface" }
    ],
    fletcher: [
        { name: "Arrows (20)", baseCost: 1, description: "Standard arrows for a bow" },
        { name: "Crossbow Bolts (20)", baseCost: 1, description: "Standard bolts for a crossbow" },
        { name: "Shortbow", baseCost: 25, description: "A small bow with 80/320 ft range" },
        { name: "Longbow", baseCost: 50, description: "A large bow with 150/600 ft range" },
        { name: "Light Crossbow", baseCost: 25, description: "A one-handed crossbow with 80/320 ft range" },
        { name: "Heavy Crossbow", baseCost: 50, description: "A two-handed crossbow with 100/400 ft range" },
        { name: "Quiver", baseCost: 1, description: "Holds up to 20 arrows" },
        { name: "Blowgun", baseCost: 10, description: "A quiet ranged weapon with 25/100 ft range" },
        { name: "Blowgun Needles (50)", baseCost: 1, description: "Ammunition for a blowgun" },
        { name: "Dart", baseCost: 0.05, description: "A small throwing weapon with 20/60 ft range" },
        { name: "Sling", baseCost: 0.1, description: "A simple ranged weapon with 30/120 ft range" },
        { name: "Sling Bullets (20)", baseCost: 0.04, description: "Ammunition for a sling" }
    ],
    leatherworker: [
        { name: "Leather Armor", baseCost: 10, description: "Light armor that offers basic protection" },
        { name: "Studded Leather Armor", baseCost: 45, description: "Reinforced leather armor for better protection" },
        { name: "Hide Armor", baseCost: 10, description: "Medium armor made from thick animal hide" },
        { name: "Leather Boots", baseCost: 1, description: "Sturdy footwear for travel" },
        { name: "Leather Gloves", baseCost: 1, description: "Protective hand coverings" },
        { name: "Belt", baseCost: 0.5, description: "A simple belt for holding equipment" },
        { name: "Leather Backpack", baseCost: 2, description: "A durable pack for carrying supplies" },
        { name: "Leather Pouch", baseCost: 0.5, description: "A small bag for holding coins or components" },
        { name: "Leather Scabbard", baseCost: 1, description: "A protective sheath for a sword" },
        { name: "Leather Quiver", baseCost: 1, description: "Holds arrows or bolts" },
        { name: "Leather Saddle", baseCost: 10, description: "For riding mounts comfortably" },
        { name: "Leather Saddlebags", baseCost: 4, description: "Bags that attach to a saddle for storage" }
    ],
    herbalist: [
        { name: "Healing Herb", baseCost: 10, description: "A common medicinal plant" },
        { name: "Antitoxin Herb", baseCost: 25, description: "An herb that counteracts poisons" },
        { name: "Soothing Balm", baseCost: 5, description: "Reduces minor aches and pains" },
        { name: "Energizing Tea", baseCost: 2, description: "Provides a small boost of energy" },
        { name: "Sleep Aid", baseCost: 5, description: "Helps induce restful sleep" },
        { name: "Clarity Tincture", baseCost: 15, description: "Improves focus and mental clarity" },
        { name: "Fortifying Roots", baseCost: 8, description: "Boosts physical resilience" },
        { name: "Calming Flowers", baseCost: 3, description: "Reduces stress and anxiety" },
        { name: "Fever Reducer", baseCost: 7, description: "Helps lower high body temperature" },
        { name: "Respiratory Aid", baseCost: 6, description: "Eases breathing difficulties" },
        { name: "Digestion Enhancer", baseCost: 4, description: "Aids in digestion and reduces stomach discomfort" },
        { name: "Burn Salve", baseCost: 12, description: "Soothes and helps heal burns" }
    ],
    jeweler: [
    { name: "Gold Ring", baseCost: 50, description: "A simple ring made of gold" },
    { name: "Silver Necklace", baseCost: 30, description: "A fine chain necklace of pure silver" },
    { name: "Emerald Pendant", baseCost: 200, description: "A pendant with a beautifully cut emerald" },
    { name: "Sapphire Brooch", baseCost: 300, description: "A brooch embedded with a deep-blue sapphire" },
    { name: "Diamond Earrings", baseCost: 500, description: "A pair of elegant diamond earrings" },
    { name: "Ruby Bracelet", baseCost: 400, description: "A fine bracelet adorned with rubies" },
    { name: "Platinum Crown", baseCost: 1000, description: "An ornate crown fit for royalty, made of platinum" },
    { name: "Obsidian Ring", baseCost: 120, description: "A ring made of polished obsidian" },
    { name: "Moonstone Circlet", baseCost: 350, description: "A delicate circlet with a glowing moonstone" },
    { name: "Engraved Signet Ring", baseCost: 75, description: "A personalized ring bearing a family crest" }
    ],
    tailor: [
    { name: "Common Clothes", baseCost: 5, description: "Basic everyday clothing" },
    { name: "Traveler's Cloak", baseCost: 8, description: "A weatherproof cloak for travel" },
    { name: "Silk Robes", baseCost: 50, description: "Elegant robes made of fine silk" },
    { name: "Fine Hat", baseCost: 15, description: "A stylish hat made of high-quality fabric" },
    { name: "Winter Cloak", baseCost: 20, description: "A fur-lined cloak for cold weather" },
    { name: "Leather Belt", baseCost: 2, description: "A sturdy leather belt for holding pouches" },
    { name: "Noble's Outfit", baseCost: 100, description: "An outfit made for nobility, extravagant and fashionable" },
    { name: "Boots of Comfort", baseCost: 10, description: "Durable, soft boots for long walks" },
    { name: "Gloves of Dexterity", baseCost: 15, description: "Light gloves that provide a better grip" },
    { name: "Tailored Vest", baseCost: 25, description: "A finely crafted vest, fitted for style" }
    ],
    apothecary: [
    { name: "Potion of Vitality", baseCost: 100, description: "Removes exhaustion and cures disease" },
    { name: "Elixir of Mind Focus", baseCost: 120, description: "Grants advantage on Intelligence checks for 1 hour" },
    { name: "Potion of Night Vision", baseCost: 80, description: "Grants darkvision for 8 hours" },
    { name: "Tonic of Enhanced Reflexes", baseCost: 75, description: "Grants +1 to Dexterity saving throws for 1 hour" },
    { name: "Syrup of Boldness", baseCost: 60, description: "Grants advantage on Charisma-based skill checks" },
    { name: "Sleeping Draught", baseCost: 50, description: "Induces sleep for 6 hours" },
    { name: "Tincture of Clear Thoughts", baseCost: 90, description: "Grants advantage on Wisdom saving throws for 1 hour" },
    { name: "Potion of Feather Fall", baseCost: 100, description: "Slows your fall for 10 minutes" },
    { name: "Concoction of Iron Skin", baseCost: 120, description: "Increases AC by 1 for 1 hour" },
    { name: "Restorative Tea", baseCost: 40, description: "Reduces fatigue and restores minor hit points" }
    ],
    artificer: [
    { name: "Clockwork Spider", baseCost: 150, description: "A small mechanical spider for scouting" },
    { name: "Lightning Rod", baseCost: 120, description: "Absorbs lightning damage and redirects it" },
    { name: "Goggles of Night", baseCost: 250, description: "Grants darkvision for up to 60 feet" },
    { name: "Mechanical Beetle", baseCost: 200, description: "A clockwork beetle capable of small tasks" },
    { name: "Arcane Compass", baseCost: 180, description: "Always points to the nearest magic source" },
    { name: "Enchanted Gauntlets", baseCost: 400, description: "Boosts Strength checks by +2" },
    { name: "Portable Forge", baseCost: 500, description: "A foldable, heat-resistant forge for crafting on the go" },
    { name: "Magical Detector", baseCost: 150, description: "Detects nearby magic auras within 30 feet" },
    { name: "Clockwork Parrot", baseCost: 250, description: "A mechanical bird that can mimic speech and deliver messages" },
    { name: "Self-Heating Kettle", baseCost: 50, description: "A kettle that heats itself on command" }
    ],
    exotic_goods: [
    { name: "Spices from the East", baseCost: 5, description: "Rare and fragrant spices for cooking" },
    { name: "Silk Tapestry", baseCost: 150, description: "A large, intricately woven silk tapestry" },
    { name: "Phoenix Feather", baseCost: 500, description: "A rare feather said to be from a phoenix" },
    { name: "Dragonhide Gloves", baseCost: 200, description: "Gloves made from the hide of a dragon" },
    { name: "Obsidian Blade", baseCost: 350, description: "A sharp, dark blade made of volcanic glass" },
    { name: "Ivory Comb", baseCost: 50, description: "A beautifully carved comb made of ivory" },
    { name: "Djinn’s Lamp", baseCost: 800, description: "A brass lamp said to house a djinn" },
    { name: "Astral Shard", baseCost: 600, description: "A shard from the Astral Plane, glowing faintly" },
    { name: "Rare Incense", baseCost: 15, description: "Exotic incense with calming and mystical properties" },
    { name: "Giant’s Tooth", baseCost: 200, description: "A large tooth said to be from a giant" }
]

};

// Updated food menu data with descriptions
const menuItems = {
    poor: [
        { name: "Gruel", cost: 0.1, description: "A thin porridge of oats, barely filling" },
        { name: "Stale bread", cost: 0.2, description: "Yesterday's bread, hard but edible" },
        { name: "Watery soup", cost: 0.3, description: "A thin vegetable broth with a few chunks" },
        { name: "Small ale", cost: 0.1, description: "Weak, low-alcohol beer" },
        { name: "Tough meat", cost: 0.5, description: "Overcooked, chewy meat of questionable origin" },
        { name: "Humble pie", cost: 0.4, description: "Filled with tripe or cow heel" },
        { name: "Acorn soup", cost: 0.2, description: "A foraged soup with a nutty flavor" },
        { name: "Rice and peas", cost: 0.3, description: "A simple, filling dish" },
        { name: "Green chili stew", cost: 0.4, description: "Spicy but watered down" },
        { name: "Grilled snake", cost: 0.6, description: "Served with wild macadamia nuts" },
        { name: "Frogs on skewers", cost: 0.4, description: "Grilled amphibians on a stick" },
        { name: "Onion soup", cost: 0.3, description: "Mostly broth with a few onion pieces" },
        { name: "Lizard gruel", cost: 0.5, description: "Thick porridge with bits of lizard meat" },
        { name: "Nutbread", cost: 0.3, description: "Dense bread made with foraged nuts" },
        { name: "Crisped worm skewers", cost: 0.4, description: "Crunchy insects on a stick" },
        { name: "Turnip wine", cost: 0.2, description: "Fermented turnip juice, barely alcoholic" },
        { name: "Miller's moonshine", cost: 0.3, description: "Rough, homemade spirit" }
    ],
    modest: [
        { name: "Bread and cheese", cost: 0.5, description: "Fresh bread with a wedge of local cheese" },
        { name: "Vegetable stew", cost: 0.7, description: "Hearty stew with seasonal vegetables" },
        { name: "Roasted chicken", cost: 1, description: "Half a chicken, seasoned and roasted" },
        { name: "Ale", cost: 0.3, description: "A mug of standard ale" },
        { name: "Apple pie", cost: 0.6, description: "A slice of warm apple pie" },
        { name: "Mushroom stew", cost: 0.8, description: "Rich stew with local mushrooms" },
        { name: "Corn bread", cost: 0.4, description: "Dense, slightly sweet bread" },
        { name: "Leg of mutton", cost: 1.2, description: "Roasted mutton leg with herbs" },
        { name: "Goose eggs", cost: 0.7, description: "Fried or boiled large eggs" },
        { name: "Beef stew", cost: 1, description: "Hearty stew with chunks of beef" },
        { name: "Sourdough bread", cost: 0.5, description: "Tangy, crusty bread" },
        { name: "Squash and fish soup", cost: 0.9, description: "Creamy soup with local fish" },
        { name: "Mutton meatloaf", cost: 1.1, description: "Dense, flavorful meatloaf" },
        { name: "Rabbit and pumpkin", cost: 1.3, description: "Roasted rabbit with baked pumpkin" },
        { name: "Bread-bowl stew", cost: 1, description: "Thick stew served in a hollowed bread loaf" },
        { name: "Hot beet soup", cost: 0.6, description: "Vibrant soup with a earthy flavor" },
        { name: "Bog-beetle dumplings", cost: 0.8, description: "Doughy pockets filled with savory insects" },
        { name: "Wayfarers' cake", cost: 0.7, description: "Dense, fruit-studded travel cake" },
        { name: "Cooked wolf steak", cost: 1.5, description: "Gamey meat, well-cooked" },
        { name: "Wren pot pie", cost: 1.2, description: "Small birds baked in a flaky crust" },
        { name: "Cattail soup", cost: 0.5, description: "Mild soup made from aquatic plants" },
        { name: "Thistle salad", cost: 0.6, description: "Foraged greens with vinaigrette" },
        { name: "Roasted grubs", cost: 0.7, description: "Crunchy, protein-rich insects" },
        { name: "Spiced potatoes", cost: 0.8, description: "Crispy potatoes with local spices" },
        { name: "Mead", cost: 0.5, description: "Sweet honey wine" },
        { name: "Cider", cost: 0.4, description: "Fermented apple juice" }
    ],
    wealthy: [
        { name: "Roast beef", cost: 2, description: "Tender slices of roast beef with gravy" },
        { name: "Salmon fillet", cost: 2.5, description: "Grilled salmon with lemon and herbs" },
        { name: "Fine wine", cost: 1.5, description: "A glass of quality local wine" },
        { name: "Fruit tart", cost: 1, description: "Delicate pastry filled with seasonal fruits" },
        { name: "Spiced potatoes", cost: 0.8, description: "Crispy potatoes seasoned with exotic spices" },
        { name: "Honey braised boar ribs", cost: 3, description: "Succulent ribs glazed with local honey" },
        { name: "Venison and bean stew", cost: 2.8, description: "Rich stew with tender venison" },
        { name: "Buffaloaf", cost: 2.2, description: "Meatloaf made from buffalo meat" },
        { name: "Honeyed corn", cost: 1, description: "Sweet corn kernels drizzled with honey" },
        { name: "Rack of lamb", cost: 3.5, description: "Herb-crusted lamb ribs" },
        { name: "Pork chop & curds", cost: 2.3, description: "Juicy pork with fresh cheese curds" },
        { name: "Elven bread", cost: 1.8, description: "Light, nourishing elvish waybread" },
        { name: "Baked loin of pork", cost: 2.7, description: "Tender pork loin with rich gravy" },
        { name: "Roasted cod", cost: 2.5, description: "Flaky cod with herb butter" },
        { name: "Mashed potatoes", cost: 1, description: "Creamy, buttery mashed potatoes" },
        { name: "Beef steak and kidney pie", cost: 2.8, description: "Savory pie with a flaky crust" },
        { name: "Clams and garlic", cost: 2.6, description: "Steamed clams in a garlic butter sauce" },
        { name: "Toasted delfarnbread", cost: 1.5, description: "Exotic bread with spiced snail-butter" },
        { name: "Grayling prawns", cost: 3, description: "Delicate prawns poached in garlic butter" },
        { name: "Plovers' eggs", cost: 2, description: "Small, delicate eggs considered a delicacy" },
        { name: "Fortified wine", cost: 2, description: "Strong, sweet wine" },
        { name: "Dwarven ale", cost: 1.8, description: "Robust, flavorful ale" }
    ],
    aristocratic: [
        { name: "Lobster bisque", cost: 5, description: "Creamy soup made with fresh lobster" },
        { name: "Truffle-stuffed pheasant", cost: 8, description: "Roasted pheasant with truffle stuffing" },
        { name: "Vintage wine", cost: 10, description: "A bottle of rare, aged wine" },
        { name: "Gold-leaf dessert", cost: 15, description: "Decadent chocolate cake decorated with edible gold leaf" },
        { name: "Exotic fruit platter", cost: 7, description: "An array of rare and exotic fruits from distant lands" },
        { name: "Roast stag in antler sauce", cost: 12, description: "Tender venison in a rich, unique sauce" },
        { name: "Poached quail eggs", cost: 6, description: "Delicate eggs poached to perfection" },
        { name: "Peppered eggs", cost: 5, description: "Quail eggs with rare peppercorns" },
        { name: "Spiced monkey tail", cost: 9, description: "Exotic meat dish with cashews" },
        { name: "Roast heron", cost: 11, description: "Succulent roasted bird" },
        { name: "Chopped sundew", cost: 7, description: "Rare carnivorous plant salad" },
        { name: "Lobster in tomato cream sauce", cost: 14, description: "Luxurious lobster in a velvety sauce" },
        { name: "Crab-stuffed lobster tail", cost: 16, description: "Indulgent seafood dish" },
        { name: "Roast pheasant in oyster sauce", cost: 13, description: "Gamey bird in a rich, briny sauce" },
        { name: "Poached duck with farro", cost: 10, description: "Tender duck with ancient grain" },
        { name: "Fried ostrich", cost: 15, description: "Exotic bird meat, crispy fried" },
        { name: "Egg omelet", cost: 8, description: "Fluffy omelet made with various rare eggs" },
        { name: "Champagne du le Stomp", cost: 20, description: "Finest sparkling wine" },
        { name: "Red Dragon Crush", cost: 18, description: "Bold, spicy red wine" },
        { name: "Evermead", cost: 25, description: "Legendary elven honey wine" }
    ]
};

// Updated mount data with types and services
const mountTypes = {
    common: [
        { name: "Horse", baseCost: 75, speed: "60 ft", description: "A standard riding horse, suitable for travel" },
        { name: "Pony", baseCost: 30, speed: "40 ft", description: "A smaller mount, good for halflings or children" },
        { name: "Donkey", baseCost: 8, speed: "40 ft", description: "A sturdy pack animal, can carry heavy loads" },
        { name: "Mule", baseCost: 8, speed: "40 ft", description: "A strong and sure-footed pack animal" }
    ],
    exotic: [
        { name: "Camel", baseCost: 50, speed: "50 ft", description: "Well-suited for desert travel" },
        { name: "Elephant", baseCost: 200, speed: "40 ft", description: "A massive mount capable of carrying multiple riders" },
        { name: "Giant Lizard", baseCost: 150, speed: "30 ft", description: "Can climb vertical surfaces, used in some regions" },
        { name: "Griffon", baseCost: 3000, speed: "80 ft", description: "A rare flying mount, requires special training" }
    ],
    war: [
        { name: "Warhorse", baseCost: 400, speed: "60 ft", description: "Trained for combat, doesn't fear battle" },
        { name: "War Pony", baseCost: 100, speed: "40 ft", description: "A smaller warhorse for smaller riders" },
        { name: "War Elephant", baseCost: 1000, speed: "40 ft", description: "A terrifying presence on the battlefield" }
    ]
};

const mountServices = [
    { name: "Stabling (per day)", cost: 0.5, description: "Safe keeping of your mount in a stable" },
    { name: "Grooming", cost: 2, description: "Thorough cleaning and maintenance of your mount" },
    { name: "Shoeing", cost: 5, description: "New horseshoes for your mount" },
    { name: "Training (per day)", cost: 10, description: "Improve your mount's abilities or teach new tricks" },
    { name: "Tack and Harness", cost: 25, description: "Basic riding equipment for your mount" }
];

const factions = {
    "Thieves' Guild": [
        "A high-profile heist is planned",
        "Internal power struggle erupts",
        "New recruits are being tested",
        "A rival guild encroaches on territory",
        "A valuable artifact has been stolen"
    ],
    "Merchants' League": [
        "Trade negotiations with a foreign power",
        "Price-fixing scandal exposed",
        "New trade route discovered",
        "Embargo on certain goods enforced",
        "Annual merchant fair preparations begin"
    ]
    // Add more factions and events
};

const religions = {
    "Church of the Sun": [
        "Major holiday celebration begins",
        "High priest calls for a crusade",
        "Miracle reported at a local shrine",
        "Heretics denounced publicly",
        "New religious text discovered"
    ],
    "Cult of the Moon": [
        "Secret midnight ritual performed",
        "Prophecy of doom circulated",
        "Recruitment drive in poor districts",
        "Conflict with local authorities",
        "Ancient artifact unearthed"
    ]
    // Add more religions and events
};


// Faction Ideologies
const factionIdeologies = [
    "Freedom",
    "Order",
    "Knowledge",
    "Wealth",
    "Nature",
    "Power",
    "Justice",
    "Loyalty",
    "Chaos",
    "Tradition",
    "Progress",
    "Secrecy",
    "Equality",
    "Domination",
    "Balance"
];

// Religion Objectives
const religionObjectives = [
    "Salvation",
    "Enlightenment",
    "Harmony",
    "Judgment",
    "Creation",
    "Destruction",
    "Rebirth",
    "Sacrifice",
    "Prophecy",
    "Purity",
    "Conquest",
    "Protection",
    "Wisdom",
    "Vengeance",
    "Mercy"
];

// Faction Name Components
const factionPrefixes = [
    "Order of", "Brotherhood of", "League of", "Alliance for", "Coalition of",
    "Syndicate of", "Union of", "Guild of", "Society for", "Covenant of", "Circle of", 
    "Cabal of", "Conclave of", "Assembly of", "Network of",
    "Collective of", "Pact of", "Fellowship of", "Consortium of", "Enclave of"
];

const factionSuffixes = [
    "the Righteous", "the Shadow", "the Enlightened", "the Iron Fist", "the Eternal",
    "the Radiant Dawn", "the Crimson Veil", "the Golden Path", "the Obsidian Crown", "the Whispering Winds",
    "the Azure Flame", "the Verdant Grove", "the Midnight Sun", "the Shattered Chain", "the Celestial Aegis",
    "the Crimson Tide", "the Ashen Phoenix", "the Ivory Tower", "the Emerald Star", "the Frozen Heart"
];

// Religion Name Components
const religionPrefixes = [
    "Church of", "Temple of", "Cult of", "Faith of", "Followers of",
    "Disciples of", "Believers in", "Worshippers of", "Adherents of", "Children of",
    "Devotees of", "Servants of", "Acolytes of", "Order of", "Covenant of",
    "Path of", "Seekers of", "Guardians of", "Keepers of", "Bearers of",
    "the Celestial Harmony", "the Primordial Chaos", "the Eternal Cycle", "the Divine Spark", "the Cosmic Weave",
    "the Timeless One", "the Living Earth", "the Starry Host", "the Endless Ocean", "the Blazing Truth"
];

const religionDeities = [
    "the Radiant One", "the All-Seeing", "the Eternal Flame", "the Divine Wind", "the Cosmic Balance",
    "the Veiled Prophet", "the Evergreen", "the Unseen Hand", "the Whispering Void", "the Infinite Light"
];




//-------------------------------------------


//FUNCTIONS









// Initialization and Setup

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
    regionSelect.innerHTML = '<option value="">--Select Region--</option>';
    const uniqueRegions = [...new Set(Object.keys(regions))];
    uniqueRegions.forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionSelect.appendChild(option);
    });

    // Initialize the application state
    updateSavedNPCsList();
    updateSavedLocationsList();
    updateNPCTrustList();
    updateFeatureAccess();
    displayVisitedItems();
    updateClearButtonVisibility();
}

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    populateFactionSelect();
    populateReligionSelect();
    populateShopTypes();
    populateEstablishmentTypes();
    populateMountTypes();
    initializeNoticeboardButtons();
    initializeFactionsReligions();
    updateFeatureAccess();

    
    // Initialize Shops/Food tab
    document.getElementById('generate-shop-items').addEventListener('click', generateShopItems);
    document.getElementById('generate-menu').addEventListener('click', generateMenu);
    document.getElementById('generate-mounts').addEventListener('click', generateMounts);
    document.getElementById('tavernNoticesBtn').addEventListener('click', () => displayNotices('TavernNotices'));
    document.getElementById('streetGossipBtn').addEventListener('click', () => displayNotices('StreetGossip'));
    document.getElementById('townNoticesBtn').addEventListener('click', () => displayNotices('TownNotices'));

    document.getElementById('generateWeatherEventBtn').addEventListener('click', generateWeatherEvent);

    document.getElementById('shop-type').addEventListener('change', function() {
    document.getElementById('generate-shop-items').disabled = !this.value;
    });
    document.getElementById('establishment-type').addEventListener('change', function() {
    document.getElementById('generate-menu').disabled = !this.value;
    });
    document.getElementById('mount-type').addEventListener('change', function() {
    document.getElementById('generate-mounts').disabled = !this.value;
    });

    document.getElementById('clear-shop-items').addEventListener('click', clearShopItems);
    document.getElementById('clear-menu').addEventListener('click', clearMenu);
    document.getElementById('clear-mounts').addEventListener('click', clearMounts);

    // Initialize Factions & Religions tab
    document.getElementById('generate-faction-event').addEventListener('click', generateFactionEvent);
    document.getElementById('generate-religion-event').addEventListener('click', generateReligionEvent);
});




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




function switchTab(tabId) {
    console.log("Switching to tab:", tabId);

    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });

    // Deactivate all tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Activate the selected tab and button
    const selectedTab = document.getElementById(tabId);
    const selectedButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
    if (selectedTab && selectedButton) {
        selectedTab.style.display = 'block';
        selectedButton.classList.add('active');
        console.log("Activated tab and button:", tabId);
    } else {
        console.log("Failed to find tab or button for:", tabId);
        return;
    }

    // Handle specific tab actions
    if (tabId === 'generate-tab') {
        const selectedNPCInfo = document.getElementById('selectedNPCInfo');
        if (selectedNPCInfo) {
            selectedNPCInfo.innerHTML = '';
        }
    } else if (tabId === 'trust-tab') {
        const selectedNPCInfo = document.getElementById('selectedNPCInfo');
        if (selectedNPCInfo && selectedNPCInfo.innerHTML.trim() === '') {
            selectedNPCInfo.innerHTML = '<p>Select an NPC from the Saved Items tab to view their information.</p>';
        }
        updateNPCTrustList();
        populateNPCEventSelect();
    } else if (tabId === 'noticeboards-tab') {
        handleNoticeboardsTab();
    } else if (tabId === 'weather-tab') {
        handleWeatherTab();
    } else if (tabId === 'shops-food-tab') {
        handleShopsFoodTab();
    } else if (tabId === 'factions-religions-tab') {
        handleFactionsReligionsTab();
    } else if (tabId === 'saved-items-tab') {
        updateSavedNPCsList();
        updateSavedLocationsList();
    }

    // Check if the tab is locked (Patreon feature)
    const isUnlocked = isPatreonUnlocked();
    if (!isUnlocked && (tabId === 'trust-tab' || tabId === 'noticeboards-tab' || tabId === 'weather-tab' || tabId === 'shops-food-tab' || tabId === 'factions-religions-tab' || tabId === 'saved-items-tab')) {
        let lockedMessage = selectedTab.querySelector('.locked-message');
        if (!lockedMessage) {
            lockedMessage = document.createElement('p');
            lockedMessage.textContent = 'This feature is locked. Please unlock with a valid Patreon code.';
            lockedMessage.classList.add('locked-message');
            selectedTab.appendChild(lockedMessage);
        }
        lockedMessage.style.display = 'block';
    }
}





function clearNPCEvent() {
    const npcEventInfo = document.getElementById('npcEventInfo');
    npcEventInfo.innerHTML = '';
}





function updateFeatureAccess() {
    const isUnlocked = isPatreonUnlocked();
    console.log("updateFeatureAccess called, isUnlocked:", isUnlocked);

    const lockedElements = document.querySelectorAll('.patreon-locked');
    lockedElements.forEach(el => {
        if (el) el.style.display = isUnlocked ? 'block' : 'none';
    });

    const unlockFeaturesBtn = document.getElementById('unlockFeaturesBtn');
    if (unlockFeaturesBtn) {
        unlockFeaturesBtn.textContent = isUnlocked ? 'Change Patreon Code' : 'Unlock Patreon Features';
    }

    // Hide Shops & Food and Factions & Religions tabs when locked
    const shopsFoodTab = document.getElementById('shops-food-tab');
    const factionsReligionsTab = document.getElementById('factions-religions-tab');
    if (shopsFoodTab) shopsFoodTab.style.display = isUnlocked ? 'block' : 'none';
    if (factionsReligionsTab) factionsReligionsTab.style.display = isUnlocked ? 'block' : 'none';

    // Hide specific buttons when locked
    const buttonsToHide = [
        'generate-faction-event',
        'generate-religion-event',
        'generate-shop-items',
        'generate-menu',
        'generate-mounts',
        'generate-faction',
        'clear-faction',
        'generate-religion',
        'clear-religion'
    ];

    buttonsToHide.forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.style.display = isUnlocked ? 'inline-block' : 'none';
        }
    });

    // Handle Factions & Religions tab
    const factionsReligionsContent = document.getElementById('factions-religions-content');
    const factionsReligionsDescription = document.getElementById('factions-religions-description');
    if (factionsReligionsContent && factionsReligionsDescription) {
        console.log("Updating factions and religions visibility");
        factionsReligionsContent.style.display = isUnlocked ? 'block' : 'none';
        factionsReligionsDescription.style.display = isUnlocked ? 'none' : 'block';
    } else {
        console.log("Factions and Religions elements not found");
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
    const lockedMessage = document.querySelector('#generate-tab .locked-message');
    if (lockedMessage) {
        lockedMessage.style.display = isUnlocked ? 'none' : 'block';
    }

    console.log("updateFeatureAccess completed");
}




document.addEventListener('DOMContentLoaded', () => {
    if (window.OBR) {
        initializeExtension();
    } else {
        console.error("OBR is not defined. Make sure the Owlbear Rodeo SDK is properly loaded.");
        initializeApp(); // Fall back to normal initialization if OBR is not available
    }
});





function initializeFactionsReligions() {
    populateDropdowns();
    setupEventListeners();
}





function populateDropdowns() {
    const factionIdeologySelect = document.getElementById('faction-ideology');
    const religionObjectiveSelect = document.getElementById('religion-objective');

    factionIdeologies.forEach(ideology => {
        const option = document.createElement('option');
        option.value = ideology;
        option.textContent = ideology;
        factionIdeologySelect.appendChild(option);
    });

    religionObjectives.forEach(objective => {
        const option = document.createElement('option');
        option.value = objective;
        option.textContent = objective;
        religionObjectiveSelect.appendChild(option);
    });
}




function setupEventListeners() {
    const setupListener = (elementId, eventType, handler) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.addEventListener(eventType, handler);
        } else {
            console.warn(`Element with id '${elementId}' not found`);
        }
    };

    // Existing faction and religion listeners
    setupListener('generate-faction', 'click', generateFaction);
    setupListener('clear-faction', 'click', clearFaction);
    setupListener('generate-religion', 'click', generateReligion);
    setupListener('clear-religion', 'click', clearReligion);

    // Weather event listener
    setupListener('generateWeatherEventBtn', 'click', generateWeatherEvent);

    // Shop type change listener
    setupListener('shop-type', 'change', function() {
        const generateShopItemsBtn = document.getElementById('generate-shop-items');
        if (generateShopItemsBtn) {
            generateShopItemsBtn.disabled = !this.value;
        }
    });

    // Establishment type change listener
    setupListener('establishment-type', 'change', function() {
        const generateMenuBtn = document.getElementById('generate-menu');
        if (generateMenuBtn) {
            generateMenuBtn.disabled = !this.value;
        }
    });

    // Mount type change listener
    setupListener('mount-type', 'change', function() {
        const generateMountsBtn = document.getElementById('generate-mounts');
        if (generateMountsBtn) {
            generateMountsBtn.disabled = !this.value;
        }
    });
}

// Make sure to call this function after the DOM is loaded
document.addEventListener('DOMContentLoaded', setupEventListeners);




//---------------------------------------------------




// Generator Functions




function clearFaction() {
    document.getElementById('faction-display').innerHTML = '';
}




function clearReligion() {
    document.getElementById('religion-display').innerHTML = '';
}




function convertCurrency(value) {
    if (value >= 1) return `${value.toFixed(2)} gp`;
    if (value >= 0.1) return `${(value * 10).toFixed(2)} sp`;
    return `${(value * 100).toFixed(2)} cp`;
}




function generateDescription(ideologyOrObjective) {
    // Generate a random description based on the ideology or objective
    const descriptions = {
        "Freedom": "A group dedicated to promoting individual liberty and resisting oppression.",
        "Order": "An organization focused on maintaining stability and enforcing strict rules.",
        "Knowledge": "A collective of scholars and researchers seeking to uncover ancient secrets.",
        "Wealth": "A powerful merchant guild with influence over trade routes and economies.",
        "Nature": "Guardians of the natural world, protecting it from exploitation and destruction.",
        // Add more descriptions for each ideology and objective
    };

    return descriptions[ideologyOrObjective] || "A mysterious group with unknown motives.";
}





function generateLeaders(count) {
    const leaders = [];
    const roles = ["Leader", "Second-in-command", "Treasurer", "Strategist", "Recruiter"];

    for (let i = 0; i < count; i++) {
        const firstName = getRandomElement(firstNames);
        const lastName = getRandomElement(lastNames);
        const role = roles[i] || "Member";
        leaders.push({ name: `${firstName} ${lastName}`, role: role });
    }

    return leaders;
}

function generateSafehouses(count) {
    const locations = [
        "Abandoned warehouse in the docks",
        "Hidden cellar beneath a tavern",
        "Remote cabin in the woods",
        "Secret room in a noble's mansion",
        "Cave system outside the city"
    ];

    return shuffleArray(locations).slice(0, count);
}

function generatePractices(count) {
    const practices = [
        "Daily prayer at dawn and dusk",
        "Weekly fasting ritual",
        "Annual pilgrimage to sacred sites",
        "Meditation in nature",
        "Charitable acts for the less fortunate",
        "Study of ancient texts",
        "Ritual sacrifices to appease the gods"
    ];

    return shuffleArray(practices).slice(0, count);
}





function generateFaction() {
    const ideology = document.getElementById('faction-ideology').value;
    if (!ideology) {
        alert('Please select an ideology');
        return;
    }

    const factionName = generateFactionName(ideology);
    const description = generateDescription(ideology);
    const leaders = generateLeaders(3); // Generate 3 leaders
    const safehouses = generateSafehouses(2); // Generate 2 safehouses

    const factionHtml = `
        <h4>${factionName}</h4>
        <p><strong>Ideology:</strong> ${ideology}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Leaders:</strong></p>
        <ul>
            ${leaders.map(leader => `<li>${leader.name} - ${leader.role}</li>`).join('')}
        </ul>
        <p><strong>Safehouses:</strong></p>
        <ul>
            ${safehouses.map(safehouse => `<li>${safehouse}</li>`).join('')}
        </ul>
    `;

    document.getElementById('faction-display').innerHTML = factionHtml;
}





function generateReligion() {
    const objective = document.getElementById('religion-objective').value;
    if (!objective) {
        alert('Please select an objective');
        return;
    }

    const religionName = generateReligionName(objective);
    const description = generateDescription(objective);
    const leaders = generateLeaders(2); // Generate 2 leaders
    const practices = generatePractices(3); // Generate 3 religious practices

    const religionHtml = `
        <h4>${religionName}</h4>
        <p><strong>Objective:</strong> ${objective}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Leaders:</strong></p>
        <ul>
            ${leaders.map(leader => `<li>${leader.name} - ${leader.role}</li>`).join('')}
        </ul>
        <p><strong>Key Practices:</strong></p>
        <ul>
            ${practices.map(practice => `<li>${practice}</li>`).join('')}
        </ul>
    `;

    document.getElementById('religion-display').innerHTML = religionHtml;
}




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




function generateWeather() {
    const condition = getRandomElement(weatherConditions);
    return {
        condition: condition,
        effect: weatherEffects[condition]
    };
}




function generateWeatherEvent() {
    const weatherCondition = document.getElementById('weather-condition').value;
    if (!weatherCondition) {
        alert('Please select a weather condition');
        return;
    }
    
    const event = getRandomElement(weatherEvents[weatherCondition]);
    const dcRoll = Math.floor(Math.random() * 20) + 1;
    const dc = Math.floor(Math.random() * 10) + 10; // DC between 10 and 19
    
    const weatherEventInfo = document.getElementById('weatherEventInfo');
    weatherEventInfo.innerHTML = `
        <h3>Weather Event: ${weatherCondition}</h3>
        <p><strong>Event:</strong> ${event}</p>
        <p><strong>Effect:</strong> ${weatherEffects[weatherCondition]}</p>
        <p><strong>Player Action:</strong> Make a DC ${dc} Survival check to navigate through this weather safely.</p>
        <p><strong>Consequences:</strong> On a failure, the party may suffer penalties such as reduced travel speed, temporary exhaustion, or potential damage from extreme conditions.</p>
    `;
}




function generateFactionEvent() {
    const factionSelect = document.getElementById('faction-select');
    const faction = factionSelect.value;
    if (!faction) {
        alert('Please select a faction');
        return;
    }
    const event = getRandomElement(factions[faction]);
    document.getElementById('faction-event-info').innerHTML = `<p><strong>${faction}:</strong> ${event}</p>`;
}




function generateReligionEvent() {
    const religionSelect = document.getElementById('religion-select');
    const religion = religionSelect.value;
    if (!religion) {
        alert('Please select a religion');
        return;
    }
    const event = getRandomElement(religions[religion]);
    document.getElementById('religion-event-info').innerHTML = `<p><strong>${religion}:</strong> ${event}</p>`;
}




function generateNPCEvents() {
    const selectedNPC = document.getElementById('npcEventSelect').value;
    if (!selectedNPC) {
        alert('Please select an NPC');
        return;
    }
    const event = generateNPCEvent(selectedNPC);
    document.getElementById('npcEvents').innerHTML = `<p>${event}</p>`;
}





function generateNPCEvent(npcName) {
    const savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    const npc = savedNPCs[npcName];
    
    if (!npc) return;

    let eventCategory;
    if (npc.trust <= 2) eventCategory = 'low';
    else if (npc.trust <= 5) eventCategory = 'medium';
    else eventCategory = 'high';

    const event = getRandomElement(trustEvents[eventCategory]);
    const npcEventInfo = document.getElementById('npcEventInfo');
    npcEventInfo.innerHTML = `<p><strong>Event:</strong> ${event}</p>`;
}

// Make sure this event listener is set up
document.getElementById('generateNPCEventsBtn').addEventListener('click', generateNPCEvents);
document.getElementById('generateNPCEventsBtn').addEventListener('click', displayNPCEvents);




function generateShopItems() {
    const shopType = document.getElementById('shop-type').value;
    const markupMultiplier = parseFloat(document.getElementById('markup-multiplier').value);
    const shopItemsList = document.getElementById('shop-items-list');
    
    shopItemsList.innerHTML = ''; // Clear previous content
    
    if (!shopType) {
        shopItemsList.innerHTML = '<p>Please select a shop type.</p>';
        return;
    }
    
    const items = shopItems[shopType];
    if (!items) {
        console.error("No items found for shop type:", shopType);
        return;
    }

    const shuffledItems = shuffleArray(items);
    const selectedItems = shuffledItems.slice(0, 8); // Select only 8 random items

    selectedItems.forEach(item => {
        const adjustedCost = item.baseCost * markupMultiplier;
        const displayCost = convertPrice(adjustedCost);
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.name}</strong> - ${displayCost}<br>${item.description}`;
        shopItemsList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', initializeShopsFoodTab);






function generateMenu() {
    const establishmentType = document.getElementById('establishment-type').value;
    const menuList = document.getElementById('menu-list');
    
    menuList.innerHTML = ''; // Clear previous content
    
    if (!establishmentType) {
        menuList.innerHTML = '<p>Please select an establishment type.</p>';
        return;
    }
    
    const items = menuItems[establishmentType];
    if (!items) {
        console.error("No items found for establishment type:", establishmentType);
        return;
    }

    // Generate food items
    const foodItems = shuffleArray(items).slice(0, 5);
    
    // Generate drinks based on establishment type
    const drinks = generateDrinks(establishmentType);

    // Combine food and drinks
    const allItems = [...foodItems, ...drinks];

    allItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.name}</strong> - ${item.cost.toFixed(2)} gp<br>${item.description}`;
        menuList.appendChild(li);
    });
}





function generateDrinks(establishmentType) {
    const commonDrinks = [
        { name: "Ale", cost: 0.04, description: "A common brew" },
        { name: "Beer", cost: 0.04, description: "Locally brewed beer" },
        { name: "Wine, common", cost: 0.2, description: "A simple table wine" },
    ];

    const fancyDrinks = [
        { name: "Wine, fine", cost: 1, description: "A high-quality vintage" },
        { name: "Spirits", cost: 0.3, description: "Strong distilled alcohol" },
        { name: "Exotic Cocktail", cost: 0.5, description: "A mix of rare ingredients" },
    ];

    let drinks = [];

    switch (establishmentType) {
        case 'poor':
            drinks = commonDrinks.slice(0, 2);
            break;
        case 'modest':
            drinks = commonDrinks;
            break;
        case 'wealthy':
            drinks = [...commonDrinks, ...fancyDrinks.slice(0, 2)];
            break;
        case 'aristocratic':
            drinks = [...commonDrinks, ...fancyDrinks];
            break;
    }

    return shuffleArray(drinks).slice(0, 3); // Return 3 random drinks
}





function generateFactionName(ideology) {
    const prefix = getRandomElement(factionPrefixes);
    const suffix = getRandomElement(factionSuffixes);
    
    // Adjust name based on ideology
    if (['Chaos', 'Secrecy', 'Domination'].includes(ideology)) {
        return `${prefix} ${suffix}`;
    } else {
        return `${prefix} ${ideology} ${suffix}`;
    }
}





function generateReligionName(objective) {
    const prefix = getRandomElement(religionPrefixes);
    const deity = getRandomElement(religionDeities);
    
    // Adjust name based on objective
    if (['Destruction', 'Vengeance', 'Conquest'].includes(objective)) {
        return `${prefix} ${deity}`;
    } else {
        return `${prefix} ${objective} and ${deity}`;
    }
}




// Call this function in your initializeApp function
function initializeFactionsReligions() {
        updateFactionReligionUI();
}




function updateFactionReligionUI() {
    const factionIdeologySelect = document.getElementById('faction-ideology');
    const religionObjectiveSelect = document.getElementById('religion-objective');
    const generateFactionBtn = document.getElementById('generate-faction-name');
    const generateReligionBtn = document.getElementById('generate-religion-name');
    const factionNameDisplay = document.getElementById('faction-name-display');
    const religionNameDisplay = document.getElementById('religion-name-display');

    if (!factionIdeologySelect || !religionObjectiveSelect) {
        console.error("Faction ideology or religion objective select elements not found");
        return;
    }

    // Populate faction ideology select
    factionIdeologySelect.innerHTML = '<option value="">--Select Ideology--</option>';
    factionIdeologies.forEach(ideology => {
        const option = document.createElement('option');
        option.value = ideology;
        option.textContent = ideology;
        factionIdeologySelect.appendChild(option);
    });

    // Populate religion objective select
    religionObjectiveSelect.innerHTML = '<option value="">--Select Objective--</option>';
    religionObjectives.forEach(objective => {
        const option = document.createElement('option');
        option.value = objective;
        option.textContent = objective;
        religionObjectiveSelect.appendChild(option);
    });

    if (generateFactionBtn) {
        generateFactionBtn.addEventListener('click', () => {
            const ideology = factionIdeologySelect.value;
            if (ideology && factionNameDisplay) {
                const factionName = generateFactionName(ideology);
                factionNameDisplay.textContent = factionName;
            }
        });
    } else {
        console.error("Generate faction button not found");
    }

    if (generateReligionBtn) {
        generateReligionBtn.addEventListener('click', () => {
            const objective = religionObjectiveSelect.value;
            if (objective && religionNameDisplay) {
                const religionName = generateReligionName(objective);
                religionNameDisplay.textContent = religionName;
            }
        });
    } else {
        console.error("Generate religion button not found");
    }
}





function generateMounts() {
    const mountType = document.getElementById('mount-type').value;
    const mountList = document.getElementById('mount-list');
    
    mountList.innerHTML = ''; // Clear previous content

    if (!mountType) {
        mountList.innerHTML = '<p>Please select a mount type.</p>';
        return;
    }

    const mounts = mountTypes[mountType];
    mounts.forEach(mount => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${mount.name}</strong> - Cost: ${mount.baseCost} gp, Speed: ${mount.speed}<br>${mount.description}`;
        mountList.appendChild(li);
    });

    // Add mount services
    const servicesHeader = document.createElement('h4');
    servicesHeader.textContent = 'Additional Services:';
    mountList.appendChild(servicesHeader);

    const randomServices = shuffleArray(mountServices).slice(0, 3); // Get 3 random services
    randomServices.forEach(service => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${service.name}</strong> - ${service.cost} gp<br>${service.description}`;
        mountList.appendChild(li);
    });
}




function addCurrencyLegend() {
    const legend = document.createElement('div');
    legend.innerHTML = `
        <h4>Currency Exchange Rates</h4>
        <p>1 gp = 10 sp = 100 cp</p>
        <p>1 sp = 10 cp</p>
    `;
    legend.classList.add('currency-legend');
    document.getElementById('shops-food-tab').prepend(legend);
}





function convertPrice(price) {
    if (price >= 1) {
        return `${price} gp`;
    } else if (price >= 0.1) {
        return `${Math.round(price * 10)} sp`;
    } else {
        return `${Math.round(price * 100)} cp`;
    }
}




function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}




//-------------------------------------


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

document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', filterNPCs);
});

document.getElementById('removeSelectedNPCs').addEventListener('click', () => {
    const selectedNPCs = document.querySelectorAll('.npc-select:checked');
    let savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};

    selectedNPCs.forEach(checkbox => {
        const npcName = checkbox.dataset.npc;
        delete savedNPCs[npcName];
    });

    localStorage.setItem('savedNPCs', JSON.stringify(savedNPCs));
    updateSavedNPCsList();
    updateNPCTrustList();
    displayVisitedItems();
    populateNPCEventSelect();
});

document.getElementById('removeSelectedLocations').addEventListener('click', () => {
    const selectedLocations = document.querySelectorAll('.location-select:checked');
    let savedLocations = JSON.parse(localStorage.getItem('savedLocations')) || {};

    selectedLocations.forEach(checkbox => {
        const locationName = checkbox.dataset.location;
        delete savedLocations[locationName];
    });

    localStorage.setItem('savedLocations', JSON.stringify(savedLocations));
    updateSavedLocationsList();
});





function displayWeather() {
    const weather = generateWeather();
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <h3>Current Weather</h3>
        <p><strong>Condition:</strong> ${weather.condition}</p>
        <p><strong>Effect:</strong> ${weather.effect}</p>
    `;
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
    
    const visitedItemsElement = document.getElementById('visitedItems');
    if (visitedItemsElement) {
        visitedItemsElement.innerHTML = visitedItems;
    } else {
        console.error('Element with ID "visitedItems" not found');
    }
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




//-----------------------------------


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
    flashSavedMessage();
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
    flashSavedMessage();
}





function loadNPC(npcName) {
    const savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    if (savedNPCs[npcName]) {
        const npc = savedNPCs[npcName];
        const selectedNPCInfo = document.getElementById('selectedNPCInfo');
        selectedNPCInfo.innerHTML = `
            <div class="info-content">
                ${npc.info}
                <div class="npc-status">
                    <label><input type="checkbox" ${npc.met ? 'checked' : ''} onchange="updateNPCStatus('${npcName}', 'met', this.checked)"> Met</label>
                    <label><input type="checkbox" ${npc.injured ? 'checked' : ''} onchange="updateNPCStatus('${npcName}', 'injured', this.checked)"> Injured</label>
                    <label><input type="checkbox" ${npc.dead ? 'checked' : ''} onchange="updateNPCStatus('${npcName}', 'dead', this.checked)"> Dead</label>
                    <label><input type="checkbox" ${npc.missing ? 'checked' : ''} onchange="updateNPCStatus('${npcName}', 'missing', this.checked)"> Missing</label>
                    <label><input type="checkbox" ${npc.retired ? 'checked' : ''} onchange="updateNPCStatus('${npcName}', 'retired', this.checked)"> Retired</label>
                </div>
                <div class="trust-slider-container">
                    <input type="range" min="0" max="8" value="${npc.trust}" 
                           oninput="updateTrustLabel(this, '${npcName}')" 
                           onchange="updateNPCTrust('${npcName}', this.value)">
                    <div class="trust-labels">
                        <span class="trust-min">Overt Enemy</span>
                        <span class="trust-value" id="trustLabel-${npcName}">${trustLevels[npc.trust]}</span>
                        <span class="trust-max">Devoted Ally</span>
                    </div>
                </div>
                <div class="npc-event-buttons">
                    <button onclick="generateNPCEvent('${npcName}')">Generate Event</button>
                    <button onclick="clearNPCEvent()">Clear Event</button>
                </div>
                <div id="npcEventInfo"></div>
            </div>
        `;
        updateNPCTrustList();
    }
}




function loadLocation(locationName) {
    const savedLocations = JSON.parse(localStorage.getItem('savedLocations')) || {};
    if (savedLocations[locationName]) {
        document.getElementById('locationInfo').innerHTML = savedLocations[locationName].info;
        document.getElementById('locationInfo').scrollIntoView({behavior: "smooth"});
    }
}




//-------------------------------


// Update Display Functions


function updateSavedNPCsList() {
    const savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    const savedNPCsList = document.getElementById('savedNPCsList');
    savedNPCsList.innerHTML = '';
    if (Object.keys(savedNPCs).length === 0) {
        savedNPCsList.innerHTML = '<li>No saved NPCs</li>';
    } else {
        for (let npcName in savedNPCs) {
            const npc = savedNPCs[npcName];
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="npc-item">
                    <div class="npc-info" data-npc="${npcName}">
                        <div class="saved-item-name">${npc.name}</div>
                        <div class="npc-filter-options">
                            <label><input type="checkbox" ${npc.met ? 'checked' : ''} onchange="updateNPCStatus('${npcName}', 'met', this.checked)"> Met</label>
                            <label><input type="checkbox" ${npc.injured ? 'checked' : ''} onchange="updateNPCStatus('${npcName}', 'injured', this.checked)"> Injured</label>
                            <label><input type="checkbox" ${npc.dead ? 'checked' : ''} onchange="updateNPCStatus('${npcName}', 'dead', this.checked)"> Dead</label>
                            <label><input type="checkbox" ${npc.missing ? 'checked' : ''} onchange="updateNPCStatus('${npcName}', 'missing', this.checked)"> Missing</label>
                            <label><input type="checkbox" ${npc.retired ? 'checked' : ''} onchange="updateNPCStatus('${npcName}', 'retired', this.checked)"> Retired</label>
                        </div>
                    </div>
                </div>
            `;
            li.querySelector('.saved-item-name').addEventListener('click', () => {
                loadNPC(npcName);
                switchTab('trust-tab');
            });
            savedNPCsList.appendChild(li);
        }
    }
    updateClearButtonVisibility();
}




function updateSavedLocationsList() {
    const savedLocations = JSON.parse(localStorage.getItem('savedLocations')) || {};
    const savedLocationsList = document.getElementById('savedLocationsList');
    if (!savedLocationsList) {
        console.error('Element with id "savedLocationsList" not found');
        return;
    }
    savedLocationsList.innerHTML = '';
    if (Object.keys(savedLocations).length === 0) {
        savedLocationsList.innerHTML = '<li>No saved locations</li>';
    } else {
        for (let locationName in savedLocations) {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="location-item">
                    <div class="remove-checkbox">
                        <input type="checkbox" id="remove-${locationName}" class="location-select" data-location="${locationName}">
                        <label for="remove-${locationName}">Remove</label>
                    </div>
                    <div class="location-info" data-location="${locationName}">
                        <div class="saved-item-name">${savedLocations[locationName].name}</div>
                        <label><input type="checkbox" ${savedLocations[locationName].visited ? 'checked' : ''} onchange="updateLocationVisited('${locationName}', this.checked)"> Visited</label>
                    </div>
                </div>
            `;
            li.querySelector('.location-info').addEventListener('click', () => {
                loadLocation(locationName);
            });
            savedLocationsList.appendChild(li);
        }
    }
    updateClearButtonVisibility();
}




function updateNPCStatus(npcName, status, value) {
    let savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    if (savedNPCs[npcName]) {
        savedNPCs[npcName][status] = value;
        localStorage.setItem('savedNPCs', JSON.stringify(savedNPCs));
    }
    filterNPCs();
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
        li.addEventListener('click', () => loadNPC(npcName));
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




function updateClearButtonVisibility() {
    const savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    const savedLocations = JSON.parse(localStorage.getItem('savedLocations')) || {};
    const clearNPCsBtn = document.getElementById('clearNPCsBtn');
    const clearLocationsBtn = document.getElementById('clearLocationsBtn');
    
    if (clearNPCsBtn) {
        clearNPCsBtn.style.display = Object.keys(savedNPCs).length ? 'inline-block' : 'none';
    }
    if (clearLocationsBtn) {
        clearLocationsBtn.style.display = Object.keys(savedLocations).length ? 'inline-block' : 'none';
    }
}




function filterNPCs() {
    const filterAll = document.getElementById('filter-all').checked;
    const filterMet = document.getElementById('filter-met').checked;
    const filterInjured = document.getElementById('filter-injured').checked;
    const filterDead = document.getElementById('filter-dead').checked;
    const filterMissing = document.getElementById('filter-missing').checked;
    const filterRetired = document.getElementById('filter-retired').checked;

    const savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    const savedNPCsList = document.getElementById('savedNPCsList');

    if (!savedNPCsList) {
        console.error('Element with id "savedNPCsList" not found');
        return;
    }

    Array.from(savedNPCsList.children).forEach(li => {
        const npcName = li.querySelector('.npc-select').dataset.npc;
        const npc = savedNPCs[npcName];

        const shouldShow = filterAll ||
            (filterMet && npc.met) ||
            (filterInjured && npc.injured) ||
            (filterDead && npc.dead) ||
            (filterMissing && npc.missing) ||
            (filterRetired && npc.retired);

        li.style.display = shouldShow ? '' : 'none';
    });
}




//------------------------------------


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
    populateNPCEventSelect(); // Add this line
}




function clearSavedLocations() {
    localStorage.removeItem('savedLocations');
    updateSavedLocationsList();
    displayVisitedItems();
}




function clearSelectedNPC() {
    document.getElementById('selectedNPCInfo').innerHTML = '';
    document.getElementById('npcEvents').innerHTML = '';
}




function clearShopItems() {
    document.getElementById('shop-items-list').innerHTML = '';
}





function clearMenu() {
    document.getElementById('menu-list').innerHTML = '';
}





function clearMounts() {
    document.getElementById('mount-list').innerHTML = '';
}




function removeNPC(npcName) {
    let savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    delete savedNPCs[npcName];
    localStorage.setItem('savedNPCs', JSON.stringify(savedNPCs));
    updateSavedNPCsList();
    updateNPCTrustList();
    displayVisitedItems();
    populateNPCEventSelect(); // Add this line
}




//---------------------------------


// Patreon and Feature Unlock Functions


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
    await fetchValidCodes();
    if (validateCode(patreonCode)) {
        localStorage.setItem('featuresUnlocked', 'true');
        updateFeatureAccess();
        alert('Features unlocked successfully!');
        switchTab('generate-tab'); // Switch to generate tab after unlocking
    } else {
        alert('Invalid code. Please try again.');
    }
}



//-------------------------------


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




function flashSavedMessage() {
    const savedMessage = document.createElement('div');
    savedMessage.textContent = 'Saved';
    savedMessage.style.position = 'fixed';
    savedMessage.style.top = '50%';
    savedMessage.style.left = '50%';
    savedMessage.style.transform = 'translate(-50%, -50%)';
    savedMessage.style.backgroundColor = 'rgba(0, 255, 0, 0.7)';
    savedMessage.style.padding = '10px 20px';
    savedMessage.style.borderRadius = '5px';
    savedMessage.style.zIndex = '1000';
    document.body.appendChild(savedMessage);
    setTimeout(() => {
        document.body.removeChild(savedMessage);
    }, 1000);
}




//---------------------------------------


// Initialization for Specific Tabs





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




function initializeShopsFoodTab() {
    console.log("Initializing Shops/Food tab");
    try {
        populateShopTypes();
        populateEstablishmentTypes();
        populateMountTypes();

        const generateShopItemsBtn = document.getElementById('generate-shop-items');
        const generateMenuBtn = document.getElementById('generate-menu');
        const generateMountsBtn = document.getElementById('generate-mounts');

        if (generateShopItemsBtn) {
            generateShopItemsBtn.addEventListener('click', generateShopItems);
            console.log("Added event listener to generate-shop-items button");
        } else {
            console.error("generate-shop-items button not found");
        }

        if (generateMenuBtn) {
            generateMenuBtn.addEventListener('click', generateMenu);
            console.log("Added event listener to generate-menu button");
        } else {
            console.error("generate-menu button not found");
        }

        if (generateMountsBtn) {
            generateMountsBtn.addEventListener('click', generateMounts);
            console.log("Added event listener to generate-mounts button");
        } else {
            console.error("generate-mounts button not found");
        }

        const shopTypeSelect = document.getElementById('shop-type');
        const establishmentTypeSelect = document.getElementById('establishment-type');
        const mountTypeSelect = document.getElementById('mount-type');

        if (shopTypeSelect) {
            shopTypeSelect.addEventListener('change', function() {
                document.getElementById('generate-shop-items').disabled = !this.value;
                console.log("Shop type changed to:", this.value);
            });
        } else {
            console.error("shop-type select not found");
        }

        if (establishmentTypeSelect) {
            establishmentTypeSelect.addEventListener('change', function() {
                document.getElementById('generate-menu').disabled = !this.value;
                console.log("Establishment type changed to:", this.value);
            });
        } else {
            console.error("establishment-type select not found");
        }

        if (mountTypeSelect) {
            mountTypeSelect.addEventListener('change', function() {
                document.getElementById('generate-mounts').disabled = !this.value;
                console.log("Mount type changed to:", this.value);
            });
        } else {
            console.error("mount-type select not found");
        }
    } catch (error) {
        console.error("Error in initializeShopsFoodTab:", error);
    }
}




function handleNoticeboardsTab() {
    const noticeboardsContent = document.getElementById('noticeboards-content');
    const noticeboardsDescription = document.getElementById('noticeboards-description');
    if (noticeboardsContent && noticeboardsDescription) {
        if (isPatreonUnlocked()) {
            noticeboardsContent.style.display = 'block';
            noticeboardsDescription.style.display = 'none';
        } else {
            noticeboardsContent.style.display = 'none';
            noticeboardsDescription.style.display = 'block';
        }
    } else {
        console.error('Noticeboards elements not found');
    }
}





function handleWeatherTab() {
    console.log("Weather tab activated");
    // Any specific actions for the weather tab
}




function handleShopsFoodTab() {
    console.log("Shops & Food tab activated");
    if (!isPatreonUnlocked()) {
        console.log("Shops & Food tab is locked");
        return;
    }
    // Initialize Shops/Food tab
    document.getElementById('generate-shop-items').addEventListener('click', generateShopItems);
    document.getElementById('generate-menu').addEventListener('click', generateMenu);
    document.getElementById('generate-mounts').addEventListener('click', generateMounts);
    document.getElementById('shop-type').addEventListener('change', function() {
        document.getElementById('generate-shop-items').disabled = !this.value;
    });
    document.getElementById('establishment-type').addEventListener('change', function() {
        document.getElementById('generate-menu').disabled = !this.value;
    });
    document.getElementById('mount-type').addEventListener('change', function() {
        document.getElementById('generate-mounts').disabled = !this.value;
    });
    document.getElementById('clear-shop-items').addEventListener('click', clearShopItems);
    document.getElementById('clear-menu').addEventListener('click', clearMenu);
    document.getElementById('clear-mounts').addEventListener('click', clearMounts);

    document.getElementById('generateWeatherEventBtn').addEventListener('click', generateWeatherEvent);

}




function handleFactionsReligionsTab() {
    console.log("Factions & Religions tab activated");
    if (!isPatreonUnlocked()) {
        console.log("Factions & Religions tab is locked");
        const content = document.getElementById('factions-religions-content');
        const description = document.getElementById('factions-religions-description');
        if (content && description) {
            content.style.display = 'none';
            description.style.display = 'block';
            description.innerHTML = '<p>This feature is locked. Please unlock with a valid Patreon code.</p>';
        }
        return;
    }
    
    const generateFactionBtn = document.getElementById('generate-faction');
    const clearFactionBtn = document.getElementById('clear-faction');
    const generateReligionBtn = document.getElementById('generate-religion');
    const clearReligionBtn = document.getElementById('clear-religion');

    if (generateFactionBtn) {
        generateFactionBtn.addEventListener('click', generateFaction);
    } else {
        console.error("Generate Faction button not found");
    }

    if (clearFactionBtn) {
        clearFactionBtn.addEventListener('click', clearFaction);
    } else {
        console.error("Clear Faction button not found");
    }

    if (generateReligionBtn) {
        generateReligionBtn.addEventListener('click', generateReligion);
    } else {
        console.error("Generate Religion button not found");
    }

    if (clearReligionBtn) {
        clearReligionBtn.addEventListener('click', clearReligion);
    } else {
        console.error("Clear Religion button not found");
    }
}





//-----------------------------------


// Populate Select Options




function populateNPCEventSelect() {
    const savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    const select = document.getElementById('npcEventSelect');
    if (!select) {
        console.error('NPC Event Select dropdown not found');
        return;
    }
    select.innerHTML = '<option value="">Select NPC</option>';
    for (let npcName in savedNPCs) {
        const option = document.createElement('option');
        option.value = npcName;
        option.textContent = npcName;
        select.appendChild(option);
    }
}




function populateFactionSelect() {
    const factionSelect = document.getElementById('faction-select');
    if (factionSelect) {
        factionSelect.innerHTML = '<option value="">--Select Faction--</option>';
        for (const faction in factions) {
            const option = document.createElement('option');
            option.value = faction;
            option.textContent = faction;
            factionSelect.appendChild(option);
        }
    }
}




function populateReligionSelect() {
    const religionSelect = document.getElementById('religion-select');
    if (religionSelect) {
        religionSelect.innerHTML = '<option value="">--Select Religion--</option>';
        for (const religion in religions) {
            const option = document.createElement('option');
            option.value = religion;
            option.textContent = religion;
            religionSelect.appendChild(option);
        }
    }
}




function populateShopTypes() {
    console.log("Populating shop types");
    try {
        const shopTypeSelect = document.getElementById('shop-type');
        if (shopTypeSelect) {
            shopTypeSelect.innerHTML = '<option value="">--Select Shop Type--</option>';
            Object.keys(shopItems).forEach(type => {
                const option = document.createElement('option');
                option.value = type;
                option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
                shopTypeSelect.appendChild(option);
            });
            console.log("Shop types populated");
        } else {
            console.error("shop-type select not found");
        }
    } catch (error) {
        console.error("Error in populateShopTypes:", error);
    }
}




function populateEstablishmentTypes() {
    console.log("Populating establishment types");
    try {
        const establishmentTypeSelect = document.getElementById('establishment-type');
        if (establishmentTypeSelect) {
            establishmentTypeSelect.innerHTML = '<option value="">--Select Establishment Type--</option>';
            Object.keys(menuItems).forEach(type => {
                const option = document.createElement('option');
                option.value = type;
                option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
                establishmentTypeSelect.appendChild(option);
            });
            console.log("Establishment types populated");
        } else {
            console.error("establishment-type select not found");
        }
    } catch (error) {
        console.error("Error in populateEstablishmentTypes:", error);
    }
}




function populateMountTypes() {
    const mountTypeSelect = document.getElementById('mount-type');
    mountTypeSelect.innerHTML = '<option value="">--Select Mount Type--</option>';
    Object.keys(mountTypes).forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
        mountTypeSelect.appendChild(option);
    });
}




//----------------------------------






// Event listener for DOMContentLoaded to initialize the extension
document.addEventListener('DOMContentLoaded', () => {
    if (window.OBR) {
        console.log("OBR detected, initializing extension");
        initializeExtension();
    } else {
        console.error("OBR is not defined. Make sure the Owlbear Rodeo SDK is properly loaded.");
        initializeApp(); // Fall back to normal initialization if OBR is not available
    }

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
    updateFactionReligionUI();

    // Add event listener for generateNPCEventsBtn
    document.getElementById('generateNPCEventsBtn').addEventListener('click', displayNPCEvents);

    // Initialize Shops/Food tab
    initializeShopsFoodTab();

    // Add event listeners for the filter checkboxes
    document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', filterNPCs);
    });

    // Add event listener for the "Remove Selected NPCs" button
    document.getElementById('removeSelectedNPCs').addEventListener('click', () => {
        const selectedNPCs = document.querySelectorAll('.npc-select:checked');
        let savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};

        selectedNPCs.forEach(checkbox => {
            const npcName = checkbox.dataset.npc;
            delete savedNPCs[npcName];
        });

        localStorage.setItem('savedNPCs', JSON.stringify(savedNPCs));
        updateSavedNPCsList();
        updateNPCTrustList();
        displayVisitedItems();
        populateNPCEventSelect();
    });

    // Add event listener for the "Remove Selected Locations" button
    document.getElementById('removeSelectedLocations').addEventListener('click', () => {
        const selectedLocations = document.querySelectorAll('.location-select:checked');
        let savedLocations = JSON.parse(localStorage.getItem('savedLocations')) || {};

        selectedLocations.forEach(checkbox => {
            const locationName = checkbox.dataset.location;
            delete savedLocations[locationName];
        });

        localStorage.setItem('savedLocations', JSON.stringify(savedLocations));
        updateSavedLocationsList();
    });

    // New initializations
    populateFactionSelect();
    populateReligionSelect();
    initializeNoticeboardButtons();

    // Add event listener for weather event button
    const generateWeatherEventBtn = document.getElementById('generateWeatherEventBtn');
    if (generateWeatherEventBtn) {
        generateWeatherEventBtn.addEventListener('click', generateWeatherEvent);
    } else {
        console.error('Generate Weather Event button not found');
    }

    console.log('All initializations complete');
});
