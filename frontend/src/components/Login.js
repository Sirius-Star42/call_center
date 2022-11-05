import React from 'react'
import { Col, Row, Button, Checkbox, Form, Input } from 'antd';
import style from '../style/LoginPage.module.css'

const Login = () => {
	const onFinish = (values) => {
		console.log('Success:', values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<div className={style.container}>
			<Row
				align={'middle'}
				justify={'center'}
			>
				<Col
					className={style.cardContainer}
					span={5}
				>
					<h1>Welcome</h1>
					<div className={style.loginImage}>
						<img src='images/login.png' />
					</div>
					<Form
						name="loginForm"
						wrapperCol={{ span: 24 }}
						initialValues={{ remember: true, }}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="off"
					>
						<Form.Item
							name="username"
							rules={[
								{
									required: true,
									message: 'Please input your username!',
								},
							]}
						>
							<Input className={style.loginInput} placeholder='email' />
						</Form.Item>

						<Form.Item
							name="password"
							rules={[
								{
									required: true,
									message: 'Please input your password!',
								},
							]}
						>
							<Input.Password className={style.loginInput} placeholder='password' />
						</Form.Item>

						<Form.Item
							wrapperCol={{
								span: 24,
							}}

						>
							<Button
								className={style.submitButton}
								block
								type="primary"
								htmlType="submit"
							>
								LOGIN
							</Button>
						</Form.Item>
					</Form>
					<div className={style.signUp}>
						<h4>Don't have an account? <a>Sign Up</a></h4>
					</div>
				</Col>
			</Row>
		</div>

	)
}

export default Login