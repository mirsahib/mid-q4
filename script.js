/* Add your script here */
var word = ["education", "technology", "mathematics", "science", "engineering", "arithmetic"]

var guessWord = ''

$(document).ready(function(){
    $('#play').click(function(){
        guessWord = word[Number($('#select').val())]
        console.log(guessWord)
        if($('#guessOutput').html()!=""){
            $('#guessOutput').empty()
        }
        for(var i=0;i<guessWord.length;i++){
            var letter = $('<h5 id="'+i+'">'+guessWord[i]+'</h5>')
            $('#guessOutput').append(letter)
        }
        $('#leftside').show()
    })


})