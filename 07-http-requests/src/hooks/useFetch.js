import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const [id, setId] = useState('')

    const httpConfig = (data, method) => {
        if (method === 'POST') {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
        } else if (method === 'DELETE') {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setId(data)
        }
        setMethod(method)
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const response = await fetch(url)
                const json = await response.json()
                setData(json)
            } catch (error) {
                setError('An error has ocurred: (' + error.message + ')')
            }

            setTimeout(() => {
                setLoading(false)
            }, 1000)
        }
        fetchData()
    }, [url, callFetch])

    useEffect(() => {
        const httpRequest = async () => {
            let fetchOptions = [(method === 'POST' ? url : url + '/' + id), config]
            const response = await fetch(...fetchOptions)
            const json = await response.json()
            setCallFetch(json)
        }

        httpRequest()
    }, [config, method, url, id])

    return { data, httpConfig, loading, error }
}