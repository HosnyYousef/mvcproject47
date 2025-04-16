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

document.querySelector('#rating').addEventListener('click', function (e) {
    let action = 'add';
    for (const span of this.children) {
        span.classList[action]('active');
        if (span === e.target) action = 'remove';
    }
});