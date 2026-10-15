export const getApiError = (error) => {
  if (!error.response) {
    return "Network error, check Connection"
  }
  return(
    error.response.data?.message || error.message || 'Request failed'
  )
}