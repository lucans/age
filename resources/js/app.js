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
                  "unidade_unica" : "Teutonic Knight (slow but very strong infantry. Excellent for hand-to-hand combat.)",
                  "tecnologia_unica" : "Crenellations (Increased range for Castles; garrisoned infantry fire arrows), Ironclad (Siege weapons get +4 melee armor)",
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


