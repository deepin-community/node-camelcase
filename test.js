import test from 'ava';
import camelCase from './index.js';

test('camelCase', t => {
	t.is(camelCase('foo'), 'foo');
	/// https://github.com/sindresorhus/camelcase/issues/95
	/// t.is(camelCase('IDs'), 'ids');
	/// t.is(camelCase('FooIDs'), 'fooIds');
	t.is(camelCase('foo-bar'), 'fooBar');
	t.is(camelCase('foo-bar-baz'), 'fooBarBaz');
	t.is(camelCase('foo--bar'), 'fooBar');
	t.is(camelCase('--foo-bar'), 'fooBar');
	t.is(camelCase('--foo--bar'), 'fooBar');
	t.is(camelCase('FOO-BAR'), 'fooBar');
	t.is(camelCase('FOÈ-BAR'), 'foèBar');
	t.is(camelCase('-foo-bar-'), 'fooBar');
	t.is(camelCase('--foo--bar--'), 'fooBar');
	t.is(camelCase('foo-1'), 'foo1');
	t.is(camelCase('foo.bar'), 'fooBar');
	t.is(camelCase('foo..bar'), 'fooBar');
	t.is(camelCase('..foo..bar..'), 'fooBar');
	t.is(camelCase('foo_bar'), 'fooBar');
	t.is(camelCase('__foo__bar__'), 'fooBar');
	t.is(camelCase('foo bar'), 'fooBar');
	t.is(camelCase('  foo  bar  '), 'fooBar');
	t.is(camelCase('-'), '');
	t.is(camelCase(' - '), '');
	t.is(camelCase('fooBar'), 'fooBar');
	t.is(camelCase('fooBar-baz'), 'fooBarBaz');
	t.is(camelCase('foìBar-baz'), 'foìBarBaz');
	t.is(camelCase('fooBarBaz-bazzy'), 'fooBarBazBazzy');
	t.is(camelCase('FBBazzy'), 'fbBazzy');
	t.is(camelCase('F'), 'f');
	t.is(camelCase('FooBar'), 'fooBar');
	t.is(camelCase('Foo'), 'foo');
	t.is(camelCase('FOO'), 'foo');
	t.is(camelCase(['foo', 'bar']), 'fooBar');
	t.is(camelCase(['foo', '-bar']), 'fooBar');
	t.is(camelCase(['foo', '-bar', 'baz']), 'fooBarBaz');
	t.is(camelCase(['', '']), '');
	t.is(camelCase('--'), '');
	t.is(camelCase(''), '');
	t.is(camelCase('_'), '');
	t.is(camelCase(' '), '');
	t.is(camelCase('.'), '');
	t.is(camelCase('..'), '');
	t.is(camelCase('--'), '');
	t.is(camelCase('  '), '');
	t.is(camelCase('__'), '');
	t.is(camelCase('--__--_--_'), '');
	t.is(camelCase(['---_', '--', '', '-_- ']), '');
	t.is(camelCase('foo bar?'), 'fooBar?');
	t.is(camelCase('foo bar!'), 'fooBar!');
	t.is(camelCase('foo bar$'), 'fooBar$');
	t.is(camelCase('foo-bar#'), 'fooBar#');
	t.is(camelCase('XMLHttpRequest'), 'xmlHttpRequest');
	t.is(camelCase('AjaxXMLHttpRequest'), 'ajaxXmlHttpRequest');
	t.is(camelCase('Ajax-XMLHttpRequest'), 'ajaxXmlHttpRequest');
	t.is(camelCase([]), '');
	t.is(camelCase('mGridCol6@md'), 'mGridCol6@md');
	t.is(camelCase('A::a'), 'a::a');
	t.is(camelCase('Hello1World'), 'hello1World');
	t.is(camelCase('Hello11World'), 'hello11World');
	t.is(camelCase('hello1world'), 'hello1World');
	t.is(camelCase('Hello1World11foo'), 'hello1World11Foo');
	t.is(camelCase('Hello1'), 'hello1');
	t.is(camelCase('hello1'), 'hello1');
	t.is(camelCase('1Hello'), '1Hello');
	t.is(camelCase('1hello'), '1Hello');
	t.is(camelCase('h2w'), 'h2W');
	t.is(camelCase('розовый_пушистый-единороги'), 'розовыйПушистыйЕдинороги');
	t.is(camelCase('розовый_пушистый-единороги'), 'розовыйПушистыйЕдинороги');
	t.is(camelCase('РОЗОВЫЙ_ПУШИСТЫЙ-ЕДИНОРОГИ'), 'розовыйПушистыйЕдинороги');
	t.is(camelCase('桑德在这里。'), '桑德在这里。');
	t.is(camelCase('桑德在这里。'), '桑德在这里。');
	t.is(camelCase('桑德_在这里。'), '桑德在这里。');
});

