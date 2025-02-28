import * as types from './types'
import { getPageProperty } from '@billq/notion-utils'

export function getPageTweet(
  block: types.Block,
  recordMap: types.ExtendedRecordMap
): string | null {
  return getPageProperty('Tweet', block, recordMap)
}
