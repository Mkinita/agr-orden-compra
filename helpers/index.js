export const formatearDinero = cantidad => {
    if (cantidad != null) {
      return cantidad.toLocaleString('es-CL',{
        style: 'currency',
        currency:'CLP',
        minimumFractionDigits: 0
      });
    } else {
      return '';
    }
  };
  