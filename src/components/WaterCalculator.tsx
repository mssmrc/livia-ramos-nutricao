import { useState } from 'react'
import { dailyWater } from '~/lib/water'

/** Calculadora de água diária. Roda só no navegador; nada é enviado. */
export function WaterCalculator() {
  const [weight, setWeight] = useState('')
  const [active, setActive] = useState(false)
  const kg = Number(weight.replace(',', '.'))
  const result = dailyWater(kg, active)
  // O copo desenhado comporta 4 L; acima disso ele aparece cheio.
  const fill = result ? Math.min(result.liters / 4, 1) : 0

  return (
    <div className="calc">
      <div className="calc-inputs">
        <label>
          Seu peso (kg)
          <input
            inputMode="decimal"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Ex.: 68"
            aria-describedby="calc-help"
          />
        </label>
        <label className="calc-check">
          <input type="checkbox" checked={active} onChange={(e) => setActive(e.target.checked)} />
          Treino ou suo bastante na maioria dos dias
        </label>
        <p id="calc-help" className="calc-help">
          Referência geral de 35 ml por kg, mais 500 ml para quem treina. Gestantes, idosos e pessoas com
          doença renal ou cardíaca devem seguir a orientação individual.
        </p>
      </div>
      <div className="calc-visual">
        <div className="glass" aria-hidden="true">
          <span className="glass-water" style={{ height: `${Math.round(fill * 100)}%` }} />
          <span className="glass-marks">
            <i>4 L</i>
            <i>3 L</i>
            <i>2 L</i>
            <i>1 L</i>
          </span>
        </div>
        <output className="calc-result" aria-live="polite">
          {result ? (
            <>
              <span className="calc-liters">
                {result.liters.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} L
              </span>
              <span className="calc-glasses">por dia, cerca de {result.glasses} copos de 250 ml</span>
            </>
          ) : (
            <span className="calc-empty">Digite seu peso para ver quanto beber por dia.</span>
          )}
        </output>
      </div>
    </div>
  )
}
