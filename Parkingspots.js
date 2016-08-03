'use strict';


 var React = require('react');
 var ReactNative = require('react-native');
 var {Component} = React;
 var {
   StyleSheet,
   Text,
   View,
   ListView,
   Image,
   TouchableHighlight,
   ActivityIndicatorIOS
 } = ReactNative;

 var BookDetail = require('./Parkingspot');
 var REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';


var styles = StyleSheet.create({
    separator: {
       height: 1,
       backgroundColor: '#dddddd'
    },
    listView: {
       backgroundColor: '#F5FCFF'
    },
    loading: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    author: {
        color: '#656565'
    }
});

class Parkingspots extends Component {

  constructor(props) {
         super(props);
         this.state = {
             dataSource: new ListView.DataSource({
                 rowHasChanged: (row1, row2) => row1 !== row2
             })
         };
  }

  componentDidMount() {
       this.fetchData();
   }

   fetchData() {
       fetch(REQUEST_URL)
       .then((response) => response.json())
       .then((responseData) => {
           this.setState({
               dataSource: this.state.dataSource.cloneWithRows(responseData.items),
               isLoading: false
           });
       })
       .done();
   }

   showBookDetail(book) {
        this.props.navigator.push({
            title: book.volumeInfo.title,
            component: BookDetail,
            passProps: {book}
        });
    }

  renderBook(book) {
         return (
              <TouchableHighlight onPress={() => this.showBookDetail(book)}  underlayColor='#dddddd'>
                  <View>
                      <View style={styles.container}>
                          <Image
                              source={{url: book.volumeInfo.imageLinks.thumbnail}}
                              style={styles.thumbnail} />
                          <View style={styles.rightContainer}>
                              <Text style={styles.title}>{book.volumeInfo.title}</Text>
                              <Text style={styles.author}>{book.volumeInfo.authors}</Text>
                          </View>
                      </View>
                      <View style={styles.separator} />
                  </View>
              </TouchableHighlight>
         );
     }

renderLoadingView() {
  return (
     <View style={styles.loading}>
         <ActivityIndicatorIOS
             size='large'/>
         <Text>
             Loading parkingspots...
         </Text>
     </View>
  );
}

  render() {
        if (this.state.isLoading) {
          return this.renderLoadingView();
        }

      return (
          <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderBook.bind(this)}
              style={styles.listView}
              />
      );
  }
}

module.exports = Parkingspots;
