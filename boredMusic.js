/*eslint-env browser*/

	

		var songs = ["./music/moodBored/A Face in a Cloud - Nathan Moore.mp3","./music/moodBored/Adrift - ELPHNT.mp3","./music/moodBored/Alone - Emmit Fenn.mp3","./music/moodBored/Auckland - VYEN.mp3","./music/moodBored/Down by the Riverside - E's Jammy Jams.mp3","./music/moodBored/Before I Go - RKVC.mp3","./music/moodBored/Digital Memories - Unicorn Heads.mp3","./music/moodBored/Borderless - Aakash Gandhi.mp3","./music/moodBored/Dulcinea - Steve Adams.mp3","./music/moodBored/First Time Experience - Nate Blaze.mp3","./music/moodBored/Hopeful Freedom - Asher Fulero.mp3","./music/moodBored/Jindupe - Lauren Duski.mp3","./music/moodBored/Mosswood - Steve Adams.mp3","./music/moodBored/Muffled Tines - roljui.mp3","./music/moodBored/Past Life - JVNA.mp3","./music/moodBored/No.4 Piano Journey - Esther Abrami.mp3","./music/moodBored/Please - Wayne Jones.mp3","./music/moodBored/Rene's Song - Loopop.mp3","./music/moodBored/Rainy Day - Matt Harris.mp3","./music/moodBored/Rolling Hills - Sir Cubworth.mp3","./music/moodBored/Run Until Your Wings Grow - Late Night Feeler.mp3","./music/moodBored/Silky Smooth - Audio Hertz.mp3","./music/moodBored/Spring Migration - The Great North Sound Society.mp3","./music/moodBored/Spruce Tree - Ashley Shadow.mp3","./music/moodBored/No.10 _A New Beginning - Esther Abrami.mp3","./music/moodBored/Summer of 1984 - RKVC.mp3","./music/moodBored/This Little Light of Mine - E's Jammy Jams.mp3","./music/moodBored/We March Together - Patrick Patrikios.mp3","./music/moodBored/When We Found The Horizon - Late Night Feeler.mp3","./music/moodBored/Wind Riders - Asher Fulero.mp3"];

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