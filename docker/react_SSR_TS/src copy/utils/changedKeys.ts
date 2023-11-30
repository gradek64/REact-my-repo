const checkWhichKeysChanged = (oldObj: any, newObj: any): string[] => {
  const oldKeys = Object.keys(oldObj)
  const newKeys = Object.keys(newObj)
  const changedKeys: string[] = []

  // check if any old keys are deleted
  oldKeys.forEach((key) => {
    if (newKeys.indexOf(key) === -1) {
      changedKeys.push(key)
    }
  })

  newKeys.forEach((key) => {
    //check if any new keys are added
    if (oldKeys.indexOf(key) === -1) {
      changedKeys.push(key)
    }
    // check if any keys have changed
    else if (JSON.stringify(oldObj[key]) !== JSON.stringify(newObj[key])) {
      changedKeys.push(key)
    }
  })

  return changedKeys
}

export const changedKeys = (oldObj: any, newObj: any) => {
  return [
    ...checkWhichKeysChanged(oldObj.config.ARGOS, newObj.config.ARGOS),
    ...checkWhichKeysChanged(oldObj.config.HABITAT, newObj.config.HABITAT),
    ...checkWhichKeysChanged(oldObj.features, newObj.features),
  ]
}
