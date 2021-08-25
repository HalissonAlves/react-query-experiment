import axios from 'axios';
import IDogsProps from '../../interfaces/IDogsProps';

export default async function getDogs(): Promise<IDogsProps> {
  const response = await axios.get(`https://dog.ceo/api/breeds/image/random`)
        .then(res => {
          return res.data;
        });
  return response;
}