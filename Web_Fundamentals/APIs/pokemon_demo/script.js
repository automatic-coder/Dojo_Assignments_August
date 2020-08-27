$(document).ready(function(){
    var html_str = "";
    for(var i=1; i<=150;i++){
        html_str += `<img id="${i}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">`
    }
    $('.pokemon').append(html_str)
    
    $('img').click(function(){
        console.log("Great your click worked!")

         var targetId = $(this).attr('id');
         console.log(targetId)

         var url = `https://pokeapi.co/api/v2/pokemon/${targetId}`
         console.log(url);

         $.get(url, function(res){
            console.log(res)
            console.log(res['name'])
            console.log(res['sprites']['front_default'])
            
            for(var i=0; i< res['types'].length; i++){
                console.log(res['types'][i]['type']['name'])
            }

            console.log(res['height'])
            console.log(res['weight'])

         }, 'json')

    })

})