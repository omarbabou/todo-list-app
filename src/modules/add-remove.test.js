const { addTask, removeTask, removeAllCompleted } = require('./add-remove.js');

describe('addTask function testing', () => {
  test('description swimming index 1', () => {
    expect(addTask('', [{ description: 'swimming', completed: false, index: 1 }])).toEqual([{ description: 'swimming', completed: false, index: 1 }]);
  });

  test('description swimming index 1', () => {
    expect(addTask(undefined, [{ description: 'swimming', completed: false, index: 1 }])).toEqual([{ description: 'swimming', completed: false, index: 1 }]);
  });

  test('description swimming index 1 description watch movies index 2', () => {
    expect(addTask('watch movies', [{ description: 'swimming', completed: false, index: 1 }])).toEqual([{ description: 'swimming', completed: false, index: 1 }, { description: 'watch movies', completed: false, index: 2 }]);
  });

  test('description swimming index 1, description cooking index 2', () => {
    expect(addTask('cooking', [{ description: 'swimming', completed: false, index: 1 }])).toEqual([{ description: 'swimming', completed: false, index: 1 }, { description: 'cooking', completed: false, index: 2 }]);
  });
});
