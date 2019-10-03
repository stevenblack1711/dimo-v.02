import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {  AirbnbRating } from 'react-native-elements';

export default class index extends Component {
    // ratingCompleted(rating) {
    //     console.log("Rating is: " + rating)
    //   }
      
      
    //   <Rating
    //     showRating
    //     onFinishRating={this.ratingCompleted}
    //     style={{ paddingVertical: 10 }}
    //   />
      
    //   <Rating
    //     type='heart'
    //     ratingCount={3}
    //     imageSize={60}
    //     showRating
    //     onFinishRating={this.ratingCompleted}
    //   />
      
      
    render() {
        return (
            <View>
      
                <AirbnbRating
                    count={10}
                    reviews={["Tệ", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable"]}
                    defaultRating={10}
                    size={20}
                />

                
            </View>
        )
    }
}



