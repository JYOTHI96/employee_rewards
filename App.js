import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import AppStyles from './AppStyles';

const App = () => {

  const [isFeedSelected, setIsFeedSelected] = useState(true);
  const [showRewardList, setShowRewardList] = useState(true)
  const [feedList, setFeedList] = useState([]);
  const [rewardsList, setRewardList] = useState([]);
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
   // setRewardList(tempArray)
  }, [])

 const updateRewards = () => {
  let tempArrObj = {"to":to,"from":"John Doe","message":message,"time":""}
  setFeedList([tempArrObj, ...feedList])
  setShowRewardList(!showRewardList)
  setTo("")
  setAmout("")
  setMessage("") 

 }

 const validationOfFeed = () => {
    if(!to.trim()){
      alert("Please Enter the Employee Name")
    }
    else if(to.length <3){
      alert("Name should contain minimum 3 characters")
    }
    else if(!amount.trim()){
      alert("Please Enter the Amount")
    }
    else if(!message.trim()){
      alert("Please Enter the Message")
    }
    else if(message.length<5){
      alert("Message should contain atleast 5 characters ")
    }
    else{
      updateRewards()
    }
 }

  const render_feeds = (data) => {
    return (
      <View style={[AppStyles.renderFeedsView]}>
        <Image
          resizeMode='center'
          style={{ height: "100%", width: "15%" }}
          source={require("./assets/images/user.png")}
        />
        <View style={AppStyles.feedItemView}>
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
        <View style={AppStyles.showFeedView}>
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
        <View style={{marginBottom:60}}>
          <FlatList
            data={feedList}
            renderItem={(item) => render_feeds(item)}
            keyExtractor={(item, index) => index.toString()}
          />
          </View> : <View />
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
          keyboardType={'number-pad'}
        />
        <Text style={{ color: '#9A846E', marginTop:'10%' }}>Message</Text>
        <TextInput
        value={message}
          style={{
            top:5,
            width:"95%",
            borderWidth:2,
            borderColor:"#9A846E", 
            color:"white",
          }}
          multiline={true}
          onChangeText={(text)=>setMessage(text)}
        />

      <TouchableOpacity
            onPress={() =>  validationOfFeed()}
            style={{
              width: "75%",
              justifyContent: "center",
              alignItems: 'center',
              backgroundColor: "white",
              borderRadius:20,
              height:"10%",
              alignSelf:'center',
              marginTop:20
            }}>
            <Text style={{
              color:"black"
            }}>Give</Text>
          </TouchableOpacity>


        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={AppStyles.container}>
      <View style={AppStyles.giveRewardView}>
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
          height: 40,
          width: 60,
          borderRadius: 25,
          backgroundColor: "black",
          position: 'absolute',
          top: "93%",
          left: "80%",
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Image
          style={{ height: '50%', width: '50%', tintColor: showRewardList ? "white" : '"black' }}
          source={showRewardList ? require("./assets/images/plus.png") : require("./assets/images/x.png")}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
