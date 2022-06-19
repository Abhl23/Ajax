function displayImages(data){
    console.log(data);
    for(let photo of data.photos){
        $('<img>', {
            src : photo.img_src,
            height : '22rem',
            width : '22rem',
        }).css('margin', '2rem').appendTo('#images-container');
    }
}

$('#get-images-button').click(function(){
    $('img').remove();
    let sol=$('#sol').val();
    let page=$('#page').val();
    if(sol=='' || page=='')
        alert('Fields cannot be left empty!');
    console.log(sol, page);
    $.ajax({
        url : `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`,
        method : 'GET',
        success : displayImages,
        data : {
            sol : sol,
            page : page,
            api_key : 'iHqMKxzgc70eH0uh47z4wVJN0KnaH7Fsa48IIggZ'
        }
    }).fail(function(){
        console.log('error');
    });
});