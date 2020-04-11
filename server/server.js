const express = require('express');
const mongoose= require('mongoose');
const morgan= require('morgan');
const path = require('path');
const cors = require('cors'); // for same origin servers problem


const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');
//sangidb2013
//const MONGODB_URI = 'mongodb+srv://isaZuluaga:sangidb2013@sangicluster-0pmni.mongodb.net/test?retryWrites=true&w=majority';
const url = 'mongodb://isaZuluaga:sangidb2013@ds155313.mlab.com:55313/sangidb'

mongoose.connect(url ||'mongodb://localhost/sangidb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('mongoose is connected!!!');
});



// saving data to mongo database
// const data = {
//     fullName: 'Natalia Lacunza',
//     CC: '43095628',
//     cellphone: '3147526986',
//     address: 'carr 88 g # 34 b 56',
//     email:'nLacunza@sangi.es',
//     imgUrl:'shorturl.at/dwU48'
// };

//const newSangiMember = new SangiMember(data); // instance of model

// newSangiMember.save((error) => {
// if(error){
//     console.log('Oops something happened');
// }else{
//     console.log('Data has been saved');
// }
// });

app.use(cors());
//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);


app.listen(PORT, console.log(`Servidor funcionando at ${PORT}`));
