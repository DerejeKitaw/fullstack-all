const getSha1 = require('../getSha1')

module.exports = class ListNode {
  constructor (value, next = null) {
    this.value = value
    this.next = next
    this.id = getSha1(value)
  }

  toString () {
    const arr = []
    let cur = this
    while (cur) {
      arr.push(cur.id)
      cur = cur.next
    }
    return `[${arr.join(' ')}]`
  }

  length () {
    if (!this.next) return 1
    else return 1 + this.next.length()
  }

  prepend (value) {
    return new ListNode(value, this)
  }

  append (list) {
    if (!this.next) return new ListNode(this.value, list)
    else return new ListNode(this.value, this.next.append(list))
  }

  remove (id) {
    if (this.id === id) return this.next
    else return new ListNode(this.value, this.next ? this.next.remove(id) : null)
  }

  splitAt (id) {
    if (this.id === id) return null
    else return new ListNode(this.value, this.next ? this.next.splitAt(id) : null)
  }

  find (id) {
    if (this.id === id) return this
    else return this.next ? this.next.find(id) : null
  }

  insertAt (id, list) {
    if (this.id === id) return list.append(this)
    else return new ListNode(this.value, this.next ? this.next.insertAt(id, list) : null)
  }

  intersection (list) {
    const found = list.find(this.id)
    if (found) return found
    else return this.next ? this.next.intersection(list) : null
  }
}
