import './News.css'
import { useRestAPI } from '../hooks/useRestAPI'

const News = () => {
    const { response } = useRestAPI('https://fortnite-api.com/v2/news/br?language=pt-BR')

    return (
        <div className="page-content">
            <h1 className="page-title">What's New?</h1>
            <ul className="news-list">
                {response && response['data']['motds'].map(item => (
                    <li key={item['id']} className="news-list-item" >
                        <div className="news-list-item-content">
                            <div className="news-list-item-content-title">
                                {item['tabTitle']}
                            </div>
                            <div className="news-list-item-content-body">
                                {item['body'].substring(0, 44) + '...'}
                            </div>
                        </div>
                        <button className="news-list-item-like ">Like</button>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default News