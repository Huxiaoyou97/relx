import { Command } from 'commander';
import fse from 'fs-extra';
import { CLI_PACKAGE_JSON } from './shared/constant.js';
const { readJSONSync } = fse;
const program = new Command();
program.version(`RELX ${readJSONSync(CLI_PACKAGE_JSON).version}`).usage('<command> [options]');
program.command('create <name>')
    .description('创建组件目录')
    .action(async (options) => {
    const { create } = await import('./commands/create.js');
    return create(options);
});
program
    .command('compile')
    .description('编译组件库代码')
    .option('-nu, --noUmd', '不编译 umd 目标代码')
    .action(async (options) => {
    const { compile } = await import('./commands/compile.js');
    return compile(options);
});
program
    .command('release')
    .option('-r --remote <remote>', 'Remote name')
    .description('Release all packages and generate changelogs')
    .action(async (option) => {
    const { release } = await import('./commands/release.js');
    return release(option);
});
program.on('command:*', async ([cmd]) => {
    const { default: logger } = await import('./shared/logger.js');
    program.outputHelp();
    logger.error(`\nUnknown command ${cmd}.\n`);
});
program.parse();
