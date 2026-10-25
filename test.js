// seters&geters
class User {
    #password;

    constructor(password) {
        this.password = password;
    }

    get password() {
        return this.#password;
    }

    set password(newPassword) {
        this.#password = newPassword;
    }
}

const user = new User("12345");
console.log(user.password);
user.password = "67890";
console.log(user.password);








