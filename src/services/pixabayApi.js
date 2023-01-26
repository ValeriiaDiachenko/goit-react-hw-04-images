import axios from "axios";
import { toast } from 'react-toastify';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '30747871-d91efdefadb63ca506ce75120';

const customAxios = axios.create({
    baseURL: BASE_URL,
    params: {
        key: API_KEY,
    },
});

export const searchParams = {
    q: '',
    page: 1,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 12,
};

export const getImages = async () => {
    try {
    const { data } = await customAxios.get('', { params: searchParams });
    return data;
    } catch (error) {
      toast.info(`Something went wrong ${error}`);
    };
};