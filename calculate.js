function gpa() {
    var math, science, english, filipino, mapeh, esp, sum, average;

    math = parseInt(document.getElementById('math').value);
    science = parseInt(document.getElementById('science').value);
    english = parseInt(document.getElementById('English').value);
    filipino = parseInt(document.getElementById('Filipino').value);
    mapeh = parseInt(document.getElementById('Mapeh').value);
    esp = parseInt(document.getElementById('esp').value);

    sum = math + science + english + filipino + mapeh + esp;
    average = sum / 6;

    document.getElementById("average").value = average.toFixed(2);

    if (average >= 75) {
        alert("You passed! Your average grade is " + average.toFixed(2));
    } else {
        alert("You failed. Your average grade is " + average.toFixed(2));
    }
}
