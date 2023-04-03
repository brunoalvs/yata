// IndexedDB database
// https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB

import { openDB } from 'idb'

const dbPromise = openDB('my-db', 1, {
  upgrade(db) {
    db.createObjectStore('my-store')
  }
})

export default dbPromise
