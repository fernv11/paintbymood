/*eslint-env browser*/

	
		
		var songs = ["./music/moodStress/stress1.mp3","./music/moodStress/stress2.mp3","./music/moodStress/stress3.mp3","./music/moodStress/stress4.mp3","./music/moodStress/stress5.mp3","./music/moodStress/stress6.mp3","./music/moodStress/stress7.mp3","./music/moodStress/stress8.mp3","./music/moodStress/stress9.mp3","./music/moodStress/stress10.mp3","./music/moodStress/stress11.mp3","./music/moodStress/stress12.mp3","./music/moodStress/stress13.mp3","./music/moodStress/stress14.mp3","./music/moodStress/stress15.mp3","./music/moodStress/stress16.mp3","./music/moodStress/stress17.mp3","./music/moodStress/stress18.mp3","./music/moodStress/stress19.mp3","./music/moodStress/stress20.mp3","./music/moodStress/stress21.mp3","./music/moodStress/stress22.mp3","./music/moodStress/stress23.mp3","./music/moodStress/stress24.mp3","./music/moodStress/stress25.mp3","./music/moodStress/stress26.mp3","./music/moodStress/stress27.mp3"];

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
            if(currentSong > 26){
                currentSong = 0;
            }
            playSong();
				
			
            $("#play img").attr("src","./icons/pause2.svg");
           }
    
        function pre(){
            currentSong--;
            if(currentSong < 0){
                currentSong = 26;
            }
            playSong();
            $("#play img").attr("src","./icons/pause2.svg");  
        }