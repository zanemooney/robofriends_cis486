import React from 'react';

 document.getElementById(`${id}-up`).addEventListener('click', _ => {
  fetch('/robo-up/'+`${id}`, {
    method: 'PUT',
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

document.getElementById(`${id}-down`).addEventListener('click', _ => {
  fetch('/robo-up/'+`${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ $inc: { votes: -1}})
  })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      window.location.reload(true)
    })
})








