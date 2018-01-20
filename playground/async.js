const fetchAlbums = () => {
  fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(res => res.json())
    .then(json => console.log(json));
};

async function fetchAlbums1() {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
  const json = await res.json();
  console.log(json);
}

const fetchAlbums2 = async () => {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
  const json = await res.json();
  console.log(json);
};

fetchAlbums();
fetchAlbums1();
fetchAlbums2();

// I found this snippet to be amazing haha

const arrWhile = (arr, someCallback) => {
  while (arr.length) {
    someCallback(arr.pop());
  }
};
