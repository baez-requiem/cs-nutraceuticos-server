import { getDbDateTime } from "./dateUtils"

export const sortByCreatedAt = <T extends {created_at: string|Date}>(arr: T[], opt: 'ASC'|'DESC' = 'ASC') => {
  const result = arr.sort((a, b) => {
    const aTime = getDbDateTime(a.created_at)
    const bTime = getDbDateTime(b.created_at)

    return opt === 'ASC'
      ? aTime - bTime
      : bTime - aTime
  })

  return result
}