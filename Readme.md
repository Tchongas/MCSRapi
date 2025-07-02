# MCSR API Documentation

## API Endpoints

### Runs de 1.16 RSG
```
GET https://script.google.com/macros/s/AKfycbztdxz4Cm5x03Xs_1mdX9Uxkf4g51FqohS-SqoAn28CPuvMAAJgdJsYhstp57PogdY4/exec?action=getrsg116
```

### Runs de 1.16 SSG
```
GET https://script.google.com/macros/s/AKfycbztdxz4Cm5x03Xs_1mdX9Uxkf4g51FqohS-SqoAn28CPuvMAAJgdJsYhstp57PogdY4/exec?action=getssg116
```

### Info de todos os Runners
```
GET https://script.google.com/macros/s/AKfycbztdxz4Cm5x03Xs_1mdX9Uxkf4g51FqohS-SqoAn28CPuvMAAJgdJsYhstp57PogdY4/exec?action=getrunners
```

## Respostas

### Exemplo de 1.16 RSG
```json
[
  "brahmaquente",      // Nome do runner
  "08:04",            // Tempo da run (MM:SS)
  "Housing",          // Bastion
  "05/12/25",         // Data da run (DD/MM/YY)
  "Sim",              // Verificada (sim ou nao)
  "4176313215067158543", // Numero da seed
  "https://www.youtube.com/watch?v=cadAlso-Ioo", // Video URL
  "Segundo RB seguido, mas ainda nao eh sub 8"  // Comentario sobre a run
]
```

### Exemplo de 1.16 SSG
```json
[
  "Treisdente", // Nome do runner
  "1:46.102", // Tempo da run (MM:SS.mmm)
  "One Shot", // Nome da seed
  "19/06/2025", // Data da run
  "Sim", // Verificada (sim ou nao)
  "https://youtu.be/QLCSJsjChxE", // Video URL
  "Primeio RB usando One shot, fim de uma era" // Comentario sobre a run
]
```

### Exemplo de Runners
```json
[
  "reiper", // Nome do runner
  "SP", // Estado
  "red" // Cor
]
```

## Descrição de cada campo

### 1.16 RSG
1. `Runner Name` - Nome do runner
2. `Time` - Tempo da run (MM:SS)
3. `Bastion` - Bastion da run
4. `Date` - Data da run (DD/MM/YY)
5. `Verified` - Verificada (sim ou nao)
6. `Seed Value` - Numero da seed
7. `Video URL` - Link do video da run
8. `Comment` - Comentario sobre a run

### 1.16 SSG
1. `Runner Name` - Nome do runner
2. `Time` - Tempo da run (MM:SS.mmm)
3. `Seed Name` - Nome da seed
4. `Verified` - Verificada (sim ou nao)
5. `Video URL` - Link do video da run
6. `Date` - Data da run
7. `Comment` - Comentario sobre a run

### Runners
1. `Runner Name` - Nome, usamos o nome que todos conhecem, entao em vez de shyaya, apenas shy
2. `State` - Estado
3. `Color` - Cor
