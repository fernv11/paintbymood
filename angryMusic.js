/*eslint-env browser*/

	

		var songs = ["./music/moodAngry/angry1.mp3","./music/moodAngry/angry2.mp3","./music/moodAngry/angry3.mp3","./music/moodAngry/angry4.mp3","./music/moodAngry/angry5.mp3","./music/moodAngry/angry6.mp3","./music/moodAngry/angry7.mp3","./music/moodAngry/angry8.mp3","./music/moodAngry/angry9.mp3","./music/moodAngry/angry10.mp3","./music/moodAngry/angry11.mp3","./music/moodAngry/angry12.mp3","./music/moodAngry/angry13.mp3","./music/moodAngry/angry14.mp3","./music/moodAngry/angry15.mp3","./music/moodAngry/angry16.mp3","./music/moodAngry/angry17.mp3","./music/moodAngry/angry18.mp3","./music/moodAngry/angry19.mp3","./music/moodAngry/angry20.mp3"];

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
            if(currentSong > 19){
                currentSong = 0;
            }
            playSong();
				
			
            $("#play img").attr("src","./icons/pause2.svg");
           }
    
        function pre(){
            currentSong--;
            if(currentSong < 0){
                currentSong = 19;
            }
            playSong();
            $("#play img").attr("src","./icons/pause2.svg");  
        }
