
export const url = 'http://localhost:4400/';

export const getData = async () => {
  const res = await fetch(url);
  const exerciseList = await res.json();
  return exerciseList;
}

export const getId = async (id) => {
  const res = await fetch(`${url}id/${id}`);
  const exerciseId = await res.json();
  return exerciseId;
}

export const options = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchVideoData = async (url, options) => {
  const result = await fetch(url, options);
  const data = await result.json();

  return data;
};

