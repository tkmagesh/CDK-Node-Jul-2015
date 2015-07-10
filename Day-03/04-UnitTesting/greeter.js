module.exports = {
    greet : function(name){
        console.log(Date);
        if (new Date().getHours() < 12){
            return "Hi " + name + ", Good Morning!";
        } else {
            return "Hi " + name + ", Good Evening!";
        }
    }
}
