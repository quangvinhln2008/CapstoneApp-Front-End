import React from 'react';
import Layout from '../../layouts/Layout';
import { Label, Button, Form, FormGroup, Input } from 'reactstrap';

function SignIn() {
	return (
		<Layout>
			<div className="wrap__header">
				<h1>CAPSTONE APP</h1>
				<p>Enter you account to log in</p>
			</div>
			<Form className="wrap__form">
				<FormGroup>
					<Label className="wrap__label" for="email">
						Email:
					</Label>
					<Input
						id="emal"
						name="email"
						placeholder="Enter your email"
						type="email"
					/>
				</FormGroup>
				<FormGroup>
					<Label className="wrap__label" for="password">
						Password:
					</Label>
					<Input
						id="password"
						name="password"
						placeholder="Enter your password"
						type="password"
					/>
				</FormGroup>
				<Button className="wrap__button" color="primary">
					{' '}
					Sign In
				</Button>
			</Form>
			<a href="/accounts/forgotpassword" className="wrap__link">
				Forgot password
			</a>
		</Layout>
	);
}

export default SignIn;

SignIn.getLayout = function PageLayout(page) {
	return <>{page};</>;
};
