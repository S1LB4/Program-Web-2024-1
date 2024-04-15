export const fetchCatImg = async () => {
  try {
    const response = await fetch("https://cataas.com/cat");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.url;
  } catch (error) {
    console.error("Failed to fetch cat image:", error);
    return "No image available due to error.";  
  }
}
