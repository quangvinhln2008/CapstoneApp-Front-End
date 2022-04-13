import React from 'react';
import Layout from '../../../layouts/Layout';

function ResetPassSuccess() {
	return (
		<Layout>
			<div className="wrap__header">
				<h1>CAPSTONE APP</h1>
				<p>Enter you email address. We will send you a new password</p>
			</div>
			<div className="wrap__info">
				<p>
					An email have send to your email address. Check your email to get new
					password.
				</p>
			</div>
			<a href="/accounts/SignIn" className="wrap__link">
				Log in to your account
			</a>
		</Layout>
	);
}

export default ResetPassSuccess;

ResetPassSuccess.getLayout = function PageLayout(page) {
	return <>{page};</>;
};
