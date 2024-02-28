import { useEffect, useState } from "react";
import { Text } from 'react-native'


export function ExoUseEffect() {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div>
        {isLoading ? <Text>Loading...</Text> : <Text>Content loaded !</Text>}
      </div>
    );
  }