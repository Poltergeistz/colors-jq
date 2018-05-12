// good luck !

$(document).ready(function(){
    console.log("salut!");
    $('script').remove('[src="troll.js"]');

    $(':input').each(function(){ // change la couleur pour chaque element
        var color = $(this).attr('data-color') // recupère le data-color dans une variable
        $(this).css('background-color', color) // attribue une couleur depuis les éléments stockés dans la variable.
    })
    $(':input').click(function(){ // Change la couleur du background grâce au click du boutton correspondant.
        var color = $(this).attr('data-color'); // recupère la valeur du data-color dans une variable
    $('section').css('background-color', color) // applique la variable color en valeur du background-color
    })

    $(':checkbox').click(function(){ // sur un click de la checkbox
        if( $(this).is(':checked') == true ){ // si l'élément est coché alors
            $('section').css('color', 'white'); // le texte sera de couleur blanche
        } if ($(this).is(':checked') == false){ // si l'élement n'est pas coché alors
            $('section').css('color', 'black'); // le texte sera de couleur noire
        }
    })
    }) 