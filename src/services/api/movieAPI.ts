import {IMovieAPI} from '@domain';
import {API_KEY, ACCOUNT_ID} from '@env';
import {APIResponse, axios} from '@services';


class MovieAPI {
  private popular: string;
  private favorites: string;
  private addOrRemoveURL: string;
  private apiKey: string = API_KEY;
  private language: string = 'pt-BR';
  private accountID: string = ACCOUNT_ID;

  constructor() {
    this.popular = `movie/popular?api_key=${this.apiKey}&language=${this.language}`;
    this.addOrRemoveURL = `account/${this.accountID}/favorite?api_key=${this.apiKey}`;
    this.favorites = `account/${this.accountID}/favorite/movies?language=${this.language}`;
  }
  async getMovies(page: number): APIResponse<IMovieAPI> {

    return await axios.get(this.popular, {
      params: {page},
    });
  }
  async getFavoriteMovies(page: number): APIResponse<IMovieAPI> {

    return await axios.get(this.favorites, {
      params: {page},
    });
  }

  async postFavorite(movieId: number, favorite: boolean) {
    const body = {
      favorite,
      media_type: 'movie',
      media_id: movieId,
    };

    return await axios.post(this.addOrRemoveURL, body);
  }
}

export default new MovieAPI();
