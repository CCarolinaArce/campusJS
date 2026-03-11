class ComponentePersonalizado  extends HTMLElement {
    constructor() {
        super()
        // console.log("I'm alive!")
        const shadow = this.attachShadow({mode: 'open'})
        shadow.innerHTML = '<strong>Hola Campers...!</strong><br><span class="rojo"><i>Code is my life style</i></span>'

        // this.innerHTML = '<strong>HOLA CAMPERS...!<style>.rojo {color: red}</style></strong><br><span class="rojo"><i>Code is my life style</i></span>'

    }

    connectedCallback() {
        console.log('Componente agregado')
    }


    disconnectedCallback() {
        console.log('Componenete eliminado')
    }


}

customElements.define('campus-tech', ComponentePersonalizado)

const webComponent = document.querySelector('campus-tech')
webComponent.remove()

document.getElementById('btn').addEventListener('click', () => {
    document.querySelector('campus-tech').remove()
})

gmail
