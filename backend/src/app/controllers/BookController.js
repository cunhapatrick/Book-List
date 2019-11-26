const Book = require('../models/Book')

class BookController {
  async store (req, res) {
    const book = await Book.create(req.body)
    return res.status(201).json(book)
  }

  async index (req, res) {
    const {
      page = 1,
      limit = 10,
      filter = null,
      initialYear = 1998,
      endYear = 2019
    } = req.query

    let search = {}

    const hasFilter = filter !== null && filter !== '';

    if (hasFilter && !isNaN(filter)) search = { isbn: filter }
    else if (hasFilter && isNaN(filter)) {
      search = {
        $or: [
          {
            title: {
              $regex: filter,
              $options: 'i'
            }
          },
          {
            author: {
              $regex: filter,
              $options: 'i'
            }
          }
        ],
        year: {
          $gte: initialYear,
          $lte: endYear
        }
      }
    }

    const books = await Book.paginate({ ...search }, {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10)
    })

    return res.status(200).json(books)
  }
}

module.exports = new BookController()
