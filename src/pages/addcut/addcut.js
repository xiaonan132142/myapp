import Taro,{Component} from '@tarojs/taro'
import {View,Text,Image,Button} from '@tarojs/components'
import './addcut.less'
const addImg = require("../../assets/img/add.png")
const cutImg = require("../../assets/img/cut.png")
import {getEvent} from '../../utils/common'
let events = getEvent()
export default class AddCut extends Component{
  cutClick(food){
    //let store=Taro.setStorageSync('foodKey',{});
    let store=Taro.getStorageSync('foodKey');
    if(!store) store={};
    if(this.state.num>0){
      this.setState({
        num:this.state.num-1
      })
      if(this.state.num==1){
        //菜品数据被删除
        if(store[food.id]){
          delete store[food.id];//删除菜品数据结构
        }
      }else{
        if(store[food.id]){
          store[food.id].num=this.state.num-1;//数量减1  结构不变
        }
      }
      Taro.setStorageSync('foodKey',store);//进行缓存数据更新
      console.log(Taro.getStorageSync('foodKey'))
      events.trigger('computedTotal')
    }
  }
  addClick(food){
    this.setState({
      num:this.state.num+1
    })
    let store=Taro.getStorageSync('foodKey');
    if (store[food.id]){
      store[food.id].num=this.state.num+1
    }else{
      store[food.id]={num:1,...food}
    }
    Taro.setStorageSync('foodKey',store);//进行缓存数据更新
    console.log(Taro.getStorageSync('foodKey'))
    events.trigger('computedTotal')
  }
  constructor(){
    super()
    this.state={
      num:0
    }
  }
  render(){
    const {data} = this.props
    return(
      <View className="wrap">
        <Button className="btn" onClick={()=>this.cutClick(data)}>
          <Image className="img" src={cutImg} />
        </Button>
        <Text className="text">{this.state.num}</Text>
        <Button className="btn" onClick={()=>this.addClick(data)}>
          <Image className="img" src={addImg} />
        </Button>
      </View>
    )
  }
}
AddCut.defaultProps={

}

