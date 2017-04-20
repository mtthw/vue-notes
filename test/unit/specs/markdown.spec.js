import markdown from '@/functions/markdown'
import assert from 'assert'

const mock_string = `0
1
2
3
4
5
6
7
8
9
`

describe('markdown.js', () => {
  describe('before', () => {
    it('should return all content until a line number, exclusive, zero indexed)', () => {
      var result = markdown.before(mock_string, 4)
      assert.equal(result, '0\n1\n2\n3')
    })
  })
  describe('current', () => {
    it('should return only the current line', () => {
      var result = markdown.current(mock_string, 4)
      assert.equal(result, '4')
    })
  })
  describe('after', () => {
    it('should return all line after', () => {
      var result = markdown.after(mock_string, 4)
      assert.equal(result, '5\n6\n7\n8\n9\n')
    })
  })
})