test('camelCase with pascalCase option', t => {
	t.is(camelCase('foo', {pascalCase: true}), 'Foo');
	t.is(camelCase('foo-bar', {pascalCase: true}), 'FooBar');
	t.is(camelCase('foo-bar-baz', {pascalCase: true}), 'FooBarBaz');
	t.is(camelCase('foo--bar', {pascalCase: true}), 'FooBar');
	t.is(camelCase('--foo-bar', {pascalCase: true}), 'FooBar');
	t.is(camelCase('--foo--bar', {pascalCase: true}), 'FooBar');
	t.is(camelCase('FOO-BAR', {pascalCase: true}), 'FooBar');
	t.is(camelCase('FOÈ-BAR', {pascalCase: true}), 'FoèBar');
	t.is(camelCase('-foo-bar-', {pascalCase: true}), 'FooBar');
	t.is(camelCase('--foo--bar--', {pascalCase: true}), 'FooBar');
	t.is(camelCase('foo-1', {pascalCase: true}), 'Foo1');
	t.is(camelCase('foo.bar', {pascalCase: true}), 'FooBar');
	t.is(camelCase('foo..bar', {pascalCase: true}), 'FooBar');
	t.is(camelCase('..foo..bar..', {pascalCase: true}), 'FooBar');
	t.is(camelCase('foo_bar', {pascalCase: true}), 'FooBar');
	t.is(camelCase('__foo__bar__', {pascalCase: true}), 'FooBar');
	t.is(camelCase('__foo__bar__', {pascalCase: true}), 'FooBar');
	t.is(camelCase('foo bar', {pascalCase: true}), 'FooBar');
	t.is(camelCase('  foo  bar  ', {pascalCase: true}), 'FooBar');
	t.is(camelCase('-', {pascalCase: true}), '');
	t.is(camelCase(' - ', {pascalCase: true}), '');
	t.is(camelCase('fooBar', {pascalCase: true}), 'FooBar');
	t.is(camelCase('fooBar-baz', {pascalCase: true}), 'FooBarBaz');
	t.is(camelCase('foìBar-baz', {pascalCase: true}), 'FoìBarBaz');
	t.is(camelCase('fooBarBaz-bazzy', {pascalCase: true}), 'FooBarBazBazzy');
	t.is(camelCase('FBBazzy', {pascalCase: true}), 'FbBazzy');
	t.is(camelCase('F', {pascalCase: true}), 'F');
	t.is(camelCase('FooBar', {pascalCase: true}), 'FooBar');
	t.is(camelCase('Foo', {pascalCase: true}), 'Foo');
	t.is(camelCase('FOO', {pascalCase: true}), 'Foo');
	t.is(camelCase(['foo', 'bar'], {pascalCase: true}), 'FooBar');
	t.is(camelCase(['foo', '-bar'], {pascalCase: true}), 'FooBar');
	t.is(camelCase(['foo', '-bar', 'baz'], {pascalCase: true}), 'FooBarBaz');
	t.is(camelCase(['', ''], {pascalCase: true}), '');
	t.is(camelCase('--', {pascalCase: true}), '');
	t.is(camelCase('', {pascalCase: true}), '');
	t.is(camelCase('--__--_--_', {pascalCase: true}), '');
	t.is(camelCase(['---_', '--', '', '-_- '], {pascalCase: true}), '');
	t.is(camelCase('foo bar?', {pascalCase: true}), 'FooBar?');
	t.is(camelCase('foo bar!', {pascalCase: true}), 'FooBar!');
	t.is(camelCase('foo bar$', {pascalCase: true}), 'FooBar$');
	t.is(camelCase('foo-bar#', {pascalCase: true}), 'FooBar#');
	t.is(camelCase('XMLHttpRequest', {pascalCase: true}), 'XmlHttpRequest');
	t.is(camelCase('AjaxXMLHttpRequest', {pascalCase: true}), 'AjaxXmlHttpRequest');
	t.is(camelCase('Ajax-XMLHttpRequest', {pascalCase: true}), 'AjaxXmlHttpRequest');
	t.is(camelCase([], {pascalCase: true}), '');
	t.is(camelCase('mGridCol6@md', {pascalCase: true}), 'MGridCol6@md');
	t.is(camelCase('A::a', {pascalCase: true}), 'A::a');
	t.is(camelCase('Hello1World', {pascalCase: true}), 'Hello1World');
	t.is(camelCase('Hello11World', {pascalCase: true}), 'Hello11World');
	t.is(camelCase('hello1world', {pascalCase: true}), 'Hello1World');
	t.is(camelCase('hello1World', {pascalCase: true}), 'Hello1World');
	t.is(camelCase('hello1', {pascalCase: true}), 'Hello1');
	t.is(camelCase('Hello1', {pascalCase: true}), 'Hello1');
	t.is(camelCase('1hello', {pascalCase: true}), '1Hello');
	t.is(camelCase('1Hello', {pascalCase: true}), '1Hello');
	t.is(camelCase('h1W', {pascalCase: true}), 'H1W');
	t.is(camelCase('РозовыйПушистыйЕдинороги', {pascalCase: true}), 'РозовыйПушистыйЕдинороги');
	t.is(camelCase('розовый_пушистый-единороги', {pascalCase: true}), 'РозовыйПушистыйЕдинороги');
	t.is(camelCase('РОЗОВЫЙ_ПУШИСТЫЙ-ЕДИНОРОГИ', {pascalCase: true}), 'РозовыйПушистыйЕдинороги');
	t.is(camelCase('桑德在这里。', {pascalCase: true}), '桑德在这里。');
	t.is(camelCase('桑德_在这里。', {pascalCase: true}), '桑德在这里。');
});

