const etapa2 = document.querySelector('.img-etapa2')
const etapa2_5 = document.querySelector('.img-etapa2_5')
const etapa3 = document.querySelector('.flores-etapa3')

document.getElementById('btn-etapa1').addEventListener('click', () => {
    etapa2.removeAttribute('id')
})


document.getElementById('btn-etapa2').addEventListener('click', () => {
    etapa2_5.removeAttribute('id')
})

document.getElementById('btn-etapa2_5').addEventListener('click', () => {
    etapa3.removeAttribute('id')
})