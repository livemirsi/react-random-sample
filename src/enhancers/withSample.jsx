// @flow
import * as React from 'react';

import { type Image } from 'types/image';
import { type Status } from 'types/status';

type InputProps = {
	sample: Array<Image>,
	status: Status,
	onRandomSample: Function,
	onRandomSampleWeight: Function
}

type OutputProps = {
	status: Status,
	sample: Array<Image>,
	postMessage: Function
}

export function withSample(
	Component: React.ComponentType<InputProps>
): React.ComponentType<OutputProps> {

	return class WithSample extends React.Component<OutputProps> {

		handleRandomSample = () => {

			const { postMessage } = this.props;
			postMessage({ type: 'getRandomSample' });

		}

		handleRandomSampleWeight = () => {

			const { postMessage } = this.props;
			postMessage({ type: 'getRandomSampleWeight' });

		}

		render() {

			const { status, sample } = this.props;

			return (
				<Component
					status={status}
					sample={sample}
					onRandomSample={this.handleRandomSample}
					onRandomSampleWeight={this.handleRandomSampleWeight}
				/>
			);

		}

	};

}
