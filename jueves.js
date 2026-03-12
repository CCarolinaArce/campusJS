class miComponente extends HTMLElement {
    constructor() {
        super()
        const sDOM = this.attachShadow({mode: 'open'})
        sDOM.innerHTML = '<strong>Hello Campers!</strong>'
        this.innerHTML = '<strong>Hola Campers...!</strong><br><span class="rojo"><i>Code is my life style</i></span>'
        this.hora = ""
        this.pais = ""
        this.suma = 0
    
    }

    static get observedAttributes() {
        return ['pais', 'hora', 'num1', 'num2']
    }

    connectedCallback() {
        this.innerHTML += '<i>This is awesome</i>'
    }

    disconnectedCallback() {
        console.log('Componente eliminado')
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name, oldValue, newValue)
        switch(name) {
            case 'pais':
                this.shadowRoot.innerHTML += `<p>Welcome to ${newValue}!</p>`
                // ?? 
                this.innerHTML += `<p>Bievenido a ${newValue}</p>`
                this.pais = newValue
                break
            case 'hora':
                this.innerHTML += `<p>La hora es: ${newValue},</p>`
                this.hora = newValue
                break
            case 'num1':
                this.innerHTML += `<p>La suma es: ${newValue}</p>`
                this.suma += Number(newValue)
                break
            case 'num2':
                this.innerHTML += `<p>La suma es: ${newValue}</p>`
                this.suma += Number(newValue)
                break
        
        }
    }
}

customElements.define('mi-componente', miComponente)

const btnEliminar = document.getElementById('btnEliminar')
btnEliminar.addEventListener('click', () => {
    const wc = document.querySelector('mi-componente')
    wc.remove()})