import axios from 'axios';
import { id, key } from '../creditials';

const endpoint = {
  ipLocate: 'http://ip-api.com/json',
  fourSquare: 'https://api.foursquare.com/v2/venues'
}

export const getRestaurant = (winner, venue) => {
  return axios.get(`http://ip-api.com/json`).then(response => {

    const lat = response.data.lat
    const long = response.data.lon

    console.log("lat:", lat)
    console.log("long:", long)

    return axios.get(`${endpoint.fourSquare}/search?ll=${lat},${long}&query=${venue}&v=20170715&m=foursquare&client_id=${id}&client_secret=${key}`).then(response => {
    return response.data.response.venues[0]})
  })
}

export const getLocation = (winner, venue, lat, long) => {
  console.log(lat)
  console.log(long)

  return axios.get(`${endpoint.fourSquare}/search?ll=${lat},${long}&query=${venue}&v=20170715&m=foursquare&client_id=${id}&client_secret=${key}`).then(response => {

  return response.data.response.venues[0]})
}

export const getLatLong = () => {
  return axios.get(endpoint.ipLocate)
    .then(res => {
      return res.data
    })
}