/*eslint-env browser*/


var boredQuotes = [
            '"Boredom always precedes a period of great creativity." — Robert M. Pirsig',
            '"The truth is that everyone is bored, and devotes himself to cultivating habits." — Albert Camus',
            '"Boredom is the conviction that you can’t change…the shriek of unused capacities." — Saul Bellow',
            '"Boredom is the feeling that everything is a waste of time; serenity, that nothing is." — Thomas Stephen Szasz',
            '“The monotony and solitude of a quiet life stimulates the creative mind.” — Albert Einstein',
            '"Act as if what you do makes a difference.It does." — William James',
            '"Sometimes you will never know the value of a moment, until it becomes a memory." — Dr. Seuss',
            '“Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.” — Earl Nightingale',
            '“Instead of wondering when your next vacation is, maybe you should set up a life you don’t need to escape from.” — Seth Godin',
            '“Whoever loves much, performs much, and can accomplish much, and what is done in love is done well.” — Vincent Van Gogh',
            '"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." — Maya Angelou',
			'“Don’t let yesterday take up too much of today.” — Will Rogers',
			'“Creativity is intelligence having fun.” — Albert Einstein',
			'“Do what you Can with all you have, wherever you are.” — Theodore Roosevelt', 
			'“You don’t have to be great to start, but you have to start to be great.” — Zig Ziglar', 
			'“Our lives begin to end the day we become silent about things that matter.” — Martin Luther King Jr.', 
			'“Optimism is the one quality more associated with success and happiness than any other.” — Brian Tracy',
			'“If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.” — Oprah Winfrey',
			'“You can’t use up creativity. The more you use, the more you have.” — Maya Angelou',
			'“I alone cannot change the world, but I can cast a stone across the water to create many ripples.” — Mother Teresa'
            ]

function boredQuote() {
    var randomNumber = Math.floor(Math.random()*(boredQuotes.length));
    document.getElementById('quoteDisplay').innerHTML = boredQuotes[randomNumber];
}



var angryQuotes = [
            '“To remove your anger, you need to remove your comfort.” — P.S. Jagadeesh Kumar',
            '"Speak when you are angry and you’ll make the best speech you’ll ever regret." — Ambrose Brierce',
            '"Anger is momentary madness, so control your passion or it will control you." — Horace',
            '"There are two things a person should never be angry at, what they can help, and what they cannot." — Plato',
            '"You will not be punished for your anger; you will be punished by your anger." — Buddha',
            '"The more anger towards the past you carry in your heart, the less capable you are of loving in the present." — Barbara De Angelis',
            '"If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away." — John Steinbeck',
            '"Hate, it has caused a lot of problems in the world, but has not solved one yet." — Maya Angelou',
            '"For every minute you are angry you lose sixty seconds of happiness." — Ralph Waldo Emerson',
            '"Why can’t we control our anger? Because we love perfection. Make a little room for imperfection in our lives." — Sri Sri Ravi Shankar','“One’s anger is one’s greatest enemy and one’s calmness is one’s protection.” — Sathya Sai Baba','“Everyone asks how to deal with anger when it arises. No one asks how to prevent anger from arising.” — James Pierce',
			'“Anger comes so fast we don’t even notice it. Cultivating detachment, presence and silence every day will help you react less.” — Maxime Lagacé',
			'“Be angry, it’s okay. To be angry, that is very human. And to learn how to smile at your anger and make peace with your anger is very nice.” — Thich Nhat Hanh',
			'“How much more grievous are the consequences of anger than the causes of it.” — Marcus Aurelius',
			'“When angry, count ten before you speak; if very angry, a hundred.” — Thomas Jefferson',
			'“You can get angry, you can get even, or you can get ahead.” — Jeffrey Fry',
			'“A moment of patience in a moment of anger saves a thousand moments of Regret.” — Ali Ibn Abu Talib',
			'“Anger is a valid emotion. It’s only bad when it takes control and makes you do things you don’t want to do.” — Ellen Hopkins'
            ]

function angryQuote() {
    var randomNumber = Math.floor(Math.random()*(angryQuotes.length));
    document.getElementById('quoteDisplay').innerHTML = angryQuotes[randomNumber];
}




