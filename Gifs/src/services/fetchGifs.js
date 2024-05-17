export const getGifs = async(search) => {
    try {
        const rep = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=fF00xvpdVAui0oDZFiVKWHjywydilcdN&q=${search}&limit=20&lang=es`)
        const data = await rep.json();
        return data
    } catch (error) {
        console.error('Some error have happened')
        throw error;
    }
}
