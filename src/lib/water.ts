/** Estimativa de água diária: 35 ml/kg + 500 ml para quem é ativo. Só aceita pesos plausíveis. */
export function dailyWater(
  kg: number,
  active: boolean,
): { ml: number; liters: number; glasses: number } | null {
  if (!Number.isFinite(kg) || kg < 30 || kg > 250) return null
  const ml = Math.round(kg * 35 + (active ? 500 : 0))
  return { ml, liters: Math.round(ml / 100) / 10, glasses: Math.ceil(ml / 250) }
}
