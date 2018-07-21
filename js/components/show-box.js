export default class ShowBox {
    constructor(element) {
        const box = document.querySelector('.box')

        element.addEventListener('click', () => {
            this.showBox(box)
        })
    }

    showBox(box) {
        box.classList.toggle('d-none')
    }
}