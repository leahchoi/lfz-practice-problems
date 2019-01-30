$.ajax({
    url: "https://randomuser.me/api/?results=20",
    type: 'GET',
    success : function(data){
        console.log('success', data);
        getData(data);
    },
    error: function(result){
        console.log('error', result)
    }
});

function getData(data){
    console.log('inside get data',data);
    let users = '';
    for(let i = 0; i < data.results.length; i++){
        let userInfo = data.results[i];
        console.log('insdie of forloop')
        let photo = `<img src= '${userInfo.picture.medium}'>`;
        let name = `<h4>${userInfo.name.first} ${userInfo.name.last}</h4>`;
        let email = `<p>${userInfo.email}</p>`;
        let age = `<p>${userInfo.dob.age}</p>`;
        let user = `<div>${photo} ${name} ${age} ${email}</div>`
        users += user;
        console.log(user)
    };
    $('.container').innerHTML = users
    $(users).appendTo('.container')
}
