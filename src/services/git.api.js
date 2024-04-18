export default async function GetGifs(categorie) {

    const api_key = 'JnAbatf18OFPmCI8fuVft29M9YYtbO7Y'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categorie}&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();
    return data.map(imagen => ({
        id: imagen.id,
        title: imagen.title,
        url: imagen.images.downsized_medium.url
    }));
}