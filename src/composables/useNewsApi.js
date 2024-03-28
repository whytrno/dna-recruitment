import {ref} from 'vue';

const useNewsApi = () => {
    const articles = ref([]);
    const loading = ref(true);
    const error = ref(null);

    const fetchNews = async () => {
        try {
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=99843a3d101641888cb01daf1318ecb1');
            const data = await response.json();
            articles.value = data.articles;
            loading.value = false;
        } catch (err) {
            error.value = err.message;
            loading.value = false;
        }
    };

    return {articles, loading, error, fetchNews};
};

export default useNewsApi;
