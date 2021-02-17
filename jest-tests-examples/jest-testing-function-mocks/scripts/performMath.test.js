import * as math from "./helpers/math"
import * as app from "./perfomMath"

test("calls math.add", () => {
    const add = math.add(1,2)
    expect(add).toBe(3)
})

test("calls app.doAdd", () => {
    const appAdd = app.doAdd(1,2)
    expect(appAdd).toBe(3)
})



test("our math functions have new functionality with mock assigned", ()=>{
    /*
    *@assignning mocks to the functions;
    *@
    */

    math.add = jest.fn()
    app.doAdd = jest.fn() 

    /*
    *@now our function can be called as below;
    *@the old functionality is gone;
    */

    const mathNew = math.add("new staff")
    const appNew = app.doAdd( "I am cool")
    //math.add
    expect(mathNew).toBeUndefined()
    expect(math.add).toHaveBeenCalled()
    expect(math.add).toHaveBeenCalledTimes(1)
    expect(math.add).toHaveBeenCalledWith("new staff")
    //app.doAdd
    expect(appNew).toBeUndefined()
    expect(app.doAdd).toHaveBeenCalled()
    expect(app.doAdd).toHaveBeenCalledTimes(1)
    expect(app.doAdd).toHaveBeenCalledWith("I am cool")
})


test("our math functions have new functionality with mock assigned and they also return a mock value", ()=>{
    /*
    *@assignning mocks to the functions;
    *@
    */

    math.add = jest.fn().mockImplementation(() => "some Value")
    //other syntax;
    app.doAdd = jest.fn()
    app.doAdd.mockReturnValue("bar value")

    /*
    *@now our function can be called as below;
    *@the old functionality is gone now our function returns above values;
    */

    //math.add
    expect(math.add()).toBe("some Value")
    expect(app.doAdd()).toBe("bar value")


})

test("our math functions have new functionality that returns promise", ()=>{
    /*
    *@assignning mocks to the functions that return promise;
    *@
    */

    math.add = jest.fn().mockImplementation(() => Promise.resolve("promise resolve"))
    math.devide = jest.fn().mockImplementation((value) => Promise.reject(value))
    //other syntax;
    app.doAdd = jest.fn()
    app.doAdd.mockResolvedValue("bar")

    /*
    *@now our function can be called as below;
    *@the old functionality is gone now our function returns above values that resolves in promise resolved;
    */

    //math.add
    expect(math.add()).resolves.toBe("promise resolve")
    expect(app.doAdd()).resolves.toBe("bar")
    expect(math.devide("rejected")).rejects.toBe("rejected")


})
describe("use js.mock() for all exported fn",()=>{
// Set all module functions to jest.fn
    jest.mock("./helpers/math")

    test("using js.mock() for mocking all exported functions from the module", ()=>{

        //pick any function from module set to mock and call it;
        math.add("add")
        expect(math.add).toHaveBeenCalledWith("add")
    })
})

describe("use js.spyOn() to mock function and then restore original implementation",()=>{
    const addMock = jest.spyOn(math, "add")

    // override the implementation
    addMock.mockImplementation(() => "mock")
    expect(app.doAdd(1, 2)).toEqual("mock")

    // restore the original implementation
    addMock.mockRestore()
    expect(app.doAdd(1, 2)).toEqual(3)
})

