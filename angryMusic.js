/*eslint-env browser*/

	

		var songs = ["./music/moodAngry/No.1 A Minor Waltz - Esther Abrami.mp3","./music/moodAngry/Maryandra's Waltz - Jesse Gallagher.mp3","./music/moodAngry/Dolphin-esque - Godmode.mp3","./music/moodAngry/No.10 _A New Beginning - Esther Abrami.mp3","./music/moodAngry/White River - Aakash Gandhi.mp3","./music/moodAngry/Heavenly - Aakash Gandhi.mp3","./music/moodAngry/Dreamland - Aakash Gandhi.mp3","./music/moodAngry/No.9_Esther_s Waltz - Esther Abrami 1.mp3","./music/moodAngry/Unrequited - Asher Fulero.mp3","./music/moodAngry/Underwater Exploration - Godmode.mp3","./music/moodAngry/Pastorale - Joel Cummins.mp3","./music/moodAngry/No.7 Alone With My Thoughts - Esther Abrami.mp3","./music/moodAngry/Mongrel Dance - Dan Bodan.mp3","./music/moodAngry/T'as où les vaches_ - Dan Bodan.mp3","./music/moodAngry/The Two Seasons - Dan Bodan.mp3","./music/moodAngry/Butterflies In Love - Sir Cubworth.mp3","./music/moodAngry/Kiss the Sky - Aakash Gandhi.mp3","./music/moodAngry/Lifting Dreams - Aakash Gandhi.mp3","./music/moodAngry/Bucolic Acrylic - Dan Bodan.mp3","./music/moodAngry/No.5 The Day I Met Her - Esther Abrami.mp3","./music/moodAngry/Simple Sonata - Sir Cubworth.mp3","./music/moodAngry/Night Snow - Asher Fulero.mp3","./music/moodAngry/Shattered Paths - Aakash Gandhi.mp3","./music/moodAngry/Eternal Garden - Dan Henig.mp3","./music/moodAngry/Somnia III - Reed Mathis.mp3","./music/moodAngry/Gamela - E's Jammy Jams.mp3","./music/moodAngry/Pure Potentiality - Benjamin Martins.mp3","./music/moodAngry/Spenta Mainyu - Jesse Gallagher.mp3","./music/moodAngry/Just Stay - Aakash Gandhi.mp3","./music/moodAngry/The Three Elements - I Think I Can Help You.mp3"];

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

//		song.addEventListener('timeupdate', (event) => {
//		  console.log('The currentTime attribute has been updated. Again.');
//		  var position = song.currentTime / song.duration;
//            if(song.currentTime == song.duration){
//				next();
//			}	
//		});
		
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