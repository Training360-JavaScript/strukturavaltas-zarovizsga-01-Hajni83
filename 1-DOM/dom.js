function manipulateDom() {
    const quotes = document.querySelectorAll('.quote');
    for (let quote of quotes){
        quote.style.borderColor = 'blue';
        quote.style.backgroundColor = 'lightblue';
        quote.style.fontStyle = 'italic';
    }

    
};

export { manipulateDom };