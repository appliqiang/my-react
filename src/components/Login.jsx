import React,{Component}from 'react';
import '../assets/css/login.scss';
import {login} from '../api/login';
import { setToken } from '../utils/auth'
import {Redirect } from 'react-router-dom';
export default  class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      loginFlag: false,
      name: '',
      pwd:''
    };
  };
  componentDidMount(){
    this.setState({
      name:'',
      pwd:''
    });
  };

  submit(){
    let params = {
      log_name: '15255575890',
      pwd: '123456',
      token: 1234,
      add_info: '',
      language: 1
    };
    login(params).then(res=>{
      setToken('token',res.token);
      setToken('uid',res.user_id);
      this.setState({
        loginFlag: true
      }); 
    },err=>{
      alert(err)
    })
  };
  render(){
    if(this.state.loginFlag){
      return <Redirect to='/'></Redirect>
    }else {
      return (
        <div className="login">
            <input type="text" ref='name' defaultValue={this.state.name}/>
            <input type="password" ref='pwd' defaultValue={this.state.pwd}/>
            <button onClick={()=>{this.submit()}}>登录</button>
        </div>
      );
    };
    
  }
}

// export default Login;
