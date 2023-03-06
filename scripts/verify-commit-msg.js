import chalk from 'chalk'; // 控制台日志标注样式
import fs from 'fs';
const msgPath = process.env.GIT_PARAMS || '.git/COMMIT_EDITMSG' // 读取到保存 git commit 时输入的描述信息的文件目录，一般路径如下：.git/COMMIT_EDITMSG
const msg = fs.readFileSync(msgPath, 'utf-8').trim()

const commitRE =
  /^(revert: )?(wip|release|feat|fix|polish|docs|style|refactor|perf|test|workflow|ci|chore|types|build)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.log()
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
      `invalid commit message format.`
    )}\n\n` +
      chalk.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
      ) +
      `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
      `    ${chalk.green(
        `fix(v-model): handle events on blur (close #28)`
      )}\n\n` +
      chalk.red(`  See .github/COMMIT_CONVENTION.md for more details.\n`)
  )
  process.exit(1)
}