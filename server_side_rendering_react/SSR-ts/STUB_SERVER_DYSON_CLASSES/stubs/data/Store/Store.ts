import APILogger from '../../helpers/APILogger'
import storeDatasets from './StoreDatasets'
import { SerialisableStubObject, StoreStub } from 'types/stubs'
import { Store as orderStore } from 'types/api/order'

interface CurrentStore extends orderStore {
  mandatoryPrepay: boolean
  country: string
}

class Store implements SerialisableStubObject<StoreStub> {
  static DEFAULT_STORE_ID = '140'
  private _hasMissingStoreInfo: boolean
  private _currentStore: CurrentStore

  setDefaults() {
    this._hasMissingStoreInfo = false
    this._currentStore = { ...(storeDatasets[Store.DEFAULT_STORE_ID] as CurrentStore) }
  }

  get hasMissingStoreInfo() {
    return this._hasMissingStoreInfo
  }

  set hasMissingStoreInfo(value) {
    this._hasMissingStoreInfo = value
  }

  constructor() {
    this.setDefaults()
  }

  toJson() {
    return {
      id: this._currentStore.id,
      hasMissingStoreInfo: this._hasMissingStoreInfo,
    }
  }

  fromJson(json: { id: string; hasMissingStoreInfo: boolean }) {
    this._currentStore = (storeDatasets[json.id] || storeDatasets[Store.DEFAULT_STORE_ID]) as CurrentStore
    this._hasMissingStoreInfo = json.hasMissingStoreInfo
  }

  reset() {
    this.setDefaults()
  }

  get currentStore() {
    return {
      id: this._currentStore.id,
      mandatoryPrepay: this._currentStore.mandatoryPrepay,
      name: this._currentStore.legacyName,
      legacyName: this._currentStore.legacyName,
      town: this._currentStore.town,
      county: this._currentStore.county,
      postcode: this._currentStore.postcode,
      country: this._currentStore.country,
      addressLine: this._currentStore.addressLine,
      location: this._currentStore.location,
      timetable: this._currentStore.timetable,
    }
  }

  updateStore(storeId: string) {
    if (storeDatasets[storeId]) {
      const store = storeDatasets[storeId] as CurrentStore
      APILogger(`API: Setting store to ${store.legacyName}`)
      this._currentStore = store
    } else {
      // We only stub out a few store ids, if its not recognised, pick this one automatically
      const store = storeDatasets[Store.DEFAULT_STORE_ID] as CurrentStore

      APILogger(`API: Setting store to fallback ${store.legacyName}`)
      this._currentStore = store
    }
  }

  get isClickAndCollect() {
    return this._currentStore.mandatoryPrepay
  }
}

export default Store
