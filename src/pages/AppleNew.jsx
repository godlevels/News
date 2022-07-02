import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const AppleNew = () => {

    const [articles, setArticles] = useState([])


    let params = useParams

    const getArticles = async (name) => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-06-30&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}&articles=${name}`)
        const articles = await res.json()
        setArticles(articles.articles)
    }

    useEffect(() => {
        getArticles(params.type) 
    },[params.type])

    return (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {articles.map(article => {

              return(
                <div key={article.url}>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-10 mx-auto"
                   key={article.id}>
                    <img className="w-full" src={article.urlToImage} alt={article.title} />
                    <div className="px-6 py-4">
                        <h2 className="font-bold text-lg mb-1">{article.title}</h2>
                        <p className="text-gray-700 text-base">{article.description}</p>
                        <h3 className="font-bold text-lg mb-6">{article.author  }</h3>
                        <a className="mb-2 bg-blue-600 py-2 px-3 rounded-md text-lg shadow-lg hover:bg-blue-900 hover:text-white hover:font-bold" href={article.url}>Read More</a>
                    </div>
                  </div>
                </div>
              )
          })}      
    </div>

    )
}


export default AppleNew
