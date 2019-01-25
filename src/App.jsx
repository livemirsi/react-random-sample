// @flow
import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';

import { GlobalStyle, Layout, Logo, Loader, Notification } from 'ui';
import { Menu } from 'components/Menu/Menu';
import { Sample } from 'components/Sample/Sample';

import { type Image } from 'types/image';
import { type Status } from 'types/status';

type Props = {
	sample: Array<Image>,
	status: Status,
	onRandomSample: Function,
	onRandomSampleWeight: Function
}

const App = ({
	sample, status, onRandomSample, onRandomSampleWeight
}: Props) => (
	<Layout>
		<Logo>Random sample</Logo>
		{status === 'loading' && <Loader />}
		{status === 'failLoadedData' &&
			<Notification>
				Error, try later
			</Notification>
		}
		{status !== 'loading' && status !== 'failLoadedData' &&
		<Fragment>
			<Menu
				onRandomSample={onRandomSample}
				onRandomSampleWeight={onRandomSampleWeight}
			/>
			<Sample
				list={sample}
			/>
		</Fragment>
		}
		<GlobalStyle />
	</Layout>
);

export default hot(module)(App);

