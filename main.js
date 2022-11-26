import './style.css'

const api = {
  avatar: '/picture.jpg',
  name: 'Tiago Cabral',
  role: 'Desenvolvedor Front-end',
  links: [
    { title: 'Perfil no LinkedIn', url: 'https://www.linkedin.com/in/7iagocabral/', icon: 'ph-linkedin-logo-bold' },
    { title: 'Portifólio no GitHub', url: 'https://github.com/7iagoCabral', icon: 'ph-github-logo' },
    { title: 'Instagram', url: 'https://www.instagram.com/7iago.dev', icon: 'ph-instagram-logo' },
    { title: 'Twitter', url: 'https://twitter.com/7iagoCabral', icon: 'ph-twitter-logo' },
  ]
}

function renderLinks(links) {
  if(links.length < 1){
    return '<li class="ph-ghost-logo">Links not found</li>'
  }
  return links.map(item => {
    return `<a href=${item.url} target="_blank"><li class=${item.icon}>${item.title}</li></a>`
  }).join('')
}


document.querySelector('#app').innerHTML = `
  <div>
  <header>
    <div class="cover">
    </div>
    <a href="#" target="_blank">
      <img src="${api.avatar}" class="avatar" alt="Avatar usuário" />
    </a>
    <h1 class="name">${api.name}</h1>
    <p>${api.role}</p>
  </header>
    <div class="card">

    ${ api &&  renderLinks(api.links) }
      
      
    </div>
    <p class="read-the-docs">
      Criador por Tiago Cabral! 
    </p>
  </div>
`

