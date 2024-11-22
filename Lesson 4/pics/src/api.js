import axios from 'axios';

const searchImage = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization:'Client-ID {Use your client id here from unsplash}'
        },
        params:{
            query: term
        },
    });

    return response.data.results;
};

export default searchImage;