const importUrls = [
  'idb-keyval.js',
]
const scripts = importUrls.map(url => `${self.origin}/${url}`)
importScripts(...scripts)

var createStore = async (data) => {
  const kv = globalThis.idbKeyval
  const s = kv.createStore(data, 'test')
  return s
}

var testGet = async (t, s) => {
  const kv = globalThis.idbKeyval
  let promise = kv.get(t, s)
  promise.then((r) => {
    console.log('testGet', t, r); postMessage(`testGet:value:${t}:${r}`)
  })
  return promise
}