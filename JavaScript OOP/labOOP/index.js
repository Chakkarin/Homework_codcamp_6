class UserTemplate {
    constructor(name, password, age) {
        this.name = name
        this.password = password
        this.age = age
        this.connected = false
    }

    login() {
        this.connected = true
        this.createDate = new Date()
        console.log('your login status :', this.connected)
    }

    logout() {
        this.connected = false
        console.log('your login status :', this.connected)
    }

    checkStatus() {
        console.log('your login status :', this.connected)
    }


}