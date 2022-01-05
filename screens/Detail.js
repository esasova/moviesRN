import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, Image, Dimensions, View } from 'react-native'
import { getMovieById } from '../services/services'
import StarRating from 'react-native-star-rating'
import dateFormat from 'dateformat'

const placeholder = require('../assets/placeholder.png')
const dimensions = Dimensions.get("screen");
const Detail = ({ route, navigation }) => {
  const [movieDetail, setMovieDetail] = useState()
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false)
  const movieId = route.params.movieDetail.id;
  console.log(movieId)
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
          <View style = { style.rating }>
          <StarRating
          disabled = { false }
          maxStars = { 5 }
          rating = { movieDetail.vote_average/2 }
          fullStarColor = '#FFD700'
          emptyStarColor='#FFD700'
          />
          </View>
          <Text style = { style.title}>{ movieDetail.title || movieDetail.name }</Text>
          { movieDetail.genres && (
            <View style = { style.genresContainer }>
              {movieDetail.genres.map((genre) => {
                return (
                  <Text style = { style.genre }> { genre.name }</Text>
                )
              })}
            </View>
          )}
          <Text style = { style.info }>Release Date: { dateFormat(movieDetail.release_date, 'dS, mmmm, yyyy') }</Text>
          <Text style = { style.info }>Runtime: { movieDetail.runtime } minutes</Text>
          <Text style = { style.info }>Box office: ${ Math.ceil(movieDetail.revenue/1000000) }M</Text>
          <Text style = { style.description }>{ movieDetail.overview }</Text>
        </ScrollView>
      )}
    </>
  )
}
const style = StyleSheet.create({
  image: {
    height: dimensions.height / 1.5,
    width: dimensions.width
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 5,
      textAlign: 'center'
    },
    description: {
      textAlign: 'center',
      fontSize: 15,
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 10,
      marginTop: 10
    },
    info: {
      fontWeight: 'bold',
      textAlign: 'center'
    },
    genresContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 10
    },
    genre: {
      marginRight: 10,
      fontWeight: 'bold'
    },
    rating: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10
    }
})
export default Detail

