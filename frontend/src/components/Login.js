// import React, { useState } from 'react'
// import { Col, Row, Button, Form, Input } from 'antd';
// import http from '../api/main'
// import style from '../style/LoginPage.module.css'

// const Login = ({ setIsLogin }) => {
// 	const [signUp, setSignUp] = useState(false);

// 	const onFinish = async (values) => {
// 		const {password, passwordTwo} = values
// 		if(signUp && (password !== passwordTwo)) {
// 			return true
// 		}
// 		try {
// 			let loginRes = await http({
// 				url: '/login',
// 				method: 'POST',
// 				data: {
// 					values
// 				}
// 			})

// 			if (loginRes.data.success) setIsLogin(true)

// 		} catch (error) {
// 			console.log(error)
// 		}
// 	};

// 	const onFinishFailed = (errorInfo) => {
// 		console.log('Failed:', errorInfo);
// 	};

// 	return (
// 		<div className={style.container}>
// 			<Row
// 				align={'middle'}
// 				justify={'center'}
// 			>
// 				<Col
// 					className={style.cardContainer}
// 					span={5}
// 				>
// 					<h1>Welcome</h1>
// 					<div className={style.loginImage}>
// 						<img src='images/login.png' />
// 					</div>
// 					<Form
// 						name="loginForm"
// 						wrapperCol={{ span: 24 }}
// 						initialValues={{ remember: true, }}
// 						onFinish={onFinish}
// 						onFinishFailed={onFinishFailed}
// 						autoComplete="off"
// 					>
// 						<Form.Item
// 							name="username"
// 							rules={[
// 								{
// 									required: true,
// 									message: 'Please input your e-mail!',
// 								},
// 							]}
// 						>
// 							<Input className={style.loginInput} placeholder='email' />
// 						</Form.Item>

// 						<Form.Item
// 							name="password"
// 							rules={[
// 								{
// 									required: true,
// 									message: 'Please input your password!',
// 								},
// 							]}
// 						>
// 							<Input.Password className={style.loginInput} placeholder='password' />
// 						</Form.Item>
// 						<Form.Item
// 							name="passwordTwo"
// 							hidden={!signUp}
// 							rules={[
// 								{
// 									required: signUp,
// 									message: 'Please input your password again!',
// 								},
// 							]}
// 						>
// 							<Input.Password className={style.loginInput} placeholder='password again' />
// 						</Form.Item>

// 						<Form.Item
// 							wrapperCol={{
// 								span: 24,
// 							}}
// 						>
// 							<Button
// 								className={style.submitButton}
// 								block
// 								type="primary"
// 								htmlType="submit"
// 							>
// 								{signUp ? 'REGISTER' : 'LOGIN'}
// 							</Button>
// 						</Form.Item>
// 					</Form>
// 					<div className={style.signUp}>
// 						<h4>
// 							{!signUp ? "Don't have an account?" : "We look forward to seeing you!"}
// 							<a onClick={() => setSignUp(!signUp)}>{!signUp ? ' Sign Up' : ' Sign In'}</a>
// 						</h4>
// 					</div>
// 				</Col>
// 			</Row>
// 		</div>

// 	)
// }

// export default Login