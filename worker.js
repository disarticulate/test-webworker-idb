onmessage = async function (e) {
  const importUrls = [
    'main.js',
  ]
  const scripts = importUrls.map(url => `${self.origin}/${url}`)
  importScripts(...scripts)
  let data = e.data
  try {
    let db = await createStore(data)
    console.log('has:db', { db })
    postMessage(`has:db:${data}`)
    let value = await testGet(data, db)
    console.log('has:value', { value, db })
    postMessage(`has:value:${value}`)
    postMessage(value)
  } catch (e) {
    console.warn(e)
  }
}
