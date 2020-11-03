export const obtenerPaginaDeInicio = (req, res, next) =>
{
  res.render('index', { 
    props: {
      title: 'incio'
    }
  });
}