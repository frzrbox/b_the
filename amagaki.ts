import * as placeholderPlugin from './plugins/placeholder';

import {
	Document,
	NunjucksPlugin,
	Pod,
	StaticFile,
	Url,
} from '@amagaki/amagaki';

export default (pod: Pod) => {
	pod.configure({
		meta: {
			name: 'Blinkk Excersise',
		},
		localization: {
			defaultLocale: 'en',
			locales: ['en'],
		},
	});
	placeholderPlugin.register(pod, {
		sizes: ['16x9', '1x1', '9x16', '7x3'],
	});

	const nunjucksPlugin = pod.plugins.get('NunjucksPlugin') as NunjucksPlugin;

	type Urlable = StaticFile | Document | string;

	nunjucksPlugin.addFilter('url', function (object: Urlable) {
		if (object instanceof StaticFile) {
			return `${Url.relative(object.url.path, this.ctx.doc)}?fingerprint=${
				object.fingerprint
			}`;
		} else if (object instanceof Document) {
			return `${Url.relative(object.url.path, this.ctx.doc)}`;
		}
		return `${Url.relative(object, this.ctx.doc)}`;
	});

	nunjucksPlugin.addFilter('log', function (value: any) {
		console.log('log', value);
	});
};
