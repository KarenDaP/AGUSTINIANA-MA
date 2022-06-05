const url = 'https://rickandmortyapi.com/api/character'

fetch(url)
.then(response => response.json() )
.then(data => {

  let image = document.createElement('img')
  image.src  = `${data.results[0].image}`
  document.querySelector('.section_article_figure').appendChild(image)
  console.log(data)
})
.catch(err => console.log(err))
