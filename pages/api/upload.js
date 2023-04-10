import fs from 'fs'
import path from 'path'

export default async function handler(req, res) {
  const { file } = req.body
  const filePath = path.join(process.cwd(), 'public', 'img', file.name)
  
  try {
    await fs.promises.writeFile(filePath, file.data)
    res.status(200).json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false })
  }
}
