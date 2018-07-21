import Hello from './components/hello-world'
import ShowBox from './components/show-box'

const components = [
    {
        class: Hello,
        selector: '.hello'
    },
    {
        class: ShowBox,
        selector: '.js-show-box'
    }
]

components.forEach(component => {
    if (document.querySelector(component.selector) !== null) {
        document.querySelectorAll(component.selector).forEach(
            element => new component.class(element, component.options)
        )
    }
})