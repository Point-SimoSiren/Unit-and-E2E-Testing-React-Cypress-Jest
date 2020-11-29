import axios from 'axios'

const baseUrl = 'https://localhost:5001/api/kurssit'

const getAll = async () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

const create = newObj => {
    console.log(newObj)
    return axios.post(baseUrl, newObj)
}

const remove = id => axios.delete(`${baseUrl}/${id}`)

/* AXIOS PUT MENISI NÄIN, mutta lets keep this simple:
const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
  } */
export default {
    getAll,
    create,
    remove
    //update
}