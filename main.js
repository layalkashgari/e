var canvas = document.getElementById('viewport');

var width1 = canvas.width;
var height1 = canvas.height;

console.log(width1, " ", height1)
var context = canvas.getContext('2d');
base_image = new Image();
base_image.src = 'Eid.jpg';// pic
function make_base() {

        // document.getElementById('input1').style.visibility = "hidden";
        document.getElementById('input2').style.visibility = "hidden";
        document.getElementById('button').style.visibility = "hidden";

        document.getElementById('button').style.display = 'block';
        // var textInput1 = document.getElementById('input1').value;
        var textInput2 = document.getElementById('input2').value;

        canvas.clientWidth = base_image.width;
        canvas.clientHeight = base_image.height;


        context.clearRect(10, 10, canvas.width, canvas.height); // takes the text and prints it on the image 
        context.drawImage(base_image, 0, 0, canvas.width, canvas.height);
        context.font = 'bold 55px Verdana'; // font type and size - if i change this 
        context.textAlign = 'end';
        context.fillStyle = "grey"; // #56555aff
        // context.fillText(textInput1, 1500, 1400);
        context.fillText(textInput2, 1530, 1500); // right left ,  fog t7t
        document.getElementById("personName1").innerHTML = "تهنئك عائلة ديفوتيم بعيد الاضحى المبارك. عيدك مبارك "; // mah - what should i put here? from devoteam 
        document.getElementById("personName").innerHTML = textInput2;  // to print the name after kol 3am went b5eer 
        // document.getElementById("theimage").src = canvas.toDataURL();

        // var button = document.getElementById('btn-download');
        // button.addEventListener('click', function (e) {
        //         var dataURL = canvas.toDataURL('image/jpg');
        //         button.href = dataURL;
        // });
}


