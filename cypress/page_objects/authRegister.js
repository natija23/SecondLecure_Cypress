class AuthRegister {

    get FirstName () {
        return cy.get ("#first-name");
    }

    get LastName () {
        return cy.get ("#last-name");
    }

    get Email () {
        return cy.get ("#email");
    }

    get Password () {
        return cy.get ("#password");
    }

    get NewPassword () {
        return cy.get ("#password-confirmation");
    }
    get FormCheckbox () {
        return cy.get ("input[type=checkbox]");
    }
    get subBtn () {
        return cy.get ("button[type='submit']");
    }

    register (FirstName, LastName, Email, Password, NewPassword) {
        this.FirstName.clear().type(FirstName);
        this.LastName.clear().type(LastName);
        this.Email.clear().type(Email);
        this.Password.clear().type(Password);
        this.NewPassword.clear().type(NewPassword);
        this.FormCheckbox.check();
        this.subBtn.click();
    }
}

export const authRegister = new AuthRegister ();