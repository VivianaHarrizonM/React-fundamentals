import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = '7ph0gf4FBOdFXh2IFuqeqdCiKDd01PqW';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

// myRequest.then( (response) => {
//   response.json().then( (data) => {
//     console.log(data);
//   });
// })
// .catch( err => {
//   console.log(err);
// })


const createImageOnInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
  imgElement.src = url;
  document.body.append(imgElement);
}

myRequest
.then( (response) => response.json())
.then(({ data }: GiphyRandomResponse) => {
  const imageUrl = data.images.original.url;
  createImageOnInsideDOM(imageUrl);

})
.catch( err => {
  console.log(err);
});
