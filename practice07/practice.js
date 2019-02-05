// //Append random user info on the DOM
// $.ajax({
//     url: "https://randomuser.me/api/?results=20",
//     type: 'GET',
//     success : function(data){
//         getData(data);
//     },
//     error: function(result){
//         console.log('error', result)
//     }
// });

// function getData(data){
//     let users = '';
//     for(let i = 0; i < data.results.length; i++){
//         let userInfo = data.results[i];
//         console.log('insdie of forloop')
//         let photo = `<img src= '${userInfo.picture.medium}'>`;
//         let name = `<h4>${userInfo.name.first} ${userInfo.name.last}</h4>`;
//         let email = `<p>${userInfo.email}</p>`;
//         let age = `<p>${userInfo.dob.age}</p>`;
//         let user = `<div>${photo} ${name} ${age} ${email}</div>`
//         users += user;
//     };
//     $('.container').innerHTML = users
//     $(users).appendTo('.container')
// }

// Append Weather API on the DOM
function initializeApp(){
    debugger;
    $('.lat-input').change(getInput);
    $('.long-input').change(getInput);
}
initializeApp();

function apiCall(lat, long){
    $.ajax({
        url: `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`,
        type: 'GET',
        success: function (data) {
            console.log('success', data);
            getInfo(data);
        },
        error: function (data) {
            console.log('error', data)
        }
    });
}

function getInput(){
    let value = $(`.${this.className}`).val();
    console.log('inside of get input', value);
    let lat ='';
    let long ='';
    if(this.className === 'lat-input'){
        lat += value;
        console.log('left', value);
    }else{
        long += value;
        console.log('right', value);
    }
    $('.btn').click(apiCall(lat, long))
    // if(lat && long){
    //     console.log('inside of api call')
    //     apiCall(lat, long);
    // }
}

function getInfo(data){
    for(let i = 0; i < data.weather.length; i++){
        console.log(data.weather[i].main);
        $('.container').append(data.weather[i].main);

    }
}
