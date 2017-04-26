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

module.exports = function insert (data) {
  let log

  if (!this.program.quiet) {
    console.log(data)
  }

  try {
    log = JSON.parse(data)
  } catch (e) {
    log = {
      msg: data,
      time: new Date().getTime()
    }
  }
  const that = this

  this.db.insert(log, function insertOne (e, body) {
    if (e) {
      // this was a bug in pino-mongodb - 'this.program undefined'
      if (that.program.showInsertErrors) {
        console.error(e)
      }
    } else if (that.program.traceInserts) {
      console.dir(body)
    }
  })
}
