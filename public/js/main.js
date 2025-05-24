// to handel clicks

const deleteBtn = document.querySelectorAll('.del')
const booktrackerItem = document.querySelectorAll('span.not')
const booktrackerComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteBooktracker)
})

Array.from(booktrackerItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(booktrackerComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteBooktracker(){
    const booktrackerId = this.parentNode.dataset.id
    try{
        const response = await fetch('booktrackers/deleteBooktracker', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'booktrackerIdFromJSFile': booktrackerId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const booktrackerId = this.parentNode.dataset.id
    try{
        const response = await fetch('booktrackers/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'booktrackerIdFromJSFile': booktrackerId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const booktrackerId = this.parentNode.dataset.id
    try{
        const response = await fetch('booktrackers/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'booktrackerIdFromJSFile': booktrackerId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// STAR SYSTEM:

document.querySelector('#rating').addEventListener('click', async function (e) {
    let action = 'add';
    for (const span of this.children) {
        span.classList[action]('active');
        if (span === e.target) action = 'remove';
    }
    //here is where you update the rating in your DB
    let newRating = Number(e.target.value);
    //add your logic to grab the relevant id here
    //here is where you make the PUT to the server (same as in markComplete, but with a different endpoint
    const booktrackerId = this.parentNode.dataset.score
    try{
      const response = await fetch('booktrackers/updateRating', {
          method: 'put',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
            'booktrackerIdFromJSFile': booktrackerId
            //send your rating to be updated
          })
      })
      const data = await response.json()
      console.log(data)
    } catch(err){
      console.log(err)
    }
});