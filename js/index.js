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
        /**
         * atuny0@sohu.com / 9uQFF1Lh
         * kmeus4@upenn.edu / aUTdmmmbH
         */

        fetch('https://dummyjson.com/users') //return me all users;
        .then(res => res.json()) //parse it in json
        .then((data) => { //function - let me decide what to do with that response
            const allUsers = data.users;
            //find data - by email and password
            const user = allUsers.find((user) => user.email === email && user.password === password)

            //if found - hide login form - show dashbaord
            if(user) {
                //
            }

            //if not found - show error message
        });
    }

    /**
     * button per login??
     */
    document.getElementById('button').addEventListener('click', function() {

        //email, edhe password, edhe pe percjellmi te
        //te function handleLoginForm(email,password);
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        handleLoginForm(email, password);
    })

})