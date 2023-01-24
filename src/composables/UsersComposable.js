import axios from 'axios'

function createUser (data, errors) {
    errors.value = ''
    return axios.post('/usuario/salvar', data)
        .then((response) => response)
        .catch((error) => {
            errors.value = error.response.data.errors
        })
}

function getUser () {
    return axios.get('/usuario/listagem')
        .then((response) => response.data)
        .catch((error) => {
            console.log(error)
        })
}

function showUser (id) {
    return axios.get(`/usuario/mostrar/${id}`)
        .then((response) => response.data)
        .catch((error) => {
            console.log(error)
        })
}

function editUser (id, data, errors) {
    errors.value = ''
    return axios.put(`/usuario/update/${id}`, data)
        .then((response) => response.data)
        .catch((error) => {
            errors.value = error.response.data.errors
        })
}

function deleteUser (id) {
    return axios.delete(`/usuario/delete/${id}`)
        .then((response) => response.data)
        .catch((error) => {
            console.log(error)
        })
}

export default {
    getUser,
    createUser,
    showUser,
    editUser,
    deleteUser
}