var sadQuotes = [
            '“There are moments when I wish I could roll back the clock and take all the sadness away, but I have the feeling that if I did, the joy would be gone as well.” — Nicholas Sparks',
            '“Experiencing sadness and anger can make you feel more creative, and by being creative you can get beyond your pain or negativity.” — Yoko Ono',
            '“The word ‘happy’ would lose its meaning if it were not balanced by sadness.” — Carl Jung',
            '"We must abandon completely the notion of blaming the past for any kind of situation we’re in." — Alan Watts',
            '“Anticipate good things will happen, keep your mind positive, never lose hope, and it will amaze you.” — C Pulsifer',
            '“Each morning we are born again. What we do today is what matters most.” — Buddha',
            '“Pause your life if you need to, care for yourself lovingly, do not ignore your rest, slow down so you can take a deep breath.” — YUNG PUEBLO',
            '“Forget past mistakes. Forget failures. Forget about everything except what you are going to do now — and do it.” — William Durant',
            '“Most of your unhappiness in life comes from the fact that you are listening to yourself instead of talking to yourself.” ― John Piper',
            '“One of the most healing things you can do is recognize where in your life you are your own poison.” — Steve Maraboli','“Tears come from the heart and not from the brain.” — Leonardo da Vinci',
			'“Your sadness is a gift. Don’t reject it. Don’t rush it. Live it fully and use it as fuel to change and grow.” — Maxime Lagacé',
			'“You cannot protect yourself from sadness without protecting yourself from happiness.” — Jonathan Safran Foer',
			'“You can not keep the birds of sadness from flying over your head, but you can keep them from nesting in your hair.” — Sharon Creech',
			'"If you want to be happy, set a goal that commands your thoughts, liberates your energy, and inspires your hopes." — Andrew Carnegie',
			'"Look at everything as though you were seeing it either for the first or last time. Then your time on earth will be filled with glory." — Betty Smith',
			'“We tend to forget that happiness doesn’t come as a result of getting something we don’t have, but rather of recognizing and appreciating what we do have.” — Frederick Keonig',
			'“Three grand essentials to happiness in this life are something to do, something to love, and something to hope for.” — Joseph Addison',
			'“Ups and downs. Victories and defeats. Sadness and happiness. That’s the best kind of life.” — Maxime Lagacé',
			'“Happiness is the default state. It’s what’s there when you remove the sense that something is missing in life.” — Naval Ravikant'
            ]

function sadQuote() {
	
    var randomNumber = Math.floor(Math.random()*(sadQuotes.length));
    document.getElementById('quoteDisplay').innerHTML = sadQuotes[randomNumber];
}




var stressedQuotes = [
            '“You must learn to let go. Release the stress. You were never in control anyway.” — Steve Maraboli',
            '“The greatest weapon against stress is our ability to choose one thought over another.” — William James',
            '“If you don’t like something change it; if you can’t change it, change the way you think about it.” — Mary Engelbreit',
            '“Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.” — Wayne W. Dye',
            '"No amount of anxiety can change the future. No amount of regret can change the past." — Karen Salmansohn',
            '"I promise you nothing is as chaotic as it seems. Nothing is worth your health. Nothing is worth poisoning yourself into stress, anxiety, and fear." — Steve Maraboli',
            '"Nothing is permanent in this wicked world — not even our troubles." — Charlie Chaplin',
            '“It is a good idea always to do something relaxing prior to making an important decision in your life.” — Paulo Coelho',
            '"The time to relax is when you don’t have time for it." — Sydney J. Harris',
            '“Sometimes the most productive thing you can do is relax.” — Mark Black',
            '“You can do anything—but not everything.” — David Allen',
			'“Our anxiety does not come from thinking about the future, but from wanting to control it.” — Kahlil Gibran',
			'“Do not anticipate trouble or worry about what may never happen. Keep in the sunlight.” — Benjamin Franklin',
			'“Even too much sunshine can be devastating, while only with rain can growth occur. Accept both as part of the growing process in the garden of life.” — Donald S. Neviaser',
			'“If the problem can be solved why worry? If the problem cannot be solved worrying will do you no good.” — Shantideva',
			'“Within you, there is a stillness and a sanctuary to which you can retreat at any time and be yourself.” — Hermann Hesse',
			'“Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.” — Oprah Winfrey',
			'“You don’t always have to have something to do. Don’t rush. Conserve some of your resources for yourself.” — Iyanla Vanzant',
			'“When you feel overwhelmed, start eliminating all the non-essential things from your life. Clarity brings calm.” — Darius Foroux',
			'“Don’t rush. It’s wiser to go slowly in the right direction than fast in the wrong one.” — Maxime Lagacé',
			'“Slow down and everything you are chasing will come around and catch you.” — John De Paola'
            
            ]

function stressedQuote() {
    var randomNumber = Math.floor(Math.random()*(stressedQuotes.length));
    document.getElementById('quoteDisplay').innerHTML = stressedQuotes[randomNumber];
}


 