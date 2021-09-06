const process = require('process')
const axios = require('axios')

const handler = async function (event) {
  // apply our function to the queryStringParameters and assign it to a variable
  const {ipAddress, domain} = event.queryStringParameters
  
  // Get env var values defined in your Netlify site UI or from .env file for localhost
  const { API_URL, API_TOKEN } = process.env
  const URL = `${API_URL}${API_TOKEN}&ipAddress=${ipAddress}&domain=${domain}`

  try {
    const { data } = await axios.get(URL)
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status, statusText, headers, data }),
    }
  }
}

module.exports = { handler }
