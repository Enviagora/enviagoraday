

## Ajuste do Grid de Palestrantes

### O que muda
- O grid atual exibe **4 palestrantes por linha no desktop** e **2 no mobile**
- Será alterado para **3 por linha no desktop** e **2 no mobile** (mantendo o mobile igual)
- O container `max-w-5xl` sera ampliado para `max-w-6xl` para que os cards fiquem maiores
- O gap entre os cards será levemente aumentado para melhor respiro visual

### Detalhes Técnicos
No arquivo `src/components/SpeakersSection.tsx`, linha 35:
- `grid-cols-2 md:grid-cols-4` passa para `grid-cols-2 md:grid-cols-3`
- `max-w-5xl` passa para `max-w-6xl`
- `gap-3 md:gap-4` passa para `gap-3 md:gap-5`

Com 8 palestrantes e 3 por linha, teremos 3 fileiras (3 + 3 + 2), com a ultima linha centralizada automaticamente pelo grid.

