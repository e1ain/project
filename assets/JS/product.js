var array = '';
$(".my-rating-6").starRating({
    totalStars: 5,
    emptyColor: 'lightgray',
    hoverColor: 'salmon',
    activeColor: 'cornflowerblue',
    initialRating: 4,
    strokeWidth: 0,
    useGradient: false,
    minRating: 1,
    callback: function (currentRating, $el) {
        alert('rated ' + currentRating);
        console.log('DOM element ', $el);
        $('#test').attr("value", currentRating);
        array = currentRating;
    }
});