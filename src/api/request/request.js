
import { CoreRequest } from './fetch'


export function create_order(options) {
  options['url']='/api/business/create_order'
  options['method']='post'
  CoreRequest(options)
}