$(function(){
  $('.color').on('mouseover', function(){//crée une fonction avec la souris sur la couleur
    $(this).each(function(){//crée une fonction sur toutes les couleurs
      var myColor = $(this).attr('id');//récupère la valeur sur l'id dans une variable
      $('#text').css('color', myColor);//change la couleur en fonction de la couleur selectionné
    });
  });
  $('.color').on('mouseout', function(){//crée une fonction avec la souris en dehors de la couleur
    $('#text').css('color', 'inherit');//remet la couleur de base
  });
});