test('camelCase with preserveConsecutiveUppercase option', t => {
	t.is(camelCase('foo-BAR', {preserveConsecutiveUppercase: true}), 'fooBAR');
	t.is(camelCase('Foo-BAR', {preserveConsecutiveUppercase: true}), 'fooBAR');
	t.is(camelCase('fooBAR', {preserveConsecutiveUppercase: true}), 'fooBAR');
	t.is(camelCase('fooBaR', {preserveConsecutiveUppercase: true}), 'fooBaR');
	t.is(camelCase('FOÈ-BAR', {preserveConsecutiveUppercase: true}), 'FOÈBAR');
	t.is(camelCase(['foo', 'BAR'], {preserveConsecutiveUppercase: true}), 'fooBAR');
	t.is(camelCase(['foo', '-BAR'], {preserveConsecutiveUppercase: true}), 'fooBAR');
	t.is(camelCase(['foo', '-BAR', 'baz'], {preserveConsecutiveUppercase: true}), 'fooBARBaz');
	t.is(camelCase(['', ''], {preserveConsecutiveUppercase: true}), '');
	t.is(camelCase('--', {preserveConsecutiveUppercase: true}), '');
	t.is(camelCase('', {preserveConsecutiveUppercase: true}), '');
	t.is(camelCase('--__--_--_', {preserveConsecutiveUppercase: true}), '');
	t.is(camelCase(['---_', '--', '', '-_- '], {preserveConsecutiveUppercase: true}), '');
	t.is(camelCase('foo BAR?', {preserveConsecutiveUppercase: true}), 'fooBAR?');
	t.is(camelCase('foo BAR!', {preserveConsecutiveUppercase: true}), 'fooBAR!');
	t.is(camelCase('foo BAR$', {preserveConsecutiveUppercase: true}), 'fooBAR$');
	t.is(camelCase('foo-BAR#', {preserveConsecutiveUppercase: true}), 'fooBAR#');
	t.is(camelCase('XMLHttpRequest', {preserveConsecutiveUppercase: true}), 'XMLHttpRequest');
	t.is(camelCase('AjaxXMLHttpRequest', {preserveConsecutiveUppercase: true}), 'ajaxXMLHttpRequest');
	t.is(camelCase('Ajax-XMLHttpRequest', {preserveConsecutiveUppercase: true}), 'ajaxXMLHttpRequest');
	t.is(camelCase([], {preserveConsecutiveUppercase: true}), '');
	t.is(camelCase('mGridCOl6@md', {preserveConsecutiveUppercase: true}), 'mGridCOl6@md');
	t.is(camelCase('A::a', {preserveConsecutiveUppercase: true}), 'a::a');
	t.is(camelCase('Hello1WORLD', {preserveConsecutiveUppercase: true}), 'hello1WORLD');
	t.is(camelCase('Hello11WORLD', {preserveConsecutiveUppercase: true}), 'hello11WORLD');
	t.is(camelCase('РозовыйПушистыйFOOдинорогиf', {preserveConsecutiveUppercase: true}), 'розовыйПушистыйFOOдинорогиf');
	t.is(camelCase('桑德在这里。', {preserveConsecutiveUppercase: true}), '桑德在这里。');
	t.is(camelCase('桑德_在这里。', {preserveConsecutiveUppercase: true}), '桑德在这里。');
	/// https://github.com/sindresorhus/camelcase/issues/95
	/// t.is(camelCase('IDs', {preserveConsecutiveUppercase: true}), 'ids');
	t.is(camelCase('FooIDs', {preserveConsecutiveUppercase: true}), 'fooIDs');
});

