/**
 * 1 function 
 * handleLoginForm(email, password): console.log({email, password})
 * 
 * Button per login - duhet me pas handleLoginForm
 * button.addEventListner("click", function() {
 *  email prej input; password prej input;
 *  edhe me thirr/invoke funksionin handleLoginForm(email, password)
 * })
 * 
 * 
 */

document.addEventListener("DOMContentLoaded", function(){
    //
    function handleLoginForm(email, password) {
        console.log({email, password})

        /**
         * atuny0@sohu.com / 9uQFF1Lh
         * kmeus4@upenn.edu / aUTdmmmbH
         */

        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then((data) => {
            //filter data - by email and password

            //if found - hide login form - show dashbaord

            //if not found - show error message
        });
    }

    handleLoginForm('atuny0@sohu.com', '9uQFF1Lh')

})