export const fetchCatFacts = async () => {
  try {
    const response = await fetch("https://catfact.ninja/fact?max_length=200");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();
    return jsonData.fact;
  } catch (error) {
    console.error("Failed to fetch cat facts:", error);
    return "No fact available due to error.";
  }
}
