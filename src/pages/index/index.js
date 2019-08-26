import Taro, { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import './index.less'
import FoodList from '../foodList/foodList'
import BottomModule from '../bottomModule/bottomModule'
//import Child from '../Child/child'
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  constructor() {
    super()
    this.state = {
      //name:'zhangsan'
      foodList: [
        {id: 'code1', name: '鱼香肉丝',sale:20, price: 15},
        {id: 'code2', name: '西红柿炒鸡蛋',sale:20, price: 10},
        {id: 'code3', name: '青椒炒肉',sale:20, price: 25},
        {id: 'code4', name: '酸辣粉',sale:20, price: 8},
        {id: 'code5', name: '红烧茄子',sale:20, price: 30},
        {id: 'code6', name: '宫保鸡丁',sale:20, price: 17},
        {id: 'code7', name: '大盘鸡',sale:20, price: 58},
      ]
    }
  }
  componentWillMount () { }

  componentDidMount () {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  render () {
    return (
      <View className='index'>
        <FoodList datalist={this.state.foodList}></FoodList>
        <BottomModule></BottomModule>
        {/*<Child name={this.state.name} onChange={this.childClick}></Child>
        <Button onClick={this.change}>改变name</Button>
        <Text>Hello {this.state.name}!</Text>*/}
      </View>
    )
  }
}