test('camelCase with both pascalCase and preserveConsecutiveUppercase option', t => {
	t.is(camelCase('foo-BAR', {pascalCase: true, preserveConsecutiveUppercase: true}), 'FooBAR');
	t.is(camelCase('fooBAR', {pascalCase: true, preserveConsecutiveUppercase: true}), 'FooBAR');
	t.is(camelCase('fooBaR', {pascalCase: true, preserveConsecutiveUppercase: true}), 'FooBaR');
	t.is(camelCase('fOÈ-BAR', {pascalCase: true, preserveConsecutiveUppercase: true}), 'FOÈBAR');
	t.is(camelCase('--foo.BAR', {pascalCase: true, preserveConsecutiveUppercase: true}), 'FooBAR');
	t.is(camelCase(['Foo', 'BAR'], {pascalCase: true, preserveConsecutiveUppercase: true}), 'FooBAR');
	t.is(camelCase(['foo', '-BAR'], {pascalCase: true, preserveConsecutiveUppercase: true}), 'FooBAR');
	t.is(camelCase(['foo', '-BAR', 'baz'], {pascalCase: true, preserveConsecutiveUppercase: true}), 'FooBARBaz');
	t.is(camelCase(['', ''], {pascalCase: true, preserveConsecutiveUppercase: true}), '');
	t.is(camelCase('--', {pascalCase: true, preserveConsecutiveUppercase: true}), '');
	t.is(camelCase('', {pascalCase: true, preserveConsecutiveUppercase: true}), '');
	t.is(camelCase('--__--_--_', {pascalCase: true, preserveConsecutiveUppercase: true}), '');
	t.is(camelCase(['---_', '--', '', '-_- '], {pascalCase: true, preserveConsecutiveUppercase: true}), '');
	t.is(camelCase('foo BAR?', {pascalCase: true, preserveConsecutiveUppercase: true}), 'FooBAR?');
	t.is(camelCase('foo BAR!', {pascalCase: true, preserveConsecutiveUppercase: true}), 'FooBAR!');
	t.is(camelCase('Foo BAR$', {pascalCase: true, preserveConsecutiveUppercase: true}), 'FooBAR$');
	t.is(camelCase('foo-BAR#', {pascalCase: true, preserveConsecutiveUppercase: true}), 'FooBAR#');
	t.is(camelCase('xMLHttpRequest', {pascalCase: true, preserveConsecutiveUppercase: true}), 'XMLHttpRequest');
	t.is(camelCase('ajaxXMLHttpRequest', {pascalCase: true, preserveConsecutiveUppercase: true}), 'AjaxXMLHttpRequest');
	t.is(camelCase('Ajax-XMLHttpRequest', {pascalCase: true, preserveConsecutiveUppercase: true}), 'AjaxXMLHttpRequest');
	t.is(camelCase([], {pascalCase: true, preserveConsecutiveUppercase: true}), '');
	t.is(camelCase('mGridCOl6@md', {pascalCase: true, preserveConsecutiveUppercase: true}), 'MGridCOl6@md');
	t.is(camelCase('A::a', {pascalCase: true, preserveConsecutiveUppercase: true}), 'A::a');
	t.is(camelCase('Hello1WORLD', {pascalCase: true, preserveConsecutiveUppercase: true}), 'Hello1WORLD');
	t.is(camelCase('Hello11WORLD', {pascalCase: true, preserveConsecutiveUppercase: true}), 'Hello11WORLD');
	t.is(camelCase('pозовыйПушистыйFOOдинорогиf', {pascalCase: true, preserveConsecutiveUppercase: true}), 'PозовыйПушистыйFOOдинорогиf');
	t.is(camelCase('桑德在这里。', {pascalCase: true, preserveConsecutiveUppercase: true}), '桑德在这里。');
	t.is(camelCase('桑德_在这里。', {pascalCase: true, preserveConsecutiveUppercase: true}), '桑德在这里。');
});

