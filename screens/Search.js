import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { searchMovieTV } from '../services/services';
import Icon from "react-native-vector-icons/Ionicons";
import Card from "../components/Card";
import Error from "../components/Error";

const Search = ({ navigation }) => {
  const [text, onChangeText] = useState()
  const [searchResults, setSearchResults] = useState()
  const [error, setError] = useState(false)

  const onSubmit = (query) => {
    Promise.all([searchMovieTV(query, 'movie'), searchMovieTV(query, 'tv')])
    .then(([movies, tv]) => {
      const data = [...movies, ...tv]
      setSearchResults(data)
    })
    .catch(() => {
      setError(true)
    })
  }
  return (
    <React.Fragment>
      <SafeAreaView>
        <View style = { style.container}>
          <View style = { style.form }>
            <TextInput 
            style = { style.input }
            placeholder= { 'Recherche film ou série'}
            onChangeText = { onChangeText }
            value = { text }
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              onSubmit(text);
            }}
          >
            <Icon name = { 'search-outline'} size = {30}/>
          </TouchableOpacity>
        </View>
        <View style={style.searchItems}>
          {/* Searched items results */}
          {searchResults && searchResults.length > 0 && (
            <FlatList
              numColumns={2}
              data={searchResults}
              renderItem={({ item }) => (
                <Card navigation={navigation} item={item} />
              )}
              keyExtractor={(item) => item.id}
            />
          )}

          {/* When searched but no results */}
          {searchResults && searchResults.length == 0 && (
            <View style={style.noResults}>
              <Text>No results matching your criteria.</Text>
              <Text>Try different keywords.</Text>
            </View>
          )}

          {/* When nothing is searched */}
          {!searchResults && (
            <View style={style.empty}>
              <Text>Taper quelque chose à chercher</Text>
            </View>
          )}

          {/* Error */}
          {error && <Error />}
          </View>
      </SafeAreaView>
    </React.Fragment>
  )
}
const style = StyleSheet.create({
  input: {
    borderRadius: 15,
    borderWidth: 0.5,
    height: 50,
    padding: 8,
  },
  container: {
    padding: 10,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
  },
  form: {
    flexBasis: "auto",
    flexGrow: 1,
    paddingRight: 8,
  },

  searchItems: {
    padding: 5,
    margin: 'auto',
    justifyContent: 'center',
    alignItems: "center",
  },

  noResults: {
    paddingTop: 20,
  }
})

export default Search
