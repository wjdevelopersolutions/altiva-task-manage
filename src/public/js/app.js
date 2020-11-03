
// Prevenir el salto de lineas en el textarea al presional la tecla ENTER
const pulsar = (e) => {
  if (e.which === 13 && !e.shiftKey) {
    e.preventDefault();
    console.log('Textarea prevented salt lines');
    return false;
  }
}

pulsar()

console.log('Hola mundo');