test('camelCase with locale option', t => {
	t.is(camelCase('lorem-ipsum', {locale: 'tr-TR'}), 'loremİpsum');
	t.is(camelCase('lorem-ipsum', {locale: 'en-EN'}), 'loremIpsum');
	t.is(camelCase('lorem-ipsum', {locale: ['tr', 'TR', 'tr-TR']}), 'loremİpsum');
	t.is(camelCase('lorem-ipsum', {locale: ['en-EN', 'en-GB']}), 'loremIpsum');
	t.is(camelCase('ipsum-dolor', {pascalCase: true, locale: 'tr-TR'}), 'İpsumDolor');
	t.is(camelCase('ipsum-dolor', {pascalCase: true, locale: 'en-EN'}), 'IpsumDolor');
	t.is(camelCase('ipsum-dolor', {pascalCase: true, locale: ['tr', 'TR', 'tr-TR']}), 'İpsumDolor');
	t.is(camelCase('ipsum-dolor', {pascalCase: true, locale: ['en-EN', 'en-GB']}), 'IpsumDolor');
});

test('camelCase with disabled locale', t => {
	withLocaleCaseFunctionsMocked(() => {
		t.is(camelCase('lorem-ipsum', {locale: false}), 'loremIpsum');
		t.is(camelCase('ipsum-dolor', {pascalCase: true, locale: false}), 'IpsumDolor');
		t.is(camelCase('ipsum-DOLOR', {pascalCase: true, locale: false, preserveConsecutiveUppercase: true}), 'IpsumDOLOR');
	});
});

test('invalid input', t => {
	t.throws(() => {
		camelCase(1);
	}, {
		message: /Expected the input to be/,
	});
});

/* eslint-disable no-extend-native */
const withLocaleCaseFunctionsMocked = fn => {
	const throwWhenBeingCalled = () => {
		throw new Error('Should not be called');
	};

	const toLocaleUpperCase = Object.getOwnPropertyDescriptor(String.prototype, 'toLocaleUpperCase');
	const toLocaleLowerCase = Object.getOwnPropertyDescriptor(String.prototype, 'toLocaleLowerCase');

	Object.defineProperty(String.prototype, 'toLocaleUpperCase', {
		...toLocaleUpperCase,
		value: throwWhenBeingCalled,
	});
	Object.defineProperty(String.prototype, 'toLocaleLowerCase', {
		...toLocaleLowerCase,
		value: throwWhenBeingCalled,
	});

	try {
		fn();
	} finally {
		Object.defineProperty(String.prototype, 'toLocaleUpperCase', toLocaleUpperCase);
		Object.defineProperty(String.prototype, 'toLocaleLowerCase', toLocaleLowerCase);
	}
};
/* eslint-enable no-extend-native */
