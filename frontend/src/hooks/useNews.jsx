import { useEffect, useCallback, useState } from "react";
import NewsService from "../services/NewsService";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

export function useNews() {
    const navigate = useNavigate();
    const [news, setNews] = useState();
    useEffect(function () {
        NewsService.getNews()
        .then(({data}) => {
            setNews(data)
        })
    }, [setNews])

    return {
        news: news
    }
}