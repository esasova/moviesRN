import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { getPopularMovies, getUpcomingMovies } from '../services/services'


const Test = () => {
    useEffect(() => {
        getUpcomingMovies().then((movies) => {
            console.log(movies)
        })
      }, [])
    return (
        <View>
            <Text>Test</Text>
        </View>
    )
}

export default Test

