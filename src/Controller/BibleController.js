import axios from 'axios'
import config from './../config'

class BibleController {
	async getChapter(req, res) {		
		return await axios.get(config.bible.bibleUri + '/verses/nvi/sl/23').then(({ data }) => {
			return res.json(data)
		}).catch(({ response }) => res.json({message: 'Nao foi possível consultar', detail: response.data.message }))		
	}
}

export default new BibleController