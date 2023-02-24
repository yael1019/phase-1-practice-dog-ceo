console.log('%c HI', 'color: firebrick')

const dogDiv = document.querySelector('#dog-image-container');
const ul = document.getElementById('dog-breeds');
const select = document.getElementById('breed-dropdown');

// async function dogCeo() {
//     const response = await fetch('https://dog.ceo/api/breeds/image/random/4');
//     const dogsObj = await response.json();
//     // this external API sent an object, so we do .message to reach the array we want
//     // console.log(dogsObj.message);
//     const dogs = dogsObj.message;
//       dogs.forEach(dog => {
//         const img = document.createElement('img');
//         dogDiv.append(img);
//         img.src = dog;
//       });
    
//     const response2 = await fetch('https://dog.ceo/api/breeds/list/all');
//     const dogBreedObject = await response2.json();
//     const dogBreed = dogBreedObject.message;
//     // console.log(dogBreed)
//     for (breed in dogBreed) {
//         // console.log(breed[0])
//         const li = document.createElement('li');
//         ul.append(li);
//         li.textContent = breed;
//         li.addEventListener('click', () => {
//             li.style.color = 'blue';
//         })
//         select.addEventListener('change', (event) => {
//             li.remove();
//             if(breed[0] === event.target.value) {
//                 ul.append(li);
//                 li.textContent = breed;
//             }
//         })
//     }
// }

// dogCeo();



// ! Using the .then method

fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(dogsObj => {
        // the thing returned from json is an object, we need to access the array inside
        const dogsArr = dogsObj.message;
        // should print an array
        // console.log(dogsArr);
        dogsArr.forEach(dog => {
            const img = document.createElement('img');
            dogDiv.append(img);
            img.src = dog;
        })
    })

fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json()) 
    .then(breedsObj => {
        const breeds = breedsObj.message;
        // console.log(breeds);
        for(let eachBreed in breeds) {
            const li = document.createElement('li');
            ul.append(li);
            li.textContent = eachBreed;
            li.addEventListener('click', () => {
                li.style.color = 'blue';
            })
            select.addEventListener('change', (event) => {
                li.remove();
               if(eachBreed[0] === event.target.value) {
                // console.log(eachBreed)
                ul.append(li);
                li.textContent = eachBreed;
               }
            })
        } 
    })