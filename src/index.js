import app from './server';
import colors from 'colors';


const App = async () => 
{
  await app.listen(app.get('port'));
  console.log(`Server running on port ${colors.green(app.get('port'))}`);
}

App();