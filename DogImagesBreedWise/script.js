var breed='';
var dogImages;
var i=0;

// for filling the dropdown list when the page loads
$(document).ready(function(){
    $.get('https://dog.ceo/api/breeds/list/all', function(data){
        for(let breed in data.message){
            let option=`<option value="${breed}">${breed}</option>`;
            $('#dog-breed').append(option);
        }
    });
});

// get a random image of a dog by breed
$('#get-image-button').click(function(){
    if($('#dog-breed').val()==breed)
        return;
    breed=$('#dog-breed').val();
    $.get(`https://dog.ceo/api/breed/${breed}/images`, function(data){
        dogImages=data.message;
    })
    console.log(breed);
    $.get(`https://dog.ceo/api/breed/${breed}/images/random`, function(data){
        $('#dog-image').attr('src', data.message);
    });
});

// get the next image of a dog belonging to a particular breed
$('#next-image-button').click(function(){
    if(i==dogImages.length)
        i=0;
    console.log(dogImages[i]);
    $('#dog-image').attr('src', dogImages[i]);
    i++;
});