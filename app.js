document.addEventListener("DOMContentLoaded", function() {
    const passwordinput = document.querySelector("#passwordinput");

    passwordinput.addEventListener("input", function() {
        const password = this.value;
        const strengthIndicator = document.querySelector("#password-strength-indicator");
        const strengthText = document.querySelector("#password-strength-text");

        const strengths = {
            0: "MUITO FRACA",
            1: "FRACA",
            2: "MODERADA",
            3: "FORTE",
            4: "MUITO FORTE",
        };

        let score = 0;

        
        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[a-z]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        const width = (score / 4) * 100;
        strengthIndicator.style.width = width + "%";

        switch (score) {
            case 1:
                strengthIndicator.style.backgroundColor = "red";
                break;
            case 2:
                strengthIndicator.style.backgroundColor = "orange";
                break;
            case 3:
                strengthIndicator.style.backgroundColor = "yellow";
                break;
            case 4:
                strengthIndicator.style.backgroundColor = "green";
                break;
            default:
                strengthIndicator.style.backgroundColor = "red";
        }

        strengthText.textContent = strengths[score];
    });
});
