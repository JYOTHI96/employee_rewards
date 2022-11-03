import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AppStyles from './AppStyles';

const App = () => {

  const [isFeedSelected, setIsFeedSelected] = useState(true);
  const [showRewardList, setShowRewardList] = useState(true)
  const [feedList, setFeedList] = useState([]);
  const [to, setTo] = useState("");
  const [amount, setAmout] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    let tempArray = [{ "to": "David", "from": "John Doe", "message": "Big Thanks For your help!!", "time": '4hrs back' },
    { "to": "David", "from": "John Doe", "message": "Big Thanks For your help", "time": '4hrs back' },
    { "to": "David", "from": "John Doe", "message": "Big Thanks For your help", "time": '4hrs back' },
    { "to": "David", "from": "John Doe", "message": "Big Thanks For your help", "time": '4hrs back' },
    { "to": "David", "from": "John Doe", "message": "Big Thanks For your help", "time": '4hrs back' },
    { "to": "David", "from": "John Doe", "message": "Big Thanks For your help", "time": '4hrs back' },
    { "to": "David", "from": "John Doe", "message": "Big Thanks For your help", "time": '4hrs back' },
    { "to": "David", "from": "John Doe", "message": "Big Thanks For your help", "time": '4hrs back' },
    { "to": "David", "from": "John Doe", "message": "Big Thanks For your help", "time": '4hrs back' },
    { "to": "David", "from": "John Doe", "message": "Big Thanks For your help", "time": '4hrs back' },
    { "to": "David", "from": "John Doe", "message": "Big Thanks For your help", "time": '4hrs back' }]
    setFeedList(tempArray)
  }, [])

  const render_feeds = (data) => {
    return (
      <View style={{ width: "100%", flexDirection: 'row', alignItems: 'center' }}>
        <Image
          resizeMode='center'
          style={{ height: "100%", width: "15%" }}
          source={require("./assets/images/user.png")}
        />
        <View style={{ width: "85%", marginLeft: '5%', marginTop: "5%" }}>
          <Text style={{ color: "black", fontSize: 15, fontWeight: "600", width: "95%" }}>{data.item.message}</Text>
          <Text style={{ marginTop: "3%", width: "95%" }}>{data.item.to} rewared by {data.item.from}</Text>
          <Text>{data.item.time}</Text>
        </View>
      </View>
    )
  }

  const showFeed = () => {
    return (
      <View>
        <View style={{ height: "10%", backgroundColor: "white", width: "100%", borderTopLeftRadius: 25, borderTopRightRadius: 25, flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => setIsFeedSelected(true)}
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: 'center',
              backgroundColor: isFeedSelected ? "white" : "#E4E2DF",
              borderTopLeftRadius: 25
            }}>
            <Text style={{
              color: isFeedSelected ? "#B49C85" : "black"
            }}>Feed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsFeedSelected(false)}
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: 'center',
              backgroundColor: !isFeedSelected ? "white" : "#E4E2DF",
              borderTopRightRadius: 25
            }}>
            <Text style={{
              color: !isFeedSelected ? "#B49C85" : "black"
            }}>My Rewards</Text>
          </TouchableOpacity>
        </View>
        {(feedList.length != 0) ?
          <FlatList
            data={feedList}
            renderItem={(item) => render_feeds(item)}
            keyExtractor={(item, index) => index.toString()}
          /> : <View />
        }
      </View>
    )
  }

  const giveReward = () => {
    return (
      <View style={{ flex: 1}}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{
            height: "20%",
            color: "white",
            alignSelf: 'center',
            fontSize: 22,
            fontWeight: "600",
            marginTop: 20
          }}>Give Rewards</Text>
        </View>
        <View style={{ marginHorizontal:"8%"}}>
        <Text style={{ color: '#9A846E' }}>To</Text>
        <TextInput
          value={to}
          style={{
            top:5,
            width:"95%",
            height:"13%",
            borderWidth:2,
            borderColor:"#9A846E",
            color:'white'
          }}
          maxLength={20}
          onChangeText={(text)=>setTo(text)}
        />
        <Text style={{ color: '#9A846E', marginTop:'10%' }}>Amount</Text>
        <TextInput
        value={amount}
          style={{
            top:5,
            width:"95%",
            height:"13%",
            borderWidth:2,
            borderColor:"#9A846E",
            color:'white'
          }}
          maxLength={20}
          onChangeText={(text)=>setAmout(text)}
        />
        <Text style={{ color: '#9A846E', marginTop:'10%' }}>Message</Text>
        <TextInput
        value={message}
          style={{
            top:5,
            width:"95%",
            borderWidth:2,
            borderColor:"#9A846E", 
            color:"white"
          }}
          multiline={true}
          onChangeText={(text)=>setMessage(text)}
        />
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={AppStyles.container}>
      <View style={{ height: "25%", width: "100%", alignItems: 'center', flexDirection: "row" }}>
        <Image
          resizeMode='center'
          style={{ height: '35%', width: '25%' }}
          source={require("./assets/images/user.png")}
        />
        <View>
          <Text style={{ fontSize: 20, fontWeight: "600", color: "black" }}>Jane Doe</Text>
          <Text>Given <Text style={{ fontWeight: "600", color: "black" }}>$100</Text> / Received
            <Text style={{ fontWeight: "600", color: "black" }}> $250</Text></Text>
        </View>
      </View>
      <View style={{ backgroundColor: showRewardList ? 'white' : "black", borderTopLeftRadius: 25, borderTopRightRadius: 25, width: '100%', height: "75%" }}>
        {showRewardList ? showFeed() : giveReward()}
      </View>
      <TouchableOpacity
        onPress={() => setShowRewardList(!showRewardList)}
        style={{
          height: 70,
          width: 70,
          borderRadius: 35,
          backgroundColor: "black",
          position: 'absolute',
          top: "85%",
          left: "75%",
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Image
          style={{ height: '60%', width: '60%', tintColor: showRewardList ? "white" : '"black' }}
          source={showRewardList ? require("./assets/images/plus.png") : require("./assets/images/x.png")}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
