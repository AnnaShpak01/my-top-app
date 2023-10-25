import fs from 'fs'

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Прочитайте данные из файла
      const data = JSON.parse(fs.readFileSync('public/data/data.json', 'utf-8'))

      // Обновите данные в соответствии с POST-запросом
      data.pages = req.body.pages // Пример

      // Запишите обновленные данные обратно в файл
      fs.writeFileSync('public/data/data.json', JSON.stringify(data, null, 2))

      res.status(200).json({ message: 'Данные успешно обновлены' })
    } catch (error) {
      res.status(500).json({ error: 'Ошибка при обновлении данных' })
    }
  } else {
    res.status(405).json({ error: 'Метод не разрешен' })
  }
}
