const albums = [
     {
        name: 'Thick as a Brick',
        artist: 'Jethro Tull',
        released: '1972',
        img: 'https://m.media-amazon.com/images/I/81lnts0CkAL._SL1300_.jpg'
    },
     {
        name: 'Close to the Edge',
        artist: 'Yes',
        released: '1972',
        img: 'https://www.yesworld.com/wp-content/uploads/2015/10/CTTE-500.jpg'
    },
     {
        name: 'Foxtrot',
        artist: 'Genesis',
        released: '1972',
        img: 'https://upload.wikimedia.org/wikipedia/en/3/39/Foxtrot72.jpg'
    },
     {
        name: 'Lateralus',
        artist: 'Tool',
        released: '2001',
        img: 'https://i1.sndcdn.com/artworks-SMNUZfxzqueUG9ow-ik1Hug-t500x500.jpg'
    }
]

function appendAlbumToDom (object) {
    const li = document.createElement("li");
    const cover = document.createElement('img');
    const title = document.createElement('h4');
    const band = document.createElement('h5');
    const year = document.createElement('p');

    cover.src = object.img;
    cover.classList.add('cover');
    title.textContent = object.name;
    band.textContent = object.artist;
    year.textContent = object.released;

    li.append(cover, title, band, year);
    document.querySelector('.list').append(li);
}

albums.forEach(appendAlbumToDom);