import { StyleSheet } from "react-native"


const AppStyles = StyleSheet.create({
    container:{
        backgroundColor: "#F6F1EE",
        flex:1
    },
    renderFeedsView:{ width: "100%", flexDirection: 'row', alignItems: 'center' },
    feedItemView:{ width: "85%", marginLeft: '5%', marginTop: "5%" },
    showFeedView:{ height: "10%", backgroundColor: "white", width: "100%", borderTopLeftRadius: 25, borderTopRightRadius: 25, flexDirection: 'row' },
    giveRewardView:{ height: "25%", width: "100%", alignItems: 'center', flexDirection: "row" },
})

export default AppStyles;
