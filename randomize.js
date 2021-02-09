/*eslint-env browser*/


var boredQuotes = [
            '"Boredom always precedes a period of great creativity." - Robert M. Pirsig',
            '"The truth is that everyone is bored, and devotes himself to cultivating habits." - Albert Camus',
            '"Boredom is the conviction that you can’t change…the shriek of unused capacities." - Saul Bellow',
            '"Boredom is the feeling that everything is a waste of time; serenity, that nothing is." - Thomas Stephen Szasz',
            '“The monotony and solitude of a quiet life stimulates the creative mind.” - Albert Einstein',
            '"Act as if what you do makes a difference.It does." - William James',
            '"Sometimes you will never know the value of a moment, until it becomes a memory." - Dr. Seuss',
            '“Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.” — Earl Nightingale',
            '“Instead of wondering when your next vacation is, maybe you should set up a life you don’t need to escape from.” — Seth Godin',
            '“Whoever loves much, performs much, and can accomplish much, and what is done in love is done well.” – Vincent Van Gogh',
            '"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." –Maya Angelou'
            
            ]

function boredQuote() {
    var randomNumber = Math.floor(Math.random()*(boredQuotes.length));
    document.getElementById('quoteDisplay').innerHTML = boredQuotes[randomNumber];
}



var angryQuotes = [
            '“To remove your anger, you need to remove your comfort.” - P.S. Jagadeesh Kumar',
            '"Speak when you are angry and you’ll make the best speech you’ll ever regret." – Ambrose Brierce',
            '"Anger is momentary madness, so control your passion or it will control you." – Horace',
            '"There are two things a person should never be angry at, what they can help, and what they cannot." – Plato',
            '"You will not be punished for your anger; you will be punished by your anger." – Buddha',
            '"The more anger towards the past you carry in your heart, the less capable you are of loving in the present." – Barbara De Angelis',
            '"If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away." - John Steinbeck',
            '"Hate, it has caused a lot of problems in the world, but has not solved one yet." - Maya Angelou',
            '"For every minute you are angry you lose sixty seconds of happiness." - Ralph Waldo Emerson',
            '"Why can’t we control our anger? Because we love perfection. Make a little room for imperfection in our lives." - Sri Sri Ravi Shankar'
            ]

function angryQuote() {
    var randomNumber = Math.floor(Math.random()*(angryQuotes.length));
    document.getElementById('quoteDisplay').innerHTML = angryQuotes[randomNumber];
}




var sadQuotes = [
            '“There are moments when I wish I could roll back the clock and take all the sadness away, but I have the feeling that if I did, the joy would be gone as well.” – Nicholas Sparks',
            '“Experiencing sadness and anger can make you feel more creative, and by being creative you can get beyond your pain or negativity.” – Yoko Ono',
            '“The word ‘happy’ would lose its meaning if it were not balanced by sadness.” – Carl Jung',
            '"We must abandon completely the notion of blaming the past for any kind of situation we’re in." Alan Watts',
            '“Anticipate good things will happen, keep your mind positive, never lose hope, and it will amaze you.” – C Pulsifer',
            '“Each morning we are born again. What we do today is what matters most.” — Buddha',
            '“Pause your life if you need to, care for yourself lovingly, do not ignore your rest, slow down so you can take a deep breath.” – YUNG PUEBLO',
            '“Forget past mistakes. Forget failures. Forget about everything except what you are going to do now — and do it.” — William Durant',
            '“Most of your unhappiness in life comes from the fact that you are listening to yourself instead of talking to yourself.”― John Piper',
            '“One of the most healing things you can do is recognize where in your life you are your own poison.” – Steve Maraboli'        
            ]

function sadQuote() {
    var randomNumber = Math.floor(Math.random()*(sadQuotes.length));
    document.getElementById('quoteDisplay').innerHTML = sadQuotes[randomNumber];
}




var stressedQuotes = [
            '“You must learn to let go. Release the stress. You were never in control anyway.” – Steve Maraboli',
            '“The greatest weapon against stress is our ability to choose one thought over another.” – William James',
            '“If you don’t like something change it; if you can’t change it, change the way you think about it.” – Mary Engelbreit',
            '“Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.” – Wayne W. Dye',
            '"No amount of anxiety can change the future. No amount of regret can change the past." – Karen Salmansohn',
            '"I promise you nothing is as chaotic as it seems. Nothing is worth your health. Nothing is worth poisoning yourself into stress, anxiety, and fear." — Steve Maraboli',
            '"Nothing is permanent in this wicked world — not even our troubles." — Charlie Chaplin',
            '“It is a good idea always to do something relaxing prior to making an important decision in your life.” - Paulo Coelho',
            '"The time to relax is when you don’t have time for it." – Sydney J. Harris',
            '“Sometimes the most productive thing you can do is relax.” – Mark Black',
            '“You can do anything—but not everything.” – David Allen'
            
            ]

function stressedQuote() {
    var randomNumber = Math.floor(Math.random()*(stressedQuotes.length));
    document.getElementById('quoteDisplay').innerHTML = stressedQuotes[randomNumber];
}





