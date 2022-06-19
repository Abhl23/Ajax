var page=1;
var sol='';

var next=$('#next');
var previous=$('#previous');

function displayImages(data){
    console.log(data);
    // disabling the next button if the photos are less than 25
    if(data.photos.length<25)
        next.attr('disabled', true);
    // enabling the next button if the photos are 25
    else
        next.attr('disabled', false);
    for(let photo of data.photos){
        $('<img>', {
            src : photo.img_src,
            height : '22rem',
            width : '22rem',
        }).css('margin', '2rem').appendTo('#images-container');
    }
}

function sendRequest(){
    // resetting the page to 1 and previous button to disabled when the sol changes
    if(sol!=$('#sol').val()){
        page=1;
        previous.attr('disabled', true);
    }

    $('img').remove();

    sol=$('#sol').val();
    // let page=$('#page').val();
    if(sol=='')
        alert('sol cannot be left empty!');
    console.log(sol, page);
    $.ajax({
        url : `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`,
        method : 'GET',
        success : displayImages,
        data : {
            sol : sol,
            page : page.toString(),
            api_key : 'iHqMKxzgc70eH0uh47z4wVJN0KnaH7Fsa48IIggZ'
        }
    }).fail(function(){
        console.log('error');
    });
}

next.click(function(){
    ++page;
    previous.attr('disabled', false);
    sendRequest();
});

previous.click(function(){
    --page;
    if(page==1)
        previous.attr('disabled', true);
    sendRequest();
});

$('#get-images-button').click(sendRequest);