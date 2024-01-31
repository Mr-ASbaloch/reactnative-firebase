import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ViewData = ({title, description}) => {
  return (
    <View>
      <Text> title {title}</Text>
      <Text> description{description}</Text>
    </View>
  )
}

export default ViewData

const styles = StyleSheet.create({})