import { useState } from 'react';
import { fetchCatFacts, fetchCatImg } from '../services';

export const useCard = () => {
    const [isLoading, setLoading] = useState(false);
    const [fact, setFact] = useState("");
    const [image, setImage] = useState("");

    const updateCardInfo = async () => {
        setLoading(true);
        try {
            const fetchedFact = await fetchCatFacts();
            const fetchedImage = await fetchCatImg();
            setFact(fetchedFact);
            setImage(fetchedImage);
        } catch (error) {
            console.error('Failed to fetch fact information:', error);
        } finally {
            setLoading(false);
        }
    };

    return { isLoading, fact, image, updateCardInfo };
}
