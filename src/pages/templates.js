import React from 'react';
import '../App.css'

const templates = () => {
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
					<div className="text-3xl font-medium text-black text-center">Templates</div>
					<p className="text-slate-500">This displays the pre-defined templates!</p>
					<p className='text-slate-500'>[awesome-github-profile-readme-templates]</p>
				</div>
			</div>

		</div>
	);
};

export default templates;
