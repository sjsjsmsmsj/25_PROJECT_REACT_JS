import { useState, useEffect } from 'react'
import './scroll.css'

export default function ScrollIndicator({ url }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const json = await response.json();
            if (json && json.products && json.products.length > 0) {
                setData(json.products);
            }
            setLoading(false)
        } catch (e) {
            console.log(e);
            setError(e);
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchData(url);
    }, [url])

    const handleScrollPercentage = () => {
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollPercentage((howMuchScrolled / height) * 100);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);
        return () => {
            window.removeEventListener('scroll', () => { });
        }
    }, [])
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error: {error}</p>
    }


    console.log(data, loading)

    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className='scroll-progress-tracking-container'>
                    <div className="current-progress-bar" style={{ width: `${scrollPercentage}%` }}></div>

                </div>
            </div>

            <div className='data-container'>
                {
                    data.length > 0 ?
                        data.map(dataItem =>
                            <p key={dataItem.id}>{dataItem.title}</p>
                        ) : (
                            <p>No Data</p>
                        )
                }
            </div>
        </div>
    )
}