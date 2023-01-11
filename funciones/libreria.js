function deMedidaAMKS(x, k){
    return x * k;
}

function deMKSAMedida(x, k){
    return x / k;
}

const longitud = {
    mm: { value: 0.001, nombre: 'Milimetros', i:0},
    cm: { value: 0.01, nombre: 'Centimetros', i:1},
    mts: { value: 1, nombre: 'Metros', i:2},
    km: { value: 1000, nombre: 'Kilometros', i:6},
    plg: { value: 0.0254, nombre: 'Pulgadas', i:3},
    ft: { value: 0.03048, nombre: 'Pies', i:4},
    yd: { value: 0.9144, nombre: 'Yardas', i:5},
    Millas_Terrestres: { value: 1609.34, nombre: 'Millas Terrestres', i:7},
    Millas_Nauticas: { value: 1852, nombre: 'Millas Nauticas', i:8},
}

const masa = {
    gr: { value: 0.001, nombre: 'Gramos'},
    kg: { value: 1, nombre: 'Kilogramos'},
    oz: { value: 0.02835, nombre: 'Onzas'},
    lb: { value: 0.4536, nombre: 'Libras'},
    arr: { value: 11.34, nombre: 'Arrobas'},
    ton: { value: 1000, nombre: 'Toneladas'},
    Toneladas_Cortas: { value: 907.19, nombre: 'Toneladas Cortas'},
    Toneladas_Largas: { value: 1016.05, nombre: 'Toneladas Largas'},
}

const tiempo = {
    seg: {value: 1, nombre: 'Segundos'},
    min: { value: 60, nombre: 'Minutos'},
    Horas: { value: 3600, nombre: 'Horas'},
    Dias: { value: 86400, nombre: 'Dias'},
    Meses: { value: 2592000, nombre: 'Meses'},
    Años: { value: 31536000, nombre: 'Años'},
    Lustros: { value: 157680000, nombre: 'Lustros'},
}

export  {longitud, masa, tiempo, deMedidaAMKS, deMKSAMedida};