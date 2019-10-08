// import React from 'react'
// import axios from 'axios'

// const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
// const QUERYSTRING = '?token=token123'

// const useMoreEventsFetcher = dispatch => {
//   React.useEffect(() => {

//     (async () => {
//       console.log("Let's fetch data here.")
//       const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
//       const data = response.data
//       dispatch({ type: 'GET_EVENTS', data })
//     })()
//   })
// }

// export default useMoreEventsFetcher     