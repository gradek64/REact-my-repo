//fn(()=42)== =.mockImplementation(()=>42)
//=========================================================
// jest helper mock function
//
// basic jest mock function is jest.fn()
//but there are synonims to this as below
//=========================================================

import { response } from "express";

/**
 * Example Usage:
 *
 * @ jest.fn(()=>42) === jest.fn().mockImplementation(()=>42)
 * @ jest.fn(()=>42) === jest.fn().mockReturnValue(()=>42)
 *
 * shortcut for promise rosolve is:
 * jest.fn().mockImplementation(() => Promise.resolve(value));
 */
global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => {
      return {
        response: "success",
      };
    },
  })
);
//.mockResolvedValue({ fetch: "successful" });

export default global.fetch;
