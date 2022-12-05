import { useEffect, useState } from 'react';

export const useIsLoading = () => {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {     
    }, [])

    const handleLoading = (value) => {
        setIsLoading(value)
    }
    
    return { isLoading, handleLoading }
}