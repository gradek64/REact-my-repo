import responseMocks from './responseMocks'

export default [
  {
    fixtures: (match, body) => {
      return Object.keys(responseMocks).reduce((accumulator, mock) => {
        if (match.input === responseMocks[mock].path) {
          const response = responseMocks[mock].response
          return typeof response === 'function' ? response(match, body) : response
        }

        return accumulator
      }, [])
    },

    get: (match, data) => {
      return {
        body: data,
        status: 200,
      }
    },

    post: (match, data) => {
      return {
        body: data,
        status: 201,
      }
    },

    put: (match, data) => {
      return {
        body: data,
        status: 200,
      }
    },

    delete: () => {
      return {
        status: 204,
      }
    },

    patch: (match, data) => {
      return {
        body: data,
        status: 200,
      }
    },
  },
]
