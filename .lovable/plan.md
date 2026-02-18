

## Trocar as 9 fotos dos palestrantes

### O que muda
- As 9 fotos atuais dos palestrantes serao substituidas pelas novas versoes enviadas (que incluem nome, cargo e descricao na propria imagem)
- **Diego Santana** sera substituido por **Natalia Migliorini** (nova palestrante)
- Os dados (nome e role) do speaker array serao atualizados para refletir a troca

### Mapeamento das fotos

| Palestrante atual | Nova foto | Acao |
|---|---|---|
| Diego Santana | `1NATI.png` | Substituido por Natalia Migliorini |
| Rogerio Andrade | `1ROGÉRIO-ANDRADE-2.png` | Foto atualizada |
| Zhang Ye | `1ZHANG-YE-2.png` | Foto atualizada |
| Rafael Born | `1RAFA-BORN-2.png` | Foto atualizada |
| Robson Galvao | `1ROBSON-GALVÃO-2.png` | Foto atualizada |
| Jack Alecrim | `1JACK-ALECRIM-2.png` | Foto atualizada |
| Luigi Constantino | `1LUIGI-CONSTANTINO-2.png` | Foto atualizada |
| Moritz Neto | `1MORITZ-NETO-2.png` | Foto atualizada |
| Fernando Scherer | `1XUXA--2.png` | Foto atualizada |

### Detalhes tecnicos

1. **Copiar 9 imagens** para `src/assets/speakers/` com nomes limpos (ex: `natalia-migliorini.png`, `rogerio-andrade-v2.png`, etc.)

2. **Atualizar `src/components/SpeakersSection.tsx`**:
   - Trocar o import de `diegoSantana` por `nataliaMigliorini` apontando para o novo arquivo
   - Atualizar todos os outros imports para as novas fotos
   - No array `speakers`, substituir Diego Santana por Natalia Migliorini (nome: "Natalia Migliorini", role: "Head de Marketing no G4, Fluency e Moriah")

