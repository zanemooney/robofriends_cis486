// import React from 'react';


// const dbID = ["6229521266c82cfa444cda85", 
//             "622952ca66c82cfa444cda87", 
//             "6229533f66c82cfa444cda88", 
//             "6229537066c82cfa444cda8a",
//             "6229533f66c82cfa444cda88",
//             "622953e766c82cfa444cda8c",
//             "6229540966c82cfa444cda8e",
//             "6229542466c82cfa444cda8f",
//             "6229544266c82cfa444cda91",
//             "6229545666c82cfa444cda92"];





const upGraham  = document.getElementById('#1-up');
const upHowell  = document.getElementById('#2-up');
const upBauch  = document.getElementById('#3-up');
const upLebsack  = document.getElementById('#4-up');
const upDietrich  = document.getElementById('#5-up');
const upSchulist  = document.getElementById('#6-up');
const upWeissnat  = document.getElementById('#7-up');
const upRunolfsdottir  = document.getElementById('8-up');
const upReichert  = document.getElementById('#9-up');
const upDuBuque  = document.getElementById('#10-up');

const downGraham  = document.getElementById('#1-down');
const downHowell  = document.getElementById('#2-down');
const downBauch  = document.getElementById('#3-down');
const downLebsack  = document.getElementById('#4-down');
const downDietrich  = document.getElementById('#5-down');
const downSchulist  = document.getElementById('#6-down');
const downWeissnat  = document.getElementById('#7-down');
const downRunolfsdottir  = document.getElementById('#8-down');
const downReichert  = document.getElementById('#9-down');
const downDuBuque  = document.getElementById('#10-down');

//  document.getElementById(`${id}-up`).addEventListener('click', _ => {
//   fetch('/robo-up/${', {
//     method: 'put',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ $inc: { votes: 1}})
//   })
//     .then(res => {
//       if (res.ok) return res.json()
//     })
//     .then(response => {
//       window.location.reload(true)
//     })
// })



upGraham.addEventListener('click', _ => {
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

upHowell.addEventListener('click', _ => {
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

upBauch.addEventListener('click', _ => {
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

upLebsack.addEventListener('click', _ => {
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

upDietrich.addEventListener('click', _ => {
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

upSchulist.addEventListener('click', _ => {
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

upWeissnat.addEventListener('click', _ => {
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

upRunolfsdottir.addEventListener('click', _ => {
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

upReichert.addEventListener('click', _ => {
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

upDuBuque.addEventListener('click', _ => {
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

downGraham.addEventListener('click', _ => {
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

downHowell.addEventListener('click', _ => {
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

downBauch.addEventListener('click', _ => {
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

downLebsack.addEventListener('click', _ => {
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

downDietrich.addEventListener('click', _ => {
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

downSchulist.addEventListener('click', _ => {
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

downWeissnat.addEventListener('click', _ => {
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

downRunolfsdottir.addEventListener('click', _ => {
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

downReichert.addEventListener('click', _ => {
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

downDuBuque.addEventListener('click', _ => {
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