var breed='';
var allBreeds='';

// for filling the breed dropdown list when the page loads
$(document).ready(function(){
    $.get('https://dog.ceo/api/breeds/list/all', function(data){
        allBreeds=data.message;
        console.log(allBreeds);
        for(let breed in allBreeds){
            let option=`<option value="${breed}">${breed}</option>`;
            $('#dog-breed').append(option);
        }
    });
});


$('#get-image-button').click(function(){
    // remove all the images
    $('img').remove();
    // if breed changes remove the sub-breed dropdown
    if(breed!=$('#dog-breed').val())
        $('#dog-sub-breed').remove();

    breed=$('#dog-breed').val();
    console.log(allBreeds[breed]);

    let subBreed=$('#dog-sub-breed').val();
    console.log(subBreed);
    // if sub-breed dropdown value present display the sub-breed images
    if(subBreed){
        $.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images`, function(data){
            for(let url of data.message){
                $('<img>', {
                    src : url,
                    height : '20rem',
                    width : '20rem'
                }).css('margin', '2rem').appendTo('#dog-images-container');
            }
        });
        return;
    }
    // if sub-breed dropdown value not present
    else{
        // if sub-breed array of the dog present then display the sub-breed dropdown list
        if(allBreeds[breed].length>0)
        {
            let dropdown=`<select id="dog-sub-breed"></select>`;
            $('#dog-breed').after(dropdown);
            for(let subBreed of allBreeds[breed]){
                $('<option></option>', {
                    value : subBreed
                }).text(subBreed).appendTo('#dog-sub-breed');
            }
        }
        // if sub-breed array not present then display the breed images
        else{
            $.get(`https://dog.ceo/api/breed/${breed}/images`, function(data){
                for(let url of data.message){
                    $('<img>', {
                        src : url,
                        height : '20rem',
                        width : '20rem'
                    }).css('margin', '2rem').appendTo('#dog-images-container');
                }
            });
        }
    }
});

