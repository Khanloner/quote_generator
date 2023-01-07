// variables 
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    character: 'Tsumugi Motohashi',
	quote: 'When I was little, I was teased because of my weight. I tried dieting, but diets always failed. Little by little I started feeling gloomy. I got to the point where I couldn\'t make friends, and I started hating myself more and more. I became completely unable to smile. I thought, no one in the world would ever like me the way I am now. But at the same time I also thought, if that\'s the way it is, then I should at least like myself.'
},
{
    character: 'Argentine',
	quote: 'You\'ll break. Humans are so fragile.'
},
{
    character: 'Argentine',
	quote: 'You\'ll break. Humans are so fragile.'
},
{
    character: 'Yuuko Ichihara',
	quote: 'Often times, people simply deny the existence of what they do not understand, and anyone who tells them otherwise is a liar.'
},
{
    character: 'Erwin Smith',
	quote: 'It’s us who gives meaning to our comrades lives.'
},
{
    character: 'Aizen Sousuke',
	quote: 'Yhwach. You desired a world... Where fear would no longer be a burden. But... In a world without fear of death... People will never attain the hope that is to be found from casting their fears aside and preserving through them. While it is true that people can continue to press forward through the simple act of living... That is no way comparable to marching forward in the face of death, while doing their damndest to keep it at bay. That is why... That is why people have given that very march a unique and special name. "COURAGE."'
},
{
    character: 'Fujitora',
	quote: 'If you were to be troubled over something as trivial as losing face, then it\'s better to not have it at all.'
},];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].character;
})