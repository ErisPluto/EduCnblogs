import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ToastAndroid,
    AppRegistry,
    TouchableOpacity,
    FlatList,
    Dimensions,
    WebView,
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
const { height, width } = Dimensions.get('window');
// 传入博客Url作为参数
export default class BlogDetail extends Component{
    render(){
        return(
            <View style = {{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                flex:1}}
            >
                <WebView
                    source={{uri: this.props.navigation.state.params.Url}}
                    style={{height: height-40, width: width}}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                />
            </View>
        )
    }
}