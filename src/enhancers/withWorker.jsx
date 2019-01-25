// @flow
import * as React from 'react';

// $FlowFixMe
import Worker from 'worker-loader!../workers/sample';

import { type Image } from 'types/image';
import { type Status } from 'types/status';

type InputProps = {
	sample: Array<Image>,
	status: Status,
	postMessage: Function
}

type State = {
	sample: Array<Image>,
	status: Status
}

type SendWorker = {
	type: string
}

type RecieveFromWorker = {
	data: {
		status: Status,
		sample: Array<Image>
	}
}

export function withWorker(
	Component: React.ComponentType<InputProps>
): React.ComponentType<{}> {

	return class WithWorker extends React.Component<{}, State> {

		state = {
			sample: [],
			status: 'loading'
		}

		worker: {
			postMessage: Function,
			addEventListener: Function
		};

		componentDidMount() {

			this.worker = new Worker();
			this.worker.addEventListener('message', this.receiveMessage);
			this.postMessage({ type: 'init' });

		}

		postMessage = (data: SendWorker) => {

			this.worker.postMessage(data);

		}

		receiveMessage = (event: RecieveFromWorker) => {

			const { status, sample } = event.data;
			this.setState({
				status,
				sample: sample ? sample : []
			});

		}

		render() {

			const { status, sample } = this.state;

			return (
				<Component
					status={status}
					sample={sample}
					postMessage={this.postMessage}
				/>
			);

		}

	};

}
