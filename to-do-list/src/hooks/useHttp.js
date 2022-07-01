import { useEffect, useState } from 'react'

const url = 'http://localhost:3000'

export const useHttp = (route) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = () => {
            fetch(url + route)
                .then((res) => (res.json()))
                .then((data) => (setData(data)))
        }
        fetchData()
    }, [route])

    return { data }
}