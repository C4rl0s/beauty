var beauty = require('../index.js');


//test beauty.beautifyConsole();
beauty.beautifyConsole();
console.print('-> default beauty.');
console.log('log:', 'one', 'two');
console.info('info:','three');
console.warn('warn:', 'four');
console.error('error:', 'five');

//test beauty.setTheme();
console.log();
var theme = {
	'log': ['blue','underline'],
	'info': ['cyan','inverse'],
	'warn': ['yellow','italic'],
	'error': ['red','bold']
};
beauty.setTheme(theme);

console.print('-> set another console theme.');
console.debug('debug:', 'zero');
console.log('log:', 'one', 'two');
console.info('info:','three');
console.warn('warn:', 'four');
console.error('error:', 'five');


//test beauty.beautifyStr();
console.log();
beauty.beautifyStr();
var theme2 = {
	'info': ['green']
};
beauty.setTheme(theme2);

console.print('-> make `string` beautiful.');
console.debug('debug:', 'one'.red.bold,'two'.yellow.italic,'three'.green.underline,'four'.magenta.inverse);
console.log('log:', 'five'.italic);
console.info('info:','six');
console.warn('warn:', 'seven'.black.yellowBG);
console.error('error:', 'eight'.underline, 'nine'.black.blueBG);



