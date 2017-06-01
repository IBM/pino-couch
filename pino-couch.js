#!/usr/bin/env node
/*
 * Copyright IBM Corp. 2017
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict'

const pkg = require('./package.json')
const program = require('commander')
const insert = require('./lib/insert')
const carrier = require('carrier')
const url = require('url')

program
  .version(pkg.version)
  .description(pkg.description)
  .option('-U, --url <url>', 'set database server', 'http://127.0.0.1:5984')
  .option('-d, --db <name>', 'set database name (logs)', 'logs')
  .option('-q, --quiet', 'suppress stdin to stdout output (false)', false)
  .option('--show-insert-errors', 'show errors from inserting documents into couchdb (true)', true)
  .option('-t, --trace-inserts', 'trace all inserted documents (false)', false)
  .parse(process.argv)

const rl = carrier.carry(process.stdin)

const postUrl = url.resolve(program.url, '/' + program.db + '?batch=ok')

rl.on('line', insert.bind({
  program: program,
  url: postUrl
}))
