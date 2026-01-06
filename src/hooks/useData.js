import axios from "axios";
import { useEffect, useState } from "react"


const useData = () => {
    const [infos, setInfos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios('${import.meta.env.VITE_API_BASE_URL}/my-transaction')
            .then(data => {
                
                
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return { infos, loading, error, setInfos }
}

export default useData;