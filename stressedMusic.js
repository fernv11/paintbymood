/*eslint-env browser*/

	
		
		var songs = ["./music/moodStress/Amber - VYEN.mp3","./music/moodStress/Ammil - The Tides.mp3","./music/moodStress/Aurora Borealis Expedition - Asher Fulero.mp3","./music/moodStress/On the Island - Godmode.mp3","./music/moodStress/Cocktail Hour - Aaron Kenny.mp3","./music/moodStress/Dolphin-esque - Godmode.mp3","./music/moodStress/Dream Escape - The Tides.mp3","./music/moodStress/Eternal Garden - Dan Henig.mp3","./music/moodStress/Frolic - E's Jammy Jams.mp3","./music/moodStress/In 3 - Godmode.mp3","./music/moodStress/In the Temple Garden - Aaron Kenny.mp3","./music/moodStress/Interplanetary Alignment - NoMBe.mp3","./music/moodStress/Kiss the Sky - Aakash Gandhi.mp3","./music/moodStress/Lifting Dreams - Aakash Gandhi.mp3","./music/moodStress/Moonrise - Futuremono.mp3","./music/moodStress/Nebular Focus - Dan Henig.mp3","./music/moodStress/Pastorale - Joel Cummins.mp3","./music/moodStress/Peaceful Mind - Astron.mp3","./music/moodStress/Seclusion - The Tides.mp3","./music/moodStress/Seventh Heaven - E's Jammy Jams.mp3","./music/moodStress/Sleepy Hollow - E's Jammy Jams.mp3","./music/moodStress/Somnia III - Reed Mathis.mp3","./music/moodStress/Somnolent - The Tides.mp3","./music/moodStress/State Drive - VYEN.mp3","./music/moodStress/Sunrise in Paris - Dan Henig.mp3","./music/moodStress/The Joy Definitive - pATCHES.mp3","./music/moodStress/The Two Seasons - Dan Bodan.mp3","./music/moodStress/Underwater Exploration - Godmode.mp3","./music/moodStress/Whispering Stream - E's Jammy Jams.mp3","./music/moodStress/White River - Aakash Gandhi.mp3"];

		var randomNumber = Math.floor(Math.random()*(songs.length));
        var song = new Audio();
        var currentSong = randomNumber; 
		var songTitle = document.getElementById("songTitle");
      
		function playSong(){
        
            song.src = songs[currentSong];
			var title = songs[currentSong].replace(/^.*[\\\/]/, '');
			songTitle.textContent= title;
            song.play(); 	
		
        }
        function playOrPauseSong(){
            if(song.paused){
                song.play();
				playSong();
                $("#play img").attr("src","./icons/pause2.svg");
            }
            else{
                song.pause();
                $("#play img").attr("src","./icons/play.svg");
            }
        }
		song.addEventListener('timeupdate',function(){ 
           
            if(song.currentTime == song.duration){
				next();
			}	
        });
        function next(){
            currentSong++;
            if(currentSong > 29){
                currentSong = 0;
            }
            playSong();
				
			
            $("#play img").attr("src","./icons/pause2.svg");
           }
    
        function pre(){
            currentSong--;
            if(currentSong < 0){
                currentSong = 29;
            }
            playSong();
            $("#play img").attr("src","./icons/pause2.svg");  
        }