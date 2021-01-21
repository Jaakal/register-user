import { useState } from 'react'
import Link from 'next/link'

import Alert from '../../components/Alert'

import styles from './styles.module.scss'

const Home = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const [alertData, setAlertData] = useState({
    type: null,
    message: null,
  })

  const { firstName, lastName, email, password } = formData

  const onChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = async event => {
    event.preventDefault()
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    const { success, message } = await response.json()

    setAlertData({
      type: success === null ? null : success ? 'ok' : 'danger',
      message
    })
  }

  return (
    <div className={styles.container}>
      <Alert data={alertData} />
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" onChange={onChange} value={firstName}/>
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" onChange={onChange} value={lastName}/>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={onChange} value={email}/>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={onChange} value={password}/>
        </div>

        <input type="submit" value="Register"/>
      </form>

      <Link href="/">
        <a>See All Users</a>
      </Link>
    </div>
  )
}

export default Home