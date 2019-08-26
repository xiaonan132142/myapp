import Taro,{Component} from '@tarojs/taro'
import {View,Text,Image} from '@tarojs/components'
import './foodList.less'
import AddCut from '../addcut/addcut'
const url = require('../../assets/img/1.jpg')
export default class foodList extends Component{
  render(){
    let {datalist} = this.props
    return(
      <View>
        {
          datalist.map((item)=>{
            return(
              <View className="block-wrap">
                <Image className="food-img" src={url} />
                <View className="desc">
                  <Text className="title">{item.name}</Text>
                  <Text className="title">销量 {item.sale}</Text>
                  <Text className="price">¥ {item.price}</Text>
                </View>
                <AddCut data={item}></AddCut>
              </View>
            )
          })
        }
      </View>
    )
  }
}
foodList.defaultProps={

}
