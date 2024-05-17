import { useState } from 'react';
import { getGifs } from '../services/fetchGifs';

export const useGif = () => {
  const [data, setData] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [loading, setLoading] = useState(false);

  const handleOnChange = async (value) => {
    const search = value.target.value.trim();
    setSearchWord(search);
    setLoading(true);
    try {
      const datos = await getGifs(searchWord);
      console.log(datos.data)
      setData(datos.data);
    } catch (error) {
      console.error('Error fetching gifs:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleOnChange, data, searchWord, loading,
  };
};
