import axios from 'axios';

export async function askRobomatic(question) {
  const encodedParams = new URLSearchParams();
  encodedParams.set('in', question);
  encodedParams.set('op', 'in');
  encodedParams.set('cbot', '1');
  encodedParams.set('SessionID', 'RapidAPI1');
  encodedParams.set('cbid', '1');
  encodedParams.set('key', 'RHMN5hnQ4wTYZBGCF3dfxzypt68rVP');
  encodedParams.set('ChatSource', 'RapidAPI');
  encodedParams.set('duration', '1');

  const options = {
    method: 'POST',
    url: 'https://robomatic-ai.p.rapidapi.com/api',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'e12e0bc10cmshda995883147f031p1ccce2jsn19acf09ab25e',
      'X-RapidAPI-Host': 'robomatic-ai.p.rapidapi.com',
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
