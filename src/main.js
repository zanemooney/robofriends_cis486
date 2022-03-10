const Graham  = document.querySelector('#vote-Graham')
const Howell  = document.querySelector('#vote-Howell')
const Bauch  = document.querySelector('#vote-Bauch')
const Lebsack  = document.querySelector('#vote-Lebsack')
const Dietrich  = document.querySelector('#vote-Dietrich')
const Schulist  = document.querySelector('#vote-Schulist')
const Weissnat  = document.querySelector('#vote-Weissnat')
const Runolfsdottir  = document.querySelector('#vote-Runolfsdottir')
const Reichert  = document.querySelector('#vote-Reichert')
const DuBuque  = document.querySelector('#vote-DuBuque')



Graham.addEventListener('click', _ => {
  fetch('/robo-up/6229521266c82cfa444cda85', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ $inc: { votes: 1}})
  })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      window.location.reload(true)
    })
})

Howell.addEventListener('click', _ => {
    fetch('/robo-up/622952ca66c82cfa444cda87', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ $inc: { votes: 1}})
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
})

Bauch.addEventListener('click', _ => {
    fetch('/robo-up/6229533f66c82cfa444cda88', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ $inc: { votes: 1}})
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
})

Lebsack.addEventListener('click', _ => {
    fetch('/robo-up/6229537066c82cfa444cda8a', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ $inc: { votes: 1}})
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
})

Dietrich.addEventListener('click', _ => {
    fetch('/robo-up/622953c366c82cfa444cda8b', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ $inc: { votes: 1}})
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
})

Schulist.addEventListener('click', _ => {
    fetch('/robo-up/622953e766c82cfa444cda8c', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ $inc: { votes: 1}})
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
})

Weissnat.addEventListener('click', _ => {
    fetch('/robo-up/6229540966c82cfa444cda8e', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ $inc: { votes: 1}})
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
})

Runolfsdottir.addEventListener('click', _ => {
    fetch('/robo-up/6229542466c82cfa444cda8f', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ $inc: { votes: 1}})
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
})

Reichert.addEventListener('click', _ => {
    fetch('/robo-up/6229544266c82cfa444cda91', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ $inc: { votes: 1}})
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
})

DuBuque.addEventListener('click', _ => {
    fetch('/robo-down/6229545666c82cfa444cda92', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ $inc: { votes: 1}})
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
})

Graham.addEventListener('click', _ => {
  fetch('/robo-down/6229521266c82cfa444cda85', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ $inc: { votes: 1}})
  })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      window.location.reload(true)
    })
})

Howell.addEventListener('click', _ => {
    fetch('/robo-down/622952ca66c82cfa444cda87', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ $inc: { votes: 1}})
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
})

Bauch.addEventListener('click', _ => {
    fetch('/robo-down/6229533f66c82cfa444cda88', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ $inc: { votes: 1}})
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
})

Lebsack.addEventListener('click', _ => {
    fetch('/robo-down/6229537066c82cfa444cda8a', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ $inc: { votes: 1}})
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
})

Dietrich.addEventListener('click', _ => {
    fetch('/robo-down/622953c366c82cfa444cda8b', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ $inc: { votes: 1}})
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
})

Schulist.addEventListener('click', _ => {
    fetch('/robo-down/622953e766c82cfa444cda8c', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ $inc: { votes: 1}})
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
})

Weissnat.addEventListener('click', _ => {
    fetch('/robo-down/6229540966c82cfa444cda8e', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ $inc: { votes: 1}})
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
})

Runolfsdottir.addEventListener('click', _ => {
    fetch('/robo-down/6229542466c82cfa444cda8f', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ $inc: { votes: 1}})
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
})

Reichert.addEventListener('click', _ => {
    fetch('/robo-down/6229544266c82cfa444cda91', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ $inc: { votes: 1}})
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
})

DuBuque.addEventListener('click', _ => {
    fetch('/robo-down/6229545666c82cfa444cda92', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ $inc: { votes: 1}})
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
})



// fetch("/robos")
// .then(function(response) {
//   if (!response.ok) {
//     throw new Error("HTTP error, status = " + response.status);
//   }
//   return response;
// })