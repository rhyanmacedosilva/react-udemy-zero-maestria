import { useEffect, useState } from "react"

export const useRestAPI = (endpoint) => {
    const [response, setResponse] = useState()

    useEffect(() => {
        const settings = {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        }

        fetch(endpoint, settings)
            .then((res) => (res.json()))
            .then((response) => {
                setResponse(response)
            })
    }, [endpoint])

    return { response }
}