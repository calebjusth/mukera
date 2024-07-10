// 
// 
// first Section APi

const fetchImages = async () => {
    const response = await fetch('http://prophetmesfinabulo.com/api/front_images/');
    const data = await response.json();
    const container = document.getElementById('images-container');
    
    
    data.forEach((image) => {
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      const list = document.createElement('li')
      
      figure.classList.add('img-holder');
      img.classList.add('img-cover');
      list.classList.add('slider-item')

      img.src = `http://prophetmesfinabulo.com/media/${image.image}`;

      figure.appendChild(img);
      list.appendChild(figure)
      container.appendChild(list);
    });
  };

  fetchImages()

// payment api section
const fetchChurchImages = async () => {
  const response = await fetch('https://prophetmesfinabulo.com/api/church_images_json/');
  const data = await response.json();
  const container = document.getElementById('gallery');
  
  
  data.forEach((image) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    
    div.classList.add('image-container');
    img.classList.add('image');

    img.src = `https://prophetmesfinabulo.com/media/${image.image}`;

    div.appendChild(img);
    container.appendChild(div);
    
  });
};

fetchChurchImages()

