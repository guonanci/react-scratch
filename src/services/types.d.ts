import services from './index'

declare module 'Types' {
  type Service = typeof services
}