import { registerUser } from '../../lib/db'

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      const data = await registerUser(req.body)
      res.statusCode = 200
      return res.json(data)
  }
}