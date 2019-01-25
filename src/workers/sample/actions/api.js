// flow
export const getData = () => {

	fetch('https://jsonplaceholder.typicode.com/photos')
		.then(response => {

			if (!response.ok) {

				throw new Error('fail Loaded Data');

			}

			return response.json();

		})
		.then(data => {

			self.storage.elements = data;
			self.postMessage({ status: 'loadedData' });

		})
		.catch(() => {

			self.postMessage({ status: 'failLoadedData' });

		});

};
