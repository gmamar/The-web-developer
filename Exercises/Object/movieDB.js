var movies = [
    {
        name: 'In Bruges',
        rating: 5,
        watched: true
    },
    {
        name: 'Frozen',
        rating: 4.5,
        watched: true
    },
    {
        name: 'Mad Max Fury Road',
        rating: 5,
        watched: false
    },
    {
        name: 'Les Miserables',
        rating: 3.5,
        watched: true
    },
];

movies.forEach(function (item){
    console.log( 
        `You have ${item.watched ? "watched" : "Not seen"} "${item.name}" - ${item.rating} Stars`  
    );
})