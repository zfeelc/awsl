import React,{Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
SearchWrapper} from  './style'

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            focused:false
        }
        this.handleInputBlur= this.handleInputBlur.bind(this)
        this.handleInputFocus = this.handleInputFocus.bind(this)
    }
      render(){
        return(
        <HeaderWrapper>
            <Logo />{/*<Logo herf:'/'/>  也是点击返回首页的另外一种方法*/}
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登陆</NavItem>
                <NavItem className='right'>
                    <span className='iconfont'>&#xe602;</span>
                </NavItem>
                <SearchWrapper>
               <CSSTransition           //CSSTransition为react-transition-group 的组件
               // CSSTransition自带四个状态className分别为：xxx.enter{},xxx.enter-activeP{},xxx.exit{}.xxx.exit-active{},用来描述状态，可在css里编写。
               in={this.state.focused}
               timeout={200}
               classNames='slide'
               >
                <NavSearch
                className={this.state.focused?'focused':''}  //根据focused的值来控制className的名字
                onFocus={this.handleInputFocus}  //onFocus为一个聚集事件， .后跟的是函数名
                onBlur={this.handleInputBlur}   //失焦状态事件
                >
                </NavSearch>
                </CSSTransition>
                <span className={this.state.focused?'focused iconfont':'iconfont'}>&#xe660;</span>{/*根据className的名字来控制事件的发生与结束*/}
                </SearchWrapper>
                </Nav>
                <Addition>
                <Button className='writting'>
                    <span className='iconfont'>&#xe608;</span>
                    写文章</Button>
                <Button className='reg'>注册</Button>    
                </Addition>
        </HeaderWrapper>//引入标签
        )   
    }
handleInputFocus(){
    this.setState({
        focused : true
    })
}
handleInputBlur(){
    this.setState({
        focused : false
    })
}
}


export default Header;