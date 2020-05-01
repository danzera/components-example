// MODULE IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
// FILE IMPORTS
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const App = _ => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					author="Sam"
					time="Today at 4:45PM"
					comment="I'm tall."
					avatar={ faker.image.avatar() }
				/>
			</ApprovalCard>
		
			<ApprovalCard>
				<CommentDetail
					author="Jon"
					time="Today at 2:00PM"
					comment="When will baseball start?"
					avatar={ faker.image.avatar() }
				/>
			</ApprovalCard>
			
			<ApprovalCard>
				<CommentDetail
					author="Ben"
					time="Yesterday at 8:30PM"
					comment="Squirrels are the worst."
					avatar={ faker.image.avatar() }
				/>
			</ApprovalCard>
			
			<ApprovalCard>
				<CommentDetail
					author="Kyle"
					time="Yesterday at 3:15PM"
					comment="GO RAIDERS!"
					avatar={ faker.image.avatar() }
				/>
			</ApprovalCard>

			<ApprovalCard>
				<h4>WARNING</h4>
				Are you sure you want to do this?
			</ApprovalCard>
			
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('#root'));
