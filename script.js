/* Add your script here */
var word = ["education", "technology", "mathematics", "science", "engineering", "arithmetic"]

var guessWord = ''

$(document).ready(function(){
    $('#play').click(function(){
        var index = $('#select').val()
        if(index ==""){
            alert('empty input field')
        }else{
            $('#rightSide').show()
            guessWord = word[index];
            console.log(guessWord)
            if($('#guessOutput').html()!=""){
                $('#guessOutput').empty()
            }
            for(var i=0;i<guessWord.length;i++){
                var letter = $('<h5 class="letter" id="'+i+'">'+guessWord[i]+'</h5>')
                $('#guessOutput').append(letter)
            }
        }
        
    })
})
