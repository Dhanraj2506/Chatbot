const callGeminiAPI = async (prompt) => {
  const key = "AIzaSyDLgvU0_1J3nWppDhklTZ38wl6fi9LbrMQ";
 try{ const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini
-2.0-flash:generateContent?key=${key}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    }
  );
  const data= await res.json();
  const responsttext = data?.candidates?.content?.parts?.[0]?.text
  console.log('data',data?.candidates)
  return responsttext||"No valid response";}catch (err){
    console.error('Gemin API Error:',err)
    return err;
  }
};

export default callGeminiAPI;