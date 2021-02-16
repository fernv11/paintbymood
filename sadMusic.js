/*eslint-env browser*/

	

		var songs = ["./music/moodSad/sad1.mp3","./music/moodSad/sad2.mp3","./music/moodSad/sad3.mp3","./music/moodSad/sad4.mp3","./music/moodSad/sad5.mp3","./music/moodSad/sad6.mp3","./music/moodSad/sad7.mp3","./music/moodSad/sad8.mp3","./music/moodSad/sad9.mp3","./music/moodSad/sad10.mp3","./music/moodSad/sad11.mp3","./music/moodSad/sad12.mp3","./music/moodSad/sad13.mp3","./music/moodSad/sad14.mp3","./music/moodSad/sad15.mp3","./music/moodSad/sad16.mp3","./music/moodSad/sad17.mp3"];

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
            if(currentSong > 16){
                currentSong = 0;
            }
            playSong();
				
			
            $("#play img").attr("src","./icons/pause2.svg");
           }
    
        function pre(){
            currentSong--;
            if(currentSong < 0){
                currentSong = 16;
            }
            playSong();
            $("#play img").attr("src","./icons/pause2.svg");  
        }