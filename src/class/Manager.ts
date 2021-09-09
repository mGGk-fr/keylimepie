import KeyLimePie from '../components/KeyLimePie.svelte'
import KeyLimePieCore from './Core'
import services from '../services/services'

class Manager {
  instance
  declaredServices = {}

  constructor() {
    console.log('KeyLimePie V1 is booting')
  }

  addService(serviceKey, settings) {
    const service = Object.values(services).find(service => {
      return (service.key = serviceKey)
    })
    if (service) {
      service.settings = settings
    }
    this.declaredServices[serviceKey] = service
  }

  initialise() {
    KeyLimePieCore.services.set(this.declaredServices)
    this.instance = new KeyLimePie({
      target: document.body
    })
  }
}

export default Manager
