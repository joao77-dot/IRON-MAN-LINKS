console.log('“I am Iron Man.”')

function changeMode() {

  favicon = document.querySelector("link[rel~='icon']")
  site = document
  body = document.body
  pageTitle = document.getElementById('title')
  profileImage = document.getElementById('profile')
  ironLinks = document.getElementById('iron-links')
  tonyLinks = document.getElementById('tony-links')

  // change iron to tony
  if (document.body.id == 'iron-mode') {
    body.id = 'tony-mode'
    favicon.href = './img/tie-icon.png';
    site.title = 'Tony Links'
    profileImage.src = 'stark.jpg'
    pageTitle.innerHTML = 'Tony Links'
    tonyLinks.style.display = 'flex'
    ironLinks.style.display = 'none'

    // change tony to iron
  } else if (document.body.id == 'tony-mode') {
    body.id = 'iron-mode'
    favicon.href = 'iron_man_portrait_by_cierinblue_detp0nl-414w-2x.jpg';
    site.title = 'Iron Man Links'
    profileImage.src = 'iron_man_portrait_by_cierinblue_detp0nl-414w-2x.jpg'
    pageTitle.innerHTML = 'Iron Man Links'
    ironLinks.style.display = 'flex'
    tonyLinks.style.display = 'none'
  }

}
