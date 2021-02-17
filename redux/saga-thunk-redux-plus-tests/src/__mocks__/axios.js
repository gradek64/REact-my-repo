/**
*
* @usage: those are synonims

 jest.fn().mockImplementation('success') ===
 jest.fn(() => Promise.resolve('success')) ===
 jest.fn().mockReturnValue(() => "success")

**/

export default {
  get: jest.fn(() => Promise.resolve("default")),
};

//
//
