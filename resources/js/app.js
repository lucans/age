var app = angular.module('army', [])




app.controller("ageCtrl", ['$scope', '$http', '$rootScope','$location', function ($s, $http, $rs, $location) {            

      $s.civilizacoes = {
          "britons": 
              {
                "nome" : "britons",
                "bonus" : {
                    "bonus_1": "Town Centers cost -50% Wood from Castle Age", 
                    "bonus_2": "Foot archers (except Skirmishers) have +1 range in Castle Age, +1 in Imperial Age (for +2 total)",
                    "bonus_3": "Shepherds work 25% faster",
                },
                "bonus_team" : "Archery Ranges work 20% faster",

                "unidade_unica" : "Longbowman (Long-ranged foot archer)",
                "tecnologia_unica" : "Yeomen (Increased range for foot archers, increased attack for towers), Warwolf (Trebuchets do blast damage)",
              },

          "byzantines": 
              {
                "nome" : "byzantines",
                "bonus" : {
                    "bonus_1": "Buildings gain +10% HPs in Dark Age, +20% Feudal Age, +30% Castle Age, +40% Imperial Age", 
                    "bonus_2": "Camels, Skirmishers and the Spearman lines are 25% cheaper",
                    "bonus_3": "Fire Ships attack 20% faster",
                    "bonus_4": "Advance to Imperial Age costs 33% less (667 Food and 536 Gold instead of the usual 1000 Food and 800 Gold)",
                    "bonus_5": "Town Watch technology free",
                },

                "bonus_team" : "Monks heal 50% faster",
                "unidade_unica" : "Cataphract",
                "tecnologia_unica" : "Logistica (Cataphracts cause trample damage), Greek Fire (Range of Fire Ship get increased by one)",
              },      

          "celts": 
              {
                "nome" : "celts",
                "bonus" : {
                    "bonus_1": "Infantry move 15% faster", 
                    "bonus_2": "Lumberjacks work 15% faster",
                    "bonus_3": "Siege weapons fire 20% faster",
                    "bonus_4": "Enemy Herdables can be converted regardless of enemy units next to them",                      
                },                  

                "bonus_team" : "Siege Workshops work 20% faster",
                "unidade_unica" : "Woad Raider (fast-moving infantry)",
                "tecnologia_unica" : "Furor Celtica (increased HP for siege weapons), Stronghold (Castles & Towers fire 20% faster)",
              },      

          "chinese": 
              {
                "nome" : "chinese",
                "bonus" : {
                    "bonus_1": "Start game with three extra villagers, but with -200 food and -50 wood", 
                    "bonus_2": "Town Center supports ten population (instead of five)",
                    "bonus_3": "Technologies are 10% cheaper in Feudal Age, 15% in Castle Age, 20% in Imperial Age",            
                    "bonus_4": "Demolition Ships have 50% more HP",                         
                },
                "bonus_team" : "Farms start with +45 Food",
                "unidade_unica" : "Chu Ko Nu (foot archer that fires multiple arrows)",
                "tecnologia_unica" : "Rocketry (increased pierce attack for Chu Ko Nu and Scorpions), Great Wall (increases Walls' and Towers' HP)'",
              },      

          "franks": 
              {
                "nome" : "franks",
                "bonus" : {
                    "bonus_1": "Farm upgrades are free", 
                    "bonus_2": "Castles are 25% cheaper, costing 488 Stone instead of 650 Stone",
                    "bonus_3": "Knights have 20% more HP",
                },               
                "bonus_team" : "Knights have +2 line of sight",
                "unidade_unica" : "Throwing Axeman (infantry with ranged attack)",
                "tecnologia_unica" : "Bearded Axe (increased range for Throwing Axeman), Chivalry (Stables work 40% faster)",
              },

          "goths": 
              {
                "nome" : "goths",
                "bonus" : {
                    "bonus_1": "Infantry are 35% cheaper starting in the Feudal Age.", 
                    "bonus_2": "Infantry have +1 attack bonus vs buildings",
                    "bonus_3": "Villagers have +5 attack bonus vs wild boars and carry +15 food from hunting",
                    "bonus_4": "+10 population cap in Imperial Age",
                },               
                "bonus_team" : "Barracks work 20% faster",
                "unidade_unica" : "Huskarl (anti-archer and arrow-resistant infantry)",
                "tecnologia_unica" : "Anarchy (Huskarls can be created from Barracks, available in Castle Age), Perfusion (Barracks create units 100% faster, available in Imperial Age)",
              },

          "japaneses": 
              {
                "nome" : "japanese",
                "bonus" : {
                    "bonus_1": "Fishing ships have +100% HP, +2 piercing armor and work 5% faster in Dark Age, 10% Feudal Age, 15% Castle Age, 20% Imperial Age", 
                    "bonus_2": "Mill, Lumber Camps and Mining Camps are 50% cheaper",
                    "bonus_3": "Infantry attack 10% faster in Feudal Age, 15% Castle Age, 25% Imperial Age",                      
                },               
                "bonus_team" : "Galleys have 50% longer line of sight",
                "unidade_unica" : "Samurai (infantry unit good against unique units)",
                "tecnologia_unica" : "Yasama (Towers fire extra arrows), Kataparuto (Trebuchets fire and pack faster)",
              },

          "mongols": 
              {
                "nome" : "mongols",
                "bonus" : {
                    "bonus_1": "Cavalry Archers fire 20% faster", 
                    "bonus_2": "Light Cavalry and Hussar have 30% more HP",
                    "bonus_3": "Hunters work 50% faster",                      
                },               
                "bonus_team" : "Light cavalry have +2 line of sight",
                "unidade_unica" : "Mangudai (anti-siege weapon cavalry archer)",
                "tecnologia_unica" : "Drill (Siege units move faster), Nomads (Houses retain population even after destroyed)",
              },

          "persians": 
              {
                "nome" : "persians",
                "bonus" : {
                    "bonus_1": "Start game with +50 Food and +50 Wood", 
                    "bonus_2": "Town Centers and Docks have +100% HP and work 10% faster in Feudal Age, 15% in Castle Age, 20% in Imperial Age",                                          
                },               
                "bonus_team" : "Knights have +2 attack bonus vs archers",
                "unidade_unica" : "War Elephant (slow yet strong and devastating cavalry)",
                "tecnologia_unica" : "Mahouts (War Elephants move faster), Boiling Oil (Castles do extra damage vs. rams)",
              },

          "saracens": 
              {
                "nome" : "saracens",
                "bonus" : {
                    "bonus_1": "Market trade cost is 5% of goods (rather than 30%)", 
                    "bonus_2": "Transport ships have +100% HP and +5 carry capacity",                                          
                    "bonus_3": "Galleys attack 20% faster",                                          
                    "bonus_4": "Cavalry archers have +3 attack bonus vs buildings",                                          
                },               
                "bonus_team" : "Foot archers have +1 attack bonus vs buildings",
                "unidade_unica" : "Mameluke (anti-cavalry camel with ranged attack)",
                "tecnologia_unica" : "Zealotry (Camels and Mamelukes have more HP), Madrasah (33% of a Monk's gold cost are returned if the monk gets killed)",
              },

          "teutons": 
              {
                "nome" : "teutons",
                "bonus" : {
                    "bonus_1": "Monks have +100% heal range", 
                    "bonus_2": "Towers garrison +100% more units",                                          
                    "bonus_3": "Murder Holes technology free",                                          
                    "bonus_4": "Farms are 33% cheaper",                                          
                    "bonus_5": "Town Centers have +5 line of sight, +2 attack (removed in Forgotten)",                                          
                },               
                "bonus_team" : "Units resist conversion (Resistance to the conversion is similar to Faith)",
                "unidade_unica" : "Teutonic Knight (slow but very strong infantry. Excellent for hand-to-hand combat)",
                "tecnologia_unica" : "Crenellations (Increased range for Castles; garrisoned infantry fire arrows), Ironclad (Siege weapons get +4 melee armor)",
              },

          "turks": 
              {
                "nome" : "turks",
                "bonus" : {
                    "bonus_1": "Gunpowder Units have +25% HP", 
                    "bonus_2": "Gunpowder technologies are 50% cheaper",                                          
                    "bonus_3": "Chemistry technology free",                                          
                    "bonus_4": "Gold miners work 15% faster",                                          
                    "bonus_5": "Light Cavalry and Hussar upgrade free",                                          
                },               
                "bonus_team" : "Gunpowder units created 20% faster",
                "unidade_unica" : "Janissary (more powerful hand cannoneer with increased range)",
                "tecnologia_unica" : "Artillery (increased range for Bombard Towers, Bombard Cannons and Cannon Galleons), Sipahi (Cavalry Archers +20 HP)",
              },            

          "vikings": 
              {
                "nome" : "vikings",
                "bonus" : {
                    "bonus_1": "Warships are 20% cheaper", 
                    "bonus_2": "Infantry have +10% HP in Feudal Age, 15% Castle Age, 20% Imperial Age (not cumulative)",                                          
                    "bonus_3": "Wheelbarrow and Hand Cart technologies are free",                                                                                                      
                },               
                "bonus_team" : "Docks are 25% cheaper",
                "unidade_unica" : "Berserk (health regenerating infantry), Longboat (warship that fires multiple arrows)",
                "tecnologia_unica" : "Berserkergang (Berserks have increased health regenation rate), Chieftains (infantry get +5 attack bonus vs. cavalry)",
              },

          "aztecs": 
              {
                "nome" : "aztecs",
                "bonus" : {
                    "bonus_1": "Villagers carry +5 extra resources", 
                    "bonus_2": "All military units created 15% faster",                                          
                    "bonus_3": "Monks gain 5 HP for each researched Monastery technology",                                                                                                      
                    "bonus_4": "Loom free (removed in Forgotten)",                                                                                                      
                },               
                "bonus_team" : "Relics generate 33% more gold",
                "unidade_unica" : "Jaguar Warrior (Anti-infantry infantry)",
                "tecnologia_unica" : "Garland Wars (Increased attack for infantry), Atlatl (Skirmishers have +1 attack, +1 range)",
              },

          "huns": 
              {
                "nome" : "huns",
                "bonus" : {
                    "bonus_1": "Houses not required, but start game with -100 wood", 
                    "bonus_2": "Cavalry Archers cost -25% in Castle, -30% in Imperial (changed in African Kingdoms)",                                          
                    "bonus_3": "Trebuchets are 35% more accurate",
                },               
                "bonus_team" : "Stables work 20% faster",
                "unidade_unica" : "Tarkan (anti-building cavalry)",
                "tecnologia_unica" : "Atheism (+100 years for Relic/Wonder victories and Spies/Treason cost -50% less), Marauders (Create Tarkans at Stables)",
              },

          "koreans": 
              {
                "nome" : "koreans",
                "bonus" : {
                    "bonus_1": "Villagers have +3 line of sight", 
                    "bonus_2": "Stone miners work 20% faster",                                          
                    "bonus_3": "Tower upgrades are free (Chemistry still required for Bombard Tower)",
                    "bonus_4": "Towers (except Bombard Towers) have +1 range in Castle Age, +1 in Imperial Age (for +2 total)",
                },               
                "bonus_team" : "Mangonels, Onagers have +1 range",
                "unidade_unica" : "War Wagon (heavily armored cavalry archer), Turtle Ship (heavily armored warship)",
                "tecnologia_unica" : "Shinkichon (increased range for Mangonels, Onagers), Panokseon (Turtle Ships move 15% faster)",
              },

          "mayans": 
              {
                "nome" : "mayans",
                "bonus" : {
                    "bonus_1": "Start with +1 Villager, but with -50 Food", 
                    "bonus_2": "Resources last 20% longer",                                          
                    "bonus_3": "Foot archers are 10% cheaper in Feudal Age, 20% in Castle Age, 30% in Imperial Age",                      
                },               
                "bonus_team" : "Walls are 50% cheaper (Stone Walls costs 40% less due to rounding.)",
                "unidade_unica" : "Plumed Archer (fast foot archer with decent pierce armor)",
                "tecnologia_unica" : "El Dorado (increased HP for Eagle Warriors), Obsidian Arrows (Archer-line has +6 attack vs. buildings)",
              },            

          "spanish": 
              {
                "nome" : "spanish",
                "bonus" : {
                    "bonus_1": "Builders work 30% faster", 
                    "bonus_2": "Blacksmith upgrades don't cost gold",                                          
                    "bonus_3": "Cannon Galleons have Ballistics and faster missiles",                      
                    "bonus_4": "Hand Cannoneers and Bombard Cannons fire 15% faster",                      
                },               
                "bonus_team" : "Trade Carts, Trade Cogs return 25% more gold",
                "unidade_unica" : "Conquistador (mounted hand cannoneer), Missionary (mounted monk)",
                "tecnologia_unica" : "Supremacy (increased attack, armor and HP for Villagers), Inquisition (Monks conversion rate improved)",
              },            

          "incas": 
              {
                "nome" : "incas",
                "bonus" : {
                    "bonus_1": "Start with a free llama", 
                    "bonus_2": "Villagers benefit from Blacksmith upgrades",                                          
                    "bonus_3": "Houses support 10 population",                      
                    "bonus_4": "Buildings cost -15% stone",                      
                },               
                "bonus_team" : "Farms are built 50% faster",
                "unidade_unica" : "Kamayuk (anti-cavalry infantry), Slinger (anti-infantry archer)",
                "tecnologia_unica" : "Andean Sling (Slingers and Skirmishers with no minimum range), Couriers (Kamayuks, Slingers and Eagles +1 melee armor/+2 pierce armor)",
              },            

          "incas": 
              {
                "nome" : "incas",
                "bonus" : {
                    "bonus_1": "Start with a free llama", 
                    "bonus_2": "Villagers benefit from Blacksmith upgrades",                                          
                    "bonus_3": "Houses support 10 population",                      
                    "bonus_4": "Buildings cost -15% stone",                      
                },               
                "bonus_team" : "Farms are built 50% faster",
                "unidade_unica" : "Kamayuk (anti-cavalry infantry), Slinger (anti-infantry archer)",
                "tecnologia_unica" : "Andean Sling (Slingers and Skirmishers with no minimum range), Couriers (Kamayuks, Slingers and Eagles +1 melee armor/+2 pierce armor)",
              },            

          "indians": 
              {
                "nome" : "indians",
                "bonus" : {
                    "bonus_1": "Fishermen work 15% faster and carry +15 food", 
                    "bonus_2": "Villagers cost -5% Dark Age, -10% Feudal Age, -15% Castle Age, -20% Imperial Age",                                          
                    "bonus_3": "Camels +1 melee armor/+1 pierce armor",                                                                
                },               
                "bonus_team" : "Camels +6 attack vs. buildings.",
                "unidade_unica" : "Elephant Archer (Heavy mounted archer riding an elephant, good HP and pierce armour), Imperial Camel (Anti-Cavalry Camel upgrade)",
                "tecnologia_unica" : "Sultans (All gold production +10% faster), Shatagni (Hand Cannoneers get +1 range)",
              },          

          "italians": 
              {
                "nome" : "italians",
                "bonus" : {
                    "bonus_1": "All dock technologies cost -50%", 
                    "bonus_2": "Fishing ship cost -25 wood",                                          
                    "bonus_3": "Gunpowder units cost -20% (technology tree states -25% but it's 20)",                                                                
                    "bonus_4": "Advancing to the next age 15% cheaper",                                                                
                },               
                "bonus_team" : "Condottiero also available in allies' barracks in the Imperial Age",
                "unidade_unica" : "Genoese Crossbowman (Archer with bonus against cavalry), Condottiero (Infantry with bonus against gunpowder units)",
                "tecnologia_unica" : "Pavise (Foot archers +1 melee armor/+1 pierce armor), Silk Road (Trade units 50% cheaper)",
              },          

          "magyars": 
              {
                "nome" : "magyars",
                "bonus" : {
                    "bonus_1": "Forging, Iron Casting, Blast Furnace free (requires Blacksmith)", 
                    "bonus_2": "Scout Cavalry, Light Cavalry, Hussar cost -10%",                                          
                    "bonus_3": "Villagers kill wild animals in one strike",
                },               
                "bonus_team" : "Foot archers +2 line of sight",
                "unidade_unica" : "Magyar Huszar (Cheap cavalry unit w/ attack bonus against siege weapons)",
                "tecnologia_unica" : "Recurve Bow (Cavalry archers + 1 range), Mercenaries (Magyar Huszars cost no gold)",
              },          

          "slavs": 
              {
                "nome" : "slavs",
                "bonus" : {
                    "bonus_1": "Farmers work 15% faster", 
                    "bonus_2": "Tracking free",                                          
                    "bonus_3": "Siege units 15% cheaper",
                },               
                "bonus_team" : "Military buildings provide +5 population",
                "unidade_unica" : "Boyar (heavily armored cavalry)",
                "tecnologia_unica" : "Orthodoxy (Monks extra armor), Druzhina (Infantry damage adjacent units)",
              },            

          "berbers": 
              {
                "nome" : "berbers",
                "bonus" : {
                    "bonus_1": "Villagers move +10% faster", 
                    "bonus_2": "Stable units cost -15%/-20% in Castle/Imperial Age",                                          
                    "bonus_3": "Ships move +10% faster",
                },               
                "bonus_team" : "Genitour (mounted skirmisher) available at the Archery Range",
                "unidade_unica" : "Camel Archer ('anti-Cavalry Archer' Cavalry Archer), Genitour (Mounted Skirmisher)",
                "tecnologia_unica" : "Kasbah (Team Castles work +25% faster), Maghrabi Camels (Camel troops regenerate)",
              },            

          "ethiopians": 
              {
                "nome" : "ethiopians",
                "bonus" : {
                    "bonus_1": "Archers fire +15% faster", 
                    "bonus_2": "Receive +100 gold, +100 food when advancing to the next Age",                                          
                    "bonus_3": "Pikeman and Halberdier upgrades free",
                },               
                "bonus_team" : "Towers and Outposts +3 line of sight",
                "unidade_unica" : "Shotel Warrior (infantry)",
                "tecnologia_unica" : "Royal Heirs (Shotel Warriors are created nearly instantly), Torsion Engines (Siege Workshop units blast radius increased)",
              },            

          "malians": 
              {
                "nome" : "malians",
                "bonus" : {
                    "bonus_1": "Buildings cost -15% wood (except Farms)", 
                    "bonus_2": "Barracks units +1 pierce armor per Age (starting from Feudal Age)",                                          
                    "bonus_3": "Gold Mining and  Gold Shaft Mining, free",
                },               
                "bonus_team" : "University researches +80% faster",
                "unidade_unica" : "Gbeto (ranged infantry)",
                "tecnologia_unica" : "Tigui (ungarrisoned Town Centers fire arrows), Farimba (Stable units +5 attack)",
              },

          "portuguese": 
              {
                "nome" : "portuguese",
                "bonus" : {
                    "bonus_1": "All units cost -15% gold", 
                    "bonus_2": "Ships +10% HP",                                          
                    "bonus_3": "Can build Feitoria in Imperial Age",
                },               
                "bonus_team" : "Free Cartography from the Dark Age",
                "unidade_unica" : "Organ Gun (Siege unit), Caravel (Warship)",
                "tecnologia_unica" : "Carrack (Ships +1/+1 armor), Arquebus (Gunpowder units affected by Ballistics)",
              },

          "burmese": 
              {
                "nome" : "burmese",
                "bonus" : {
                    "bonus_1": "Free Lumber Camp upgrades", 
                    "bonus_2": "Infantry +1 attack per Age",                                          
                    "bonus_3": "Monastery techs 50% cheaper",
                },               
                "bonus_team" : "Relics visible on map",
                "unidade_unica" : "Arambai (cavalry with powerful ranged attack)",
                "tecnologia_unica" : "Howdah (Battle Elephants +1/+2 armor), Manipur Cavalry (Cavalry and Arambai +6 attack vs buildings)",
              },          

          "khmer": 
              {
                "nome" : "khmer",
                "bonus" : {
                    "bonus_1": "No buildings required to advance to the next Age or to unlock other buildings", 
                    "bonus_2": "Battle Elephants +15% faster",                                          
                    "bonus_3": "Villagers can garrison in Houses",
                },               
                "bonus_team" : "Scorpions +1 range",
                "unidade_unica" : "Ballista Elephant (siege cavalry)",
                "tecnologia_unica" : "Tusk Swords (Battle Elephants +3 attack), Double Crossbow (Ballista Elephants and Scorpions shoot two projectiles)",
              },          

          "malay": 
              {
                "nome" : "malay",
                "bonus" : {
                    "bonus_1": "Advancing to Ages takes only 60% of the usual time", 
                    "bonus_2": "Fish Traps cost -33%",                                          
                    "bonus_3": "Fish Traps provide unlimited food",
                    "bonus_4": "Battle Elephants 25% cheaper",
                },               
                "bonus_team" : "Docks +100% line of sight",
                "unidade_unica" : "Karambit Warrior (infantry with very cheap production cost)",
                "tecnologia_unica" : "Thalassocracy (upgrade Docks to Harbors, which shoot arrows), Forced Levy (Militia-line costs no gold)",
              },            

          "vietnamese": 
              {
                "nome" : "vietnamese",
                "bonus" : {
                    "bonus_1": "Reveal enemy positions at game start", 
                    "bonus_2": "Archery Range units +10% HP Feudal, +15% Castle, +20% Imperial Age",                                          
                    "bonus_3": "Free Conscription",                      
                },               
                "bonus_team" : "Have access to the Imperial Skirmisher upgrade",
                "unidade_unica" : "Rattan Archer (heavily armored archer)",
                "tecnologia_unica" : "Chatras (Battle Elephants +30 HP), Paper Money (Tributes 500 gold to each Ally)",
              },
      }    


      $s.team = [];

      $s.addCivilizacao = function(civilizacao){        
        if ($s.team.indexOf(civilizacao) < 0) {
          $s.team.push(civilizacao);
        }
        $('#' + civilizacao.nome) .collapse('hide');
      }    

      $s.removeCivilizacao = function(civilizacao){
        $s.team.splice($s.team.indexOf(civilizacao), 1);       
      }

}]);


