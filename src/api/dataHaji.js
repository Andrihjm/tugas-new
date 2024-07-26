async function getDataHaji() {
  try {
    const response = await fetch(
      "https://mock-api-pribadi-malik.vercel.app/api/mosleme-travel/packages"
    );

    if (!response) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
}