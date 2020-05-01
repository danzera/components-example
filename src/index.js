// MODULE IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
// FILE IMPORTS
import CommentDetail from './CommentDetail';

const App = _ => {
	return (
		<div className="ui container comments">
			<CommentDetail
				author="Sam"
				time="Today at 4:45PM"
				comment="I'm tall."
				avatar={ faker.image.avatar() }
			/>
			<CommentDetail
				author="Jon"
				time="Today at 2:00PM"
				comment="When will baseball start?"
				avatar={ faker.image.avatar() }
			/>
			<CommentDetail
				author="Ben"
				time="Yesterday at 8:30PM"
				comment="Squirrels are the worst."
				avatar={ faker.image.avatar() }
			/>
			<CommentDetail
				author="Kyle"
				time="Yesterday at 3:15PM"
				comment="GO RAIDERS!"
				avatar={ faker.image.avatar() }
			/>
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('#root'));
