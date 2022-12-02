import { useState } from 'react';

export const useIsLoading = () => {
    const [isLoading, setIsLoading] = useState(false)
    
    return [ isLoading, setIsLoading ]
}