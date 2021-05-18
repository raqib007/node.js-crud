module.exports = mongoose =>{
    const User = mongoose.model(
        'user',
        mongoose.Schema({
           id: String,
           first_name: String,
           last_name: String,
           email: String,
           password: String
        },{timestamps:true})
    );

    return User;
}