import styled from 'styled-components'
import logoPic from 'D:/前端/react-test/my-react-app/src/statics/jianshulogo.png'

// 设置变量为一个带样式的div标签
export const HeaderWrapper = styled.div` 
    height:58px;
    border-bottom:1px solid #f0f0f0;
    margin-top:-10px;
`
export const Logo = styled.a.attrs({
    herf:'/'//点击返回首页；
})`
    position:absolute;
    top:0;
    left:0;
    height:56px;
    width:100px;
    display:block;
    background:url(${logoPic});       //不能直接写路径‘’，会被看成是一个字符串。
    background-size:contain;
`
export const Nav = styled.div`
    width:960px;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
    margin: 0 auto;
    // background:blue;
`
//&.className设置组件中的className样式
export const NavItem = styled.div`
line-height:56px;
padding:0 15px;
font-size:17px;
color:#333;          
    &.left{                    //&字符可以引用  自己的className，不添加则是引用子元素的className
        float:left;
        
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`
export const SearchWrapper = styled.div`
float:left;
position:relative;
.slide-enter{
transition:all .2s ease-out;
}
.slide-enter-active{
width:240px;
}
.silde-exit{
    transition:all .2s ease-out;
}
.silde-exit-active{
    width:160px;
}
.iconfont{
    position:absolute;
    right:5px;
    bottom :5px;
    width:30px;
    line-height:30px;
    border-radius:15px;
    text-align:center;
    &.focused{
        background:#777;
        color:#fff;
    }
}
`
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
width:160px;
height:38px;
border:none;
outline:none;
border-radius:19px;
background:#eee;
margin-top:9px;
margin-left:20px;
&::placeholder{
    color:#999;
}
&.focused{
    width:240px;  
}
color:#666;
padding:0,30px,20px;
font-size:14px;
`
export const Addition = styled.div`
position:absolute;
right:0;
top:0;
height:56px;
`
export const Button = styled.div`
float:right;
line-height:38px;
boder-radius:19px;
margin-top:9px;
margin-right:20px;
padding:0 20px;
border:1px solid #ec6149;
font-size:14px;
&.reg{
    color:#ec6149;
}
&.writting{
    color:#fff;
    background:#ec6149;
}
`
 