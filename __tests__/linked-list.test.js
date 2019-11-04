'use strict';

const {LinkedList} = require('../linked-list');

describe('LinkedList', () => {
  it('builds linked lists as expected', () => {
    const list = new LinkedList();
    expect(list.toString()).toEqual('[]');
  });

  it('adds data to a list as expected', () => {
    const list = new LinkedList();
    list.insert(4);
    expect(list.toString()).toEqual('[4]');
    list.insert(2);
    expect(list.toString()).toEqual('[2, 4]');
    list.insert('dogs');
    expect(list.toString()).toEqual('[dogs, 2, 4]');
  });

  it('can identify member values', () => {
    const list = new LinkedList();
    list.insert(4);
    expect(list.includes(4)).toBeTruthy();
    expect(list.includes(2)).toBeFalsy();
    list.insert(2);
    expect(list.includes(2)).toBeTruthy();
  });
});
