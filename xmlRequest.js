// https://69b432f7e224ec066bde4ec7.mockapi.io/api/v1/contact

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://69b432f7e224ec066bde4ec7.mockapi.io/api/v1/contact')

xhr.setRequestHeader('Content-Type', 'application/json')
xhr.setRequestHeader('Access-Control-Allow-Origin', '*')

xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
        console.log(xhr.responseText)
    } else {
        console.error('Error al hacer la solicitud', xhr.statusText)
    }
}

xhr.send()


