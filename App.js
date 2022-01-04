import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const getPopularMovies = async () => {
  const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=fd0d74b41c6e543a02a7cd61d733fb09')
  return res.data.results
  // console.log(JSON.stringify(res.data.results.map(r => r.title)))
}
const App = () => {
  const [movie, setMovie] = useState('')
  getPopularMovies().then((movies) => {
    setMovie(movies[0])
  })
  return (
    <View>
      <Text>Nom du film : { movie.original_title }</Text>
      <Text>Langue : { movie.original_language }</Text>
      <Text>Date de sortie : { movie.release_date }</Text>
    </View>
  )
}
export default App
