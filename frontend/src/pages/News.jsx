import React, {Suspense} from "react";
import { useNews } from "../hooks/useNews";

const NewsComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../components/news/NewsComponent")), 1500)
    })
})

const NewsPage = () => {
    const {news} = useNews()
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="https://usagif.com/wp-content/uploads/loading-4.gif"/></div>}>
            <NewsComponent news={news}/>
        </Suspense>
    )

}

export default NewsPage