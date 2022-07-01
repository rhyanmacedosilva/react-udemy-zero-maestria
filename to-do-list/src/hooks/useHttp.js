import { useEffect, useState } from 'react'

export const useHttp = ({ url }) => {
    const [data, setData] = useState(null)
    const [settings, setSettings] = useState(null)

    const manageRequestSettings = ({ method, body }) => {
        const settings = {
            headers: { "Content-Type": "application/json" },
            method: method
        }
        if (method === 'POST') {
            settings.body = JSON.stringify(body)
        }
        setSettings(settings)
    }

    useEffect(() => {
        const fetchData = () => {
            fetch(url, settings)
                .then((res) => (res.json()))
                .then((data) => {
                    if (!settings || settings.method === 'GET') {
                        setData(data)
                    } else {
                        // any request that wasn't 
                        // a get, should refresh 
                        // the data when finished
                        manageRequestSettings({
                            method: 'GET',
                            body: null
                        })
                    }
                })
        }
        fetchData()
    }, [url, settings])

    return { data, manageRequestSettings }
}