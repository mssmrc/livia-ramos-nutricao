import { describe, expect, it } from 'vitest'
import { dailyWater } from '~/lib/water'

describe('dailyWater', () => {
  it('calcula 35 ml por kg', () => {
    expect(dailyWater(60, false)).toEqual({ ml: 2100, liters: 2.1, glasses: 9 })
  })
  it('soma 500 ml para quem é ativo', () => {
    expect(dailyWater(60, true)?.ml).toBe(2600)
  })
  it('ignora pesos fora do intervalo', () => {
    expect(dailyWater(0, false)).toBeNull()
    expect(dailyWater(Number.NaN, false)).toBeNull()
    expect(dailyWater(400, false)).toBeNull()
  })
})
