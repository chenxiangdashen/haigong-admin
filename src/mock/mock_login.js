import {getResultError, getResultSuccess} from './mock_response';

const LoginUsers = [
    {
        id: 1
        , userId: 1
        , username: 'admin'
        , password: '123456'
        , avatar: ''
        , aliasname: 'mockjs'
        , tokenId: 'xx'
        , loginResultFlag: 1
    }
];

let UserData = {
    baseInfo: null,
    menuList: [
        {
            "groupName": "基本配置",
            "code": "fun_x_01",
            "name": "x_01",
            "groupIndex": 1
        },
        {
            "groupName": "基本配置",
            "code": "fun_x_02",
            "name": "x_02",
            "groupIndex": 1
        }
    ],
    count: 61,
}

export default {
    bootstrap: function (mock) {
        let _userData = UserData;

        mock.onGet('/success').reply(200, getResultSuccess(null, 'success'));
        mock.onGet('/error').reply(500, getResultError(null, 'failure'));

        mock.onGet('/_mockjs/sys/getLoginInfo').reply(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([200, getResultSuccess(_userData, '请求成功')]);
                }, 1000);
            })
        });

        mock.onPost("/_mockjs/sys/login").reply(config => {
            let {username, password} = JSON.parse(config.data);
            return new Promise((resolve) => {
                let user = null;
                setTimeout(() => {
                        let hasUser = LoginUsers.some(u => {
                            if (u.username === username && u.password === password) {
                                user = JSON.parse(JSON.stringify(u));
                                user.password = undefined;
                                return true;
                            }
                            return false;
                        });
                        if (hasUser) {
                            _userData.baseInfo = user;
                            resolve([200, getResultSuccess(user, '请求成功')]);
                        } else {
                            resolve([200, getResultError('账号或密码错误')]);
                        }
                    },
                    2000);
            });
        });

        mock.onPost('/_mockjs/sys/logout').reply(() => {
            return new Promise((resolve) => {
                resolve([200, getResultSuccess(null, '请求成功')]);
            })
        });

        mock.onGet('/_mockjs/sys/count').reply(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([200, getResultSuccess({count: 99}, '请求成功')]);
                }, 5000);
            })
        });
    }
};