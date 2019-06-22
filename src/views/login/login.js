import React from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import Md5 from 'js-md5';
import Api from '../../api/api';
import Session from '../../core/session';
import './login.scss';

@Form.create()
class NormalLoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.event.loginEvent({
                    username: values.username,
                    userpassword: values.password
                });
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form layout="inline" onSubmit={this.handleSubmit} className="queryPanel">
                <Form.Item>
                    {getFieldDecorator('username', {
                        initialValue: this.props.data.username,
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        initialValue: this.props.data.userpassowrd,
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}

                    <Button type="primary" htmlType="submit" className="login-form-button" loading={this.props.loading}>
                        Log in
                    </Button>

                </Form.Item>
            </Form>
        );
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state.flagString = this.GlobalEnvParams.ENV_TITLE;
    }

    data = {
        username: this.GlobalEnvParams.TEST_USERNAME,
        userpassowrd: this.GlobalEnvParams.TEST_PASSWORD,
        captcha: this.GlobalEnvParams.TEST_CAPRCHA
    };

    state = {
        flagString: '',
        loading: false
    };

    componentDidMount() {
        const isLogin = Session.isAuthSession();
        if (isLogin) {
            this.props.history.go(1); //当浏览器用后退按钮回到登录页时，判断登录页是否登录，是登录就重定向上个页面
        }
    }

    getCaptcha() {
    }

    loginEvent(data) {
        let loginParams = {
            userName: data.username,
            userPwd: Md5(data.userpassword),
            uuid: '',
            captcha: ''
        };

        this.setState({loading: true});
        Api.postUrl(Api.Url.LOGIN, loginParams).then(res => {
            this.setState({loading: false});
            if ((res.data)) {
                Session.saveSession(res.data);
                // const {from} = this.props.location.state || {from: {pathname: '/'}}
                this.props.history.push('/');
            }
            this.getCaptcha();
        }, () => {
            this.setState({loading: false});
        });
    }

    render() {
        return (
            <div className="container testscss">
                <h3>React Admin Example - {this.state.flagString}</h3>
                <div className="loginContainer">
                    <NormalLoginForm
                        loading={this.state.loading}
                        data={this.data}
                        event={{loginEvent: this.loginEvent.bind(this)}}>
                    </NormalLoginForm>
                </div>
            </div>
        );
    }
}

export default Login;
