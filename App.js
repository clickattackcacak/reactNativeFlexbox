import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flexDirection: 'column', flex: 1}}>

        <View style={nav}>
          <View style={nav__logo}>
            <Text style={[textWhite]}>Logo</Text>
          </View>
          <Text style={[nav__text, textWhite]}>Nav</Text>
          <View style={nav__icon}>
            <Image source={require('./menuIcon.png')} style={{alignSelf: 'center'}} />
          </View>
        </View>

        <View style={body}>
          <View style={aside}>
            <Text style={textWhite}>ASIDE</Text>
          </View>
          <View style={main}>
            <View style={main1}>
              <Text style={textWhite}>Main 1</Text>
            </View>
            <View style={main2}>
              <Text style={textWhite}>Main 2</Text>
            </View>
          </View>
        </View>

        <View style={footer}>
          <Text style={textWhite}>DATE</Text>
          <Text style={textWhite}>COPYRIGHT</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    flex: 1
  },
  nav__text: {
    textAlign: 'center',
    color: '#fff',
    flex: 2,
    alignSelf: 'center',
    fontSize: 18
  },
  nav__logo: {
    flex: 1,
    backgroundColor: '#ef5350',
    justifyContent: 'center'
  },
  nav__icon: {
    flex: 1,
    backgroundColor: '#ef5350',
    justifyContent: 'center'
  },
  textWhite: {
    color: '#fff',
    textAlign: 'center'
  },
  body: {
    flexDirection: 'row',
    height: '100%',
    flex: 6
  },
  aside: {
    backgroundColor: '#66BB6A',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    flex: 3,
  },
  main1: {
    backgroundColor: '#FDD835',
    flex: 1,
    justifyContent: 'center',
  }, 
  main2: {
    backgroundColor: '#8E24AA',
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: '#F4511E'
  }
});

const { nav, nav__logo, nav__text, nav__icon, textWhite, body, aside, main, main1, main2, footer } = styles;
