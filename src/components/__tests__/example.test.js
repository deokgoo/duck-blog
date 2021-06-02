import React from 'react';
import renderer from 'react-test-renderer';

describe("example test", () => {
  it("example", () => {
    const tree = renderer
      .create(<div className="example"/>)
      .toJSON()
    expect(1).toBe(1);
  })
})
