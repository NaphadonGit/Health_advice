function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // เปลี่ยนส่วนสูงเป็นเมตร

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert("กรุณากรอกน้ำหนักและส่วนสูงให้ถูกต้อง");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById("bmi-result").innerText = bmi;

    let message;
    if (bmi < 18.5) {
        message = "คุณมีน้ำหนักน้อยเกินไป";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        message = "คุณมีน้ำหนักปกติ";
    } else if (bmi >= 25 && bmi <= 29.9) {
        message = "คุณมีน้ำหนักเกิน";
    } else {
        message = "คุณมีภาวะอ้วน";
    }

    document.getElementById("bmi-message").innerText = message;
}
