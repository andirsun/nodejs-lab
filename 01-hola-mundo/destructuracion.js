let deadpool = {
    nombre: 'wade',
    apellido: 'winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${ this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}; //Objeto puede tener funcionesno
let { nombre: name, apellido: lastname, poder: power } = deadpool; // con esto puedo asignar todas las variables de manera dinamica para ahorrar lineas de codigo y las puedo renombrar
console.log(name);