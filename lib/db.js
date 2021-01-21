export const getAllUsers = async () => {
  const message = 'Sorry, we are having problems. Try again a little bit later.'
  
  try {    
    const response = await fetch('https://www.webixu-server.com/api/users')
    const { users, error } = await response.json()
    
    if (error) {
      console.log('\x1b[31m%s\x1b[0m', `getAllUsers - ${error}`)
      return { users, message }
    }
  
    return { users, message: false }
  } catch (error) {
    console.log('\x1b[33m%s\x1b[0m', `getAllUsers - ${error.message}`)
    return { users: [], message }
  }
}

export const registerUser = async (formData) => {
  try {
    const response = await fetch('https://www.webixu-server.com/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
  
    const { success, message, error } = await response.json()

    if (error)
      console.log('\x1b[31m%s\x1b[0m', `registerUser - ${error}`)
    
    return { success, message }
  } catch (error) {
    console.log('\x1b[33m%s\x1b[0m', `registerUser - ${error.message}`)
    return { success: false, message: 'Sorry, we are having problems. Try again a little bit later.' }
  }
}