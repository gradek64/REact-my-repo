const idify = (str = '') => str.toString().replace(/ /g, '-').toLowerCase()

export default idify
