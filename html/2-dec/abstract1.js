    class User {
    constructor(email, password) {
        this.email = email;
        this.password = password; 
    }


    login(email,password) {
        let isCorrect = checkPassword(email, password);
        return  isCorrect;
    }

}