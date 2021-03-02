/*eslint-env browser*/

	
		
		var songs = ["./music/moodSad/AnaCaptainslogue - Noir Et Blanc Vie.mp3","./music/moodSad/Broken - Patrick Patrikios.mp3","./music/moodSad/Crazy - Patrick Patrikios.mp3","./music/moodSad/Fish Room - Verified Picasso.mp3","./music/moodSad/Lowest Of Fi Riddim - Konrad OldMoney.mp3","./music/moodSad/New Day - Patrick Patrikios.mp3","./music/moodSad/No.9_Esther_s Waltz - Esther Abrami.mp3","./music/moodSad/Nobody Calls It San Fran - Coyote Hearing.mp3","./music/moodSad/Playdate - The Great North Sound Society.mp3","./music/moodSad/Shadowing - Corbyn Kites.mp3","./music/moodSad/Stairway - Patrick Patrikios.mp3","./music/moodSad/Sunset Dream - Cheel.mp3","./music/moodSad/Oh My - Patrick Patrikios.mp3","./music/moodSad/Ponte de Abril - Steve Adams.mp3","./music/moodSad/Space Navigator - Sarah, The Illstrumentalist.mp3","./music/moodSad/Away - Geographer.mp3","./music/moodSad/Building Blocks - Nate Blaze.mp3","./music/moodSad/Summer Breeze - Nate Blaze.mp3","./music/moodSad/Silence for a Film - ann annie.mp3","./music/moodSad/Little Prelude and Fugue - Sir Cubworth.mp3","./music/moodSad/Theme for a One-Handed Piano Concerto - Sir Cubworth.mp3","./music/moodSad/Sonatina No 2 in F Major Rondo - Joel Cummins.mp3","./music/moodSad/Santa Teresa - Patiño.mp3","./music/moodSad/No.10 _A New Beginning - Esther Abrami.mp3","./music/moodSad/Sunn Forest - ELPHNT.mp3","./music/moodSad/Fun in the Sun - Chris Haugen.mp3","./music/moodSad/Rainforest Canopy - Magic In The Other.mp3","./music/moodSad/Dance for Wind Trio - Sir Cubworth.mp3","./music/moodSad/Days Like This - The Whole Other.mp3","./music/moodSad/Dancing Star - Aakash Gandhi.mp3"];


		var randomNumber = Math.floor(Math.random()*(songs.length));
        var song = new Audio();
        var currentSong = randomNumber; 
		var songTitle = document.getElementById("songTitle");
	
       	
//		window.onload = playSong; 

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
            var position = song.currentTime / song.duration;
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