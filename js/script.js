const colors = ["red","pink","aqua","yellow","chartreuse","green","royalblue","green","orange"]

const btn = document.querySelector('.btn')

const color = document.querySelector('span')

btn.addEventListener('click', function () {
    const randomColor = () => {
        return Math.floor(Math.random() * colors.length) 
    }
    document.body.style.background = colors[randomColor()]

    color.innerHTML = document.body.style.background


})