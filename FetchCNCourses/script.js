$('#fetch-courses-button').click(function(){
    $('#fetch-courses-container').remove();
    $.get('https://codingninjas.in/api/v3/courses', function(data){
        console.log(data);
        let courses=data.data.courses;
        for(let course of courses){
            let card=`<div class="card" style="width: 18rem; margin-top: 2rem;">
                        <img src="${course.preview_image_url}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${course.name}</h5>
                            <p class="card-text">${course.level}</p>
                        </div>
                    </div>`;
                    console.log(card);
            $('body').append(card);
        }
    })
});