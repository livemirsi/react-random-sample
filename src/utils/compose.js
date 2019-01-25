export const compose = (...fns) => {

	return component => {

		return fns.reduceRight((comp, func) => func(comp), component);

	};

};
