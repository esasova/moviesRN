import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, Image } from 'react-native'
import { getMovieById } from '../services/services'
const placeholder = require('../assets/placeholder.png')
const Detail = ({ route, navigation }) => {
  const [movieDetail, setMovieDetail] = useState()
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false)
  const movieId = route.params.movieDetail.id;
  useEffect(() => {
    getMovieById(movieId).then((movieData) => {
     setMovieDetail(movieData)
     console.log(movieData)
     setLoaded(true)
    }).catch(() => {
      setError(true);
    })
  }, [movieId])
  return (
    <>
      { loaded && (
        <ScrollView>
          <Image
          resizeMode = 'cover'
          style = { style.image }
          source = { movieDetail.poster_path ? { uri: 'https://image.tmdb.org/t/p/w500' + movieDetail.poster_path } : placeholder }
          />
          <Text>{ movieDetail.title }</Text>
        </ScrollView>
      )}
    </>
  )
}
const style = StyleSheet.create({
  image: {
    height: 200,
    width: 125,
    borderRadius: 20
    }
})
export default Detail

