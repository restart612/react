import React, { useEffect } from 'react'
import { Form, Input, Button, Checkbox, Card, notification } from 'antd'
import styles from './login.module.scss'

const Login: React.FC = () => {
  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
  }
  const tailLayout = {
    wrapperCol: { offset: 5, span: 19 },
  }
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  useEffect(() => {
    notification.open({
      message: '你好👋',
      description: '这是一个React + TS + AntD + Redux + react-router的练手项目，也是我用React做的第一个项目',
      duration: 0,
    })
    notification.open({
      message: '项目使用库📚',
      description:
        '项目使用eslint做代码质量检测、prettier做代码规范格式化、editorconfig规范开发环境、使用sass及module做样式预处理器及模块化、echarts做图表...',
      duration: 0,
    })
  }, [])

  return (
    <div className={styles.login}>
      <Card
        style={{ width: 400, backgroundColor: 'rgba(255, 255, 255, 0.068)', border: 'none' }}
        hoverable
        className={styles['login-box']}
      >
        <Form {...layout} name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item label="用户名" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="密码" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox style={{ color: '#fff' }}>记住我</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              登陆
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
