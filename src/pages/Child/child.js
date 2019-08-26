import Taro,{Component} from '@tarojs/taro'
import {View,Text,Button} from '@tarojs/components'
import './child.less'

export default class Child extends Component{
  click(){
    this.props.onChange()
  }
  render(){
    return(<View>
      <Button onClick={this.click}>改变父组件name</Button>
        <Text>child {this.props.name}</Text>
    </View>)
  }
}
Child.defalutProps={
  name:111,
  onChange:null,
}
