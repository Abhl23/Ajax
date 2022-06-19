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
    let date=$('#date').val();
    if(date=='')
        alert('Date cannot be left empty!');
    console.log(date);
    $.ajax({
        url : `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`,
        method : 'GET',
        success : displayImages,
        data : {
            earth_date : date,
            api_key : 'iHqMKxzgc70eH0uh47z4wVJN0KnaH7Fsa48IIggZ'
        }
    });
});