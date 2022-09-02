let popularMeme = document.getElementById("el-like")

let unPopularMeme = document.getElementById("el-dislike")

let peopleSubribe = document.getElementById("gains")

let commentSection = document.getElementById("el-Form")
 
//let count = 0

    let p = document.createElement("p")
    commentSection.addEventListener("submit", (e) => {
        e.preventDefault()
        p.textContent = e.target.comment.value
        
    })

    document.querySelector("form").appendChild(p)

function getMeme() {
         fetch(`https://api.imgflip.com/get_memes`)
        .then(response => response.json())
        .then(data => {
        fetchMeme(data.data.memes)
    
        })
        
}

getMeme()

function fetchMeme(data) {
 let enterBtn = document.getElementById('enter-btn')
 enterBtn.addEventListener('click', () => {
    console.log(data[
        Math.floor(Math.random()*10)].url)

    let randomMeme = document.createElement('div')
            randomMeme.innerHTML = `
            <h3>${data[
                Math.floor(Math.random()*10)].name}</h3>
        <img id="meme-img" src="${data[
Math.floor(Math.random()*10)].url}">
        `
        document.querySelector("#enter-btn").append(randomMeme)



//     data.forEach(result => {
//         //console.log(result)
//        
//     });
 })
}

// document.addEventListener(function() {
//     fetchBooks();
//   });
  

    


function likeMeme() {
    let count = 0
    document.querySelector("#el-like").addEventListener('click', () => {
        count =  count + 1
        popularMeme.textContent = "Like: " + count
    })
   
}
  likeMeme()


  function dislikeMeme() {
    let elcount = 0
    document.querySelector("#el-dislike").addEventListener('click', () => {
        elcount =  elcount + 1
        unPopularMeme.textContent = "unLike: " + elcount
    })
    // count +=  1
    // unPopularMeme.textContent = "UnLiked: " + count
    
}
dislikeMeme()


function gainSubs() {
    let discount = 0
    document.querySelector("#gains").addEventListener('click', () => {
        discount =  discount + 1
        peopleSubribe.textContent = "Subscribe: " + discount
    })
    // count +=  1
    // peopleSubribe.textContent = "Subscribe: " + count
}
gainSubs()

