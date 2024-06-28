let profileImg = document.getElementById('profileImg');
let userName = document.getElementById('userName');
let userLocation = document.getElementById('location');

const apiUrl = 'https://randomuser.me/api/';

const xhr = new XMLHttpRequest();
xhr.open('GET', apiUrl, true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        let data = JSON.parse(this.responseText)
        let finalData = data.results[0];
        profileImg.src = `${finalData.picture.large}`;
        
        userName.innerText = finalData.name.title + ' ' + finalData.name.first + ' ' + finalData.name.last;
        
        userLocation.innerText = finalData.location.country + ' | ' + finalData.location.city;
        console.log(finalData.location.country + ' | ' + finalData.location.city);
    }
};

xhr.send();



// let title = document.getElementById('title');

// title.innerHTML = 'Bhumit Prajapati';