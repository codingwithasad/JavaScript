const narrator = document.getElementById('narrator');
const hadees = document.getElementById('hadees');
const book = document.getElementById('h1');
const button = document.querySelector('.btn');

async function randomHadith() {
  try {
    button.innerText = 'Loading';
    const response = await fetch('https://random-hadith-generator.vercel.app/bukhari/');
    const result = await response.json();
    console.log(result);
    hadees.innerText = await result.data.hadith_english;
    narrator.innerText = await result.data.header;
    book.innerText = await result.data.refno;
    button.innerText = 'Generate';
  } catch (error) {
    console.error('Error fetching or parsing data:', error);
    // You might want to handle errors, like displaying a message to the user
    button.innerText = 'Error. Try again';
  }
}

button.addEventListener('click', randomHadith);
