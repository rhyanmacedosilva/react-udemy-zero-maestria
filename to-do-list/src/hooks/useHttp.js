import { useCallback, useEffect, useState } from 'react'

export const useHttp = ({ url }) => {
    const [data, setData] = useState(null)
    const [settings, setSettings] = useState(null)
    const [endpoint, setEndpoint] = useState(url)

    const manageRequestSettings = useCallback(
        ({ method, body, id }) => {
            const settings = {
                headers: { "Content-Type": "application/json" },
                method: method
            }
            if (method === 'GET') {
                setEndpoint(url)
            } else if (method === 'POST') {
                settings.body = JSON.stringify(body)
                setEndpoint(url)
            } else if (method === 'DELETE') {
                setEndpoint(url + '/' + id)
            }
            setSettings(settings)
        }, [url]
    )

    useEffect(() => {
        const fetchData = () => {
            fetch(endpoint, settings)
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
    }, [settings, endpoint, manageRequestSettings])

    return { data, manageRequestSettings }
}