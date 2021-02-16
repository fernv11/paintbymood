/*eslint-env browser*/

	

		var songs = ["./music/moodBored/bored1.mp3","./music/moodBored/bored2.mp3","./music/moodBored/bored3.mp3","./music/moodBored/bored4.mp3","./music/moodBored/bored5.mp3","./music/moodBored/bored6.mp3","./music/moodBored/bored7.mp3","./music/moodBored/bored8.mp3","./music/moodBored/bored9.mp3","./music/moodBored/bored10.mp3","./music/moodBored/bored11.mp3","./music/moodBored/bored12.mp3","./music/moodBored/bored13.mp3","./music/moodBored/bored14.mp3","./music/moodBored/bored15.mp3","./music/moodBored/bored16.mp3","./music/moodBored/bored17.mp3","./music/moodBored/bored18.mp3","./music/moodBored/bored19.mp3"];

		var randomNumber = Math.floor(Math.random()*(songs.length));
        var song = new Audio();
        var currentSong = randomNumber;    
        window.onload = playSong;   
		function playSong(){
            
            song.src = songs[currentSong];  
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
            if(currentSong > 18){
                currentSong = 0;
            }
            playSong();
				
			
            $("#play img").attr("src","./icons/pause2.svg");
           }
    
        function pre(){
            currentSong--;
            if(currentSong < 0){
                currentSong = 18;
            }
            playSong();
            $("#play img").attr("src","./icons/pause2.svg");  
        }