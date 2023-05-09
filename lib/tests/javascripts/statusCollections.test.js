const statusCollections = require('../../_javascripts/statusCollections');

describe('statusCollections', () => {
  test('should export module as a function', () => {
    expect(typeof statusCollections).toBe('function');
  });

  test('should call addCollection for each status', () => {
    const mockEleventyConfig = {
      addCollection: jest.fn(),
    };

    const result = statusCollections(mockEleventyConfig);
    expect(result).toBeUndefined();
    expect(mockEleventyConfig.addCollection).toHaveBeenCalledTimes(3);
    expect(mockEleventyConfig.addCollection).toHaveBeenNthCalledWith(
      1,
      'DRAFT',
      expect.any(Function)
    );
    expect(mockEleventyConfig.addCollection).toHaveBeenNthCalledWith(
      2,
      'REVIEW',
      expect.any(Function)
    );
    expect(mockEleventyConfig.addCollection).toHaveBeenNthCalledWith(
      3,
      'FINAL',
      expect.any(Function)
    );
  });
});

describe('statusCollections callback', () => {
  const mockEleventyConfig = {
    addCollection: jest.fn(),
  };

  const mockCollectionData = {
    getAll: jest
      .fn()
      .mockReturnValue([
        { data: { status: 'DRAFT', title: 'DRAFT Article' } },
        { data: { status: 'REVIEW', title: 'REVIEW Article' } },
        { data: { status: 'FINAL', title: 'FINAL Article' } },
      ]),
  };

  // mock console log
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  statusCollections(mockEleventyConfig);

  test.each(['DRAFT', 'REVIEW', 'FINAL'])(
    'should return correct collection data when status is: %s',
    (status) => {
      const foundCall = mockEleventyConfig.addCollection.mock.calls.find(
        (call) => call[0] === status
      );

      // should be the expected value
      expect(foundCall).toBeDefined();

      const callback = foundCall[1];
      const result = callback(mockCollectionData);

      expect(mockCollectionData.getAll).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith(
        `${status} status ${status} Article`
      );
      expect(result).toEqual([
        { data: { status, title: `${status} Article` } },
      ]);
    }
  );

  const mockCollectionDraftData = {
    getAll: jest
      .fn()
      .mockReturnValue([
        { data: { status: 'DRAFT', title: 'DRAFT Article' } },
        { data: { status: 'DRAFT', title: 'DRAFT Article' } },
        { data: { status: 'DRAFT', title: 'DRAFT Article' } },
      ]),
  };

  test.each(['DRAFT', 'REVIEW', 'FINAL'])(
    'should return an array of multiple DRAFT entries and no other data when status is: %s',
    (status) => {
      const foundCall = mockEleventyConfig.addCollection.mock.calls.find(
        (call) => call[0] === status
      );

      expect(foundCall).toBeDefined();

      const callback = foundCall[1];
      const result = callback(mockCollectionDraftData);

      expect(mockCollectionDraftData.getAll).toHaveBeenCalled();
      // DRAFT status should return array of data
      if (status === 'DRAFT') {
        expect(consoleSpy).toHaveBeenCalled();
        expect(consoleSpy).toHaveBeenCalledWith(
          `${status} status ${status} Article`
        );
        expect(result).toEqual([
          { data: { status, title: `${status} Article` } },
          { data: { status, title: `${status} Article` } },
          { data: { status, title: `${status} Article` } },
        ]);
      } else {
        expect(consoleSpy).not.toHaveBeenCalled();
        expect(result).toEqual([]);
      }
    }
  );
});
