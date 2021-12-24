class AuthRegister {

    get firstName () {
        return cy.get ("#first-name");
    }

    get lastName () {
        return cy.get ("#last-name");
    }

    get email () {
        return cy.get ("#email");
    }

    get password () {
        return cy.get ("#password");
    }

    get newPassword () {
        return cy.get ("#password-confirmation");
    }

    get formCheckbox () {
        return cy.get ("input[type=checkbox]");
    }

    get subbBtn () {
        return cy.get ("button[type='submit']");
    }
    
    get errorAlert () {
        return cy.get ('.alert');
    }

    register (firstName, lastName, email, password, newPassword) {
        this.firstName.clear().type(firstName);
        this.lastName.clear().type(lastName);
        this.email.clear().type(email);
        this.password.clear().type(password);
        this.newPassword.clear().type(newPassword);
        this.formCheckbox.check();
        this.subbBtn.click();
    }

    checkbox (firstName, lastName, email, password, newPassword) {
        this.firstName.clear().type(firstName);
        this.lastName.clear().type(lastName);
        this.email.clear().type(email);
        this.password.clear().type(password);
        this.newPassword.clear().type(newPassword);
        this.subbBtn.click();
    }

}

export const authRegister = new AuthRegister ();