import React from 'react';
import '../App.css'

const About = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh'
			}}
		>
			<div className="px-4 py-6 max-w-sm mx-auto bg-slate-100 rounded-xl shadow-lg flex items-center space-x-4">
				<div className="shrink-0">
				</div>

				<div>
					<div className="text-3xl font-medium text-black text-center">About</div>
					<p className="text-slate-500">Describing the purpose of our website :)</p>
				</div>
			</div>

		</div>
	);
};

export default About;