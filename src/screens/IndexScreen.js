import React, {useContext} from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';


const IndexScreen = () => {
  const {data, addBlogPost} = useContext(BlogContext);
  return (
    <View>
     <Text>List of blog</Text>
     <Button onPress={addBlogPost} title='add a new post'/>
     <FlatList
      data={data}
      keyExtroctor={ (blogPosts) => blogPosts.title }
      renderItem={ ({item}) => {
          return <Text>{item.title}</Text>;
      }}
     />
    </View>
    );
};


const styles = StyleSheet.create({});


export default IndexScreen;
