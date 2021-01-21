import Link from 'next/link'

import { getAllUsers } from '../lib/db'

import Alert from '../components/Alert'

import styles from './styles.module.scss'

// This function executes on server
export const getStaticProps = async context => {  
  const { users, message } = await getAllUsers()

  return {
    // revalidate: 10,
    props: {
      users,
      message
    }
  }
}

const Home = props => {
  const { users, message } = props

  return (
    <div className={styles.container}>
      { message && <Alert data={{ type: 'danger', message }} /> }
      
      <div className={styles.linesWrapper}>
        { users.map((user, index) => <div className={styles.line} key={index}>
          <div className={styles.name}>{`${user.firstName} ${user.lastName}`}</div>
          <div className={styles.email}>{user.email}</div>
        </div>) }
      </div>
    
      <Link href="/register">
        <a className={styles.registerLink}>Register User</a>
      </Link>
    </div>
  )
}

export default Home