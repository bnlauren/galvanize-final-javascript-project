var animals = [{
        name: "lizard",
        photo: 'images/lizard.jpg',
        scientificName: "Lacertilia",
        class: "Reptile",
        diet: "Onmivore",
        lifeSpan: "1-30 years",
        funFact: "Fear Me!!!! RAWR!!!!!!!."
    },
    {
        name: "monkey",
        photo: 'images/monkey.jpg',
        scientificName: "Simianon Primate",
        class: "Mammal",
        diet: "Onmivore",
        lifeSpan: "1-30 years",
        funFact: "I wanna be a man man cub."
    },
    {
        name: "otter",
        photo: 'images/otter.jpg',
        scientificName: "Lutrine",
        class: "Mammal",
        diet: "Carnivore",
        lifeSpan: "15-25 years",
        funFact: "NOM NOM NOM"
    },
    {
        name: "dog",
        photo: 'images/dog.jpg',
        scientificName: "Canis Lupus",
        class: "Mammal",
        diet: "Carnivore",
        lifeSpan: "10-15 years",
        funFact: "Not truely man's best friend!"
    },
    {
        name: "frog",
        photo: 'images/frog.jpg',
        scientificName: "Reptile",
        class: "Amphitian",
        diet: "Omnivore",
        lifeSpan: "1-8 years",
        funFact: "My prince!",
    }
]

// var myBtn = document.getElementById('myButton');

// //add event listener
// myBtn.addEventListener('click', function(event) {
//     window.location.href = 'Students.html';
// });


function renderCollectionViewItem(animalName) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name == animalName) {
            $('#animalPicture').attr("src", animals[i].photo),
                $('#animalPicture').html(animals[i].name),
                $('#animalScientific').html(animals[i].scientificName),
                $('#animalDiet').html(animals[i].diet),
                $('#animalLifeSpan').html(animals[i].lifeSpan),
                $('#animalFunFact').html(animals[i].funFact)
        }
    }
}
renderCollectionViewItem()

function addButtons() {
    var $container = $('#buttons');

    for (var i = 0; i < animals.length; i++) {
        var animal = animals[i]
        var button = $('<a>')
        button.attr("class", "list-group-item")
        button.text(animals[i].name)
        button.click(function() {
            $('.list-group-item').removeClass("active");
            $(this).addClass("active");
            renderCollectionViewItem($(this).html())

        })
        $container.append(button)
    }
}
addButtons()









//text: animals[i].scientificName,
// text: animals[i].class:,
// text: animals[i].diet: ,
// text: animals[i].lifeSpan: ,
// text: animals[i].funFact: