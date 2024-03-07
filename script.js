document.addEventListener('DOMContentLoaded', function() {
  const quoteText = document.getElementById('text');
  const quoteAuthor = document.getElementById('author');
  const newQuoteBtn = document.getElementById('new-quote');

  // Fetch a new quote
  function fetchQuote() {
    fetch('https://quotes15.p.rapidapi.com/quotes/random/', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a0977205dcmsh9c1a1eb7351e534p1e6c62jsnfc90c4bbc5f4',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
      }
    })
    .then(response => response.json())
    .then(data => {
      quoteText.textContent = data.content;
      quoteAuthor.textContent = '- ' + data.originator.name;
    })
    .catch(error => console.error('Error fetching quote:', error));
  }

  // Event listener for new quote button
  newQuoteBtn.addEventListener('click', fetchQuote);

  // Fetch a quote on page load
  fetchQuote();
});
