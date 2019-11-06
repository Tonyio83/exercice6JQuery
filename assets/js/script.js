// $(function(){
//   $('.color').on('mouseover', function(){//crée une fonction avec la souris sur la couleur
//     $(this).each(function(){//crée une fonction sur toutes les couleurs
//       var myColor = $(this).attr('id');//récupère la valeur sur l'id dans une variable
//       $('#text').css('color', myColor);//change la couleur en fonction de la couleur selectionné
//     });
//   });
//   $('.color').on('mouseout', function(){//crée une fonction avec la souris en dehors de la couleur
//     $('#text').css('color', 'inherit');//remet la couleur de base
//   });
// });
$(function(){
  $('#green, #red, #blue').on('mouseover', function(){//appel de la fonction avec le focus sur les div couleurs
    var color = $(this).attr('id');//attribut les couleurs sur les div dans une variable
    $('#text').css('color', color);//affiche la couleur sur le texte en fonction du bouton cliqué
  })
  $('div').on('mouseout', function(){//appel de la fonction quand les champs div perdent le focus
    $('#text').css('color', 'inherit');//remet la couleur noir sur le texte
  })
})
