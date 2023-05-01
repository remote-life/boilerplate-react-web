import axios from 'axios';
import { Environment } from '../Environment';

export default axios.create({
	baseURL: Environment.URL_API,
});
