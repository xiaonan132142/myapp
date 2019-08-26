import Taro ,{Component} from "@tarojs/taro"
import {View,Image,Text} from "@tarojs/components"
import './bottomModule.less'
import {getEvent} from '../../utils/common'
let events = getEvent()
export default class BottomModule extends Component{
  constructor(){
    super()
    this.state={
      totalNum:0,
      totalPrice:0
    }
  }
  componentDidMount() {
    events.on('computedTotal',()=>{
      let store=Taro.getStorageSync('foodKey')
      let num=0
      let price=0
      if (store){
        Object.keys(store).map((key)=>{
          num+=store[key].num
          price+=store[key].price*store[key].num
        })
      }
      this.setState({
        totalNum:num,
        totalPrice:price
      })
    })
  }
  render(){
    return(
      <View className="wrap">
        <Image className="img" src={require("../../assets/img/foodstore.png")}/>
        <Text className="total-num">{this.state.totalNum}</Text>
        <Text className="total-price">总价格：{this.state.totalPrice}</Text>
      </View>
    )
  }
}